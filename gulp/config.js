module.exports = {
    build: {
        path: 'build/',
        jsDependencies: ['node_modules/jquery/dist/jquery.min.js/',
                        'node_modules/bootstrap/js/bootstrap.min.js',
                        'node_modules/angular/angular.min.js',
                        'node_modules/angular-route/angular-route.min.js',
                        'node_modules/chart.js/dist/Chart.min.js',
                        'node_modules/angular-chart.js/dist/angular-chart.min.js'],
        jsFiles: ['src/**/*.js'],
        jsFileUglyfied: 'all.js',
        cssDependencies: ['node_modules/bootstrap/dist/css/bootstrap.min.css',
                          'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
                          'css/font-awesome.min.css']
    },
    browserSync: {
        server: {
            baseDir: './build',
        },
        port: 3031
    }
}