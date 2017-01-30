(function() {
	'use strict';
	angular
		.module('test')
		.controller('appController', function($scope, apiServices, $filter, blockUI) {

            blockUI.start('Carregando...');

            var translate = $filter("translate");
            
            $scope.labels = [];
            $scope.data = [];

            $scope.loadWeather = function(){
                var weather = apiServices.getWeather($scope.tempScale);
                weather.then(function(response){
                    if (response.data.query.results != null) {
                        $scope.weather = response.data.query;
                        $scope.lineChart = $scope.weather.results.channel.item.forecast;
                        var forecast = $scope.weather.results.channel.item.forecast;
                        $scope.labels = [];
                        $scope.data = [];
                        var high = [];
                        var low = [];
                        for (var i = 0; i < forecast.length; i++) {
                            $scope.labels.push(translate(forecast[i].day));
                            high.push(forecast[i].high);
                            low.push(forecast[i].low);
                        }
                        $scope.data.push(high);
                        $scope.data.push(low);
                        blockUI.stop();
                    }
                })
            }

            $scope.datasetOverride = [{
                yAxisID: 'y-axis-1'
            }, {
                yAxisID: 'y-axis-2'
            }];

            $scope.options = {
                responsive: true, 
                maintainAspectRatio: true,
                layout : { padding: 15 },
                title: {
                    display: false,
                },
                tooltips : {
                    enabled : true,
                    mode : 'index'
                },
                datasets : [ {pointHoverRadius: 10 }, {pointHoverRadius: 10 } ],
                scales: {
                    yAxes: [{
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left',
                        gridLines : {
                            drawTicks : false,
                            drawBorder : false,
                        },
                        ticks: {
                            stepSize: 1
                        }
                    }, {
                        id: 'y-axis-2',
                        type: 'linear',
                        display: false,
                        position: 'right',
                        fontSize: 35,
                        gridLines : {
                            drawTicks : false,
                            drawBorder : false,
                            fontSize: 35
                        },
                        ticks : {
                            fontSize: 35
                        }
                    }]
                }
            };

            setInterval(function() {
                $scope.loadWeather();
            }, 5000);

		});
})();