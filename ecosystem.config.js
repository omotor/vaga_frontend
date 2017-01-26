module.exports = {
  apps : [
    {
      name      : "sitex-weather",
      script    : "server.js",
      watch: [
        'index.js',
        'server.js',
        'translateCondition.js',
        'package.json'
      ],
      env: {
        NODE_ENV: 'development'
      },
      env_development: {
        NODE_ENV: 'development',
      },
      env_staging: {
        NODE_ENV: 'staging',
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
