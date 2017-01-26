import Koa from 'koa';
import Router from 'koa-66';
import convert from 'koa-convert';
import jsonSuit from 'koa-json-suit';
import path from 'path';
import request from 'request-promise';
import serve from 'koa-static';
import translateCondition from './src/translateCondition';

const app = new Koa();
const router = new Router();

const lastResponse = null;

const getForecast = async (attempts = 0) => {
  const req = await request({
    url: 'https://query.yahooapis.com/v1/public/yql?q=select%20item%20from%20weather.forecast%20where%20woeid%20%3D%20455827&format=json'
  });

  const results = JSON.parse(req).query.results
  if (!results) {
    if (attempts >= 1) {
      if (lastResponse) {
        return lastResponse;
      } else {
        throw new Error(`Couldn't reach Yahoo API (maximum attempts reached).`);
      }
    }
    return getForecast(attempts+1);
  }

  const item = results.channel.item;
  item.condition.text = translateCondition(item.condition.code);
  item.forecast.map((i) => {
    i.text = translateCondition(i.code);
  });
  return item;
}

router.get('/weather', async function (ctx, next) {
  ctx.body = await getForecast();
});

app
  .use(convert(jsonSuit({
    pretty: true,
    catchErrors: true
  })))
  .use(convert(serve(path.join(__dirname, 'build'))))
  .use(router.routes());

app.listen(8081, () => {
  console.log('Server started at: http://localhost:8081');
});
