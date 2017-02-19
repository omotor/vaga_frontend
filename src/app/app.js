var app = angular.module('myApp', ['ngRoute', 'chart.js', 'templates']);

app.config(['$routeProvider', 'ChartJsProvider', function($routeProvider, ChartJsProvider){

    $routeProvider  
        .when('/previsao-tempo/:woeid?', {
            templateUrl: 'app/previsao-tempo/views/previsao-tempo.html',
            controller: 'PrevisaoTempoCtrl'
        })

        .otherwise('/previsao-tempo');
        
        ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
}]);

