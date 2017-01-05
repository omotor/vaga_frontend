# Teste para Vaga Front-End AngularJS

Este exercício será utilizado para avaliar profissionais para a vaga de Frontend. 


## Como participar:

Para participar do teste, faça um Fork deste repositório e crie uma Branch nomeada com seu nome e sobrenome no formato **nome_sobrenome**.

Execute o exercício descrito a seguir e ao finalizar, faça um pull-request da sua branch para a master deste projeto.

O projeto deve ser executado em Angular 1.6 com uma geração de Bundle utilizando o Gulp(templatecache, uglify é um diferencial).

O layout é Livre e seu design será parte menor da avaliação, o importante é mostrar que você sabe utilizar HTML5, CSS3, JS. A folha de estilos deve ser criada utilizando LESS.

Por favor não envie o exercício utilizando typescript. O que deve ser avaliado é seu conhecimento em JS.


## Exercício


* Acesse a URL https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%20455827&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys
* Nesta URL esta o retorno da api do yahoo weather com o woeid de São Paulo.
* Crie uma página com uma tabela que mostre a condição do tempo (Estado, Data(Formato dd/mm/yyyy hh:mm:ss), Temperatura fahrenheit, Temperatura celsius, Previsão traduzida (Texto inglês para português))
* Atualize a tabela adicionando uma nova previsão quando ocorrer mudanças
* Deve ser incluída na página um **gráfico de linha (Line Chart)** mostrando a diferença entre as **5 maiores** temperaturas da tabela.
