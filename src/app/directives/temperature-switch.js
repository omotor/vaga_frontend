(function() {
    'use strict';

    angular
        .module('test')
        .directive('switchTemperature', function() {

            return {
                restrict: "EA",
                scope: false,
                replace : true,
                template: 
                    '<div class="onoffswitch">' +
                        '<input type="checkbox" name="onoffswitch" ng-if="tempScale == \'c\'" class="onoffswitch-checkbox" id="myonoffswitch" checked ng-click="changeFahrenheit()">' +
                        '<input type="checkbox" name="onoffswitch" ng-if="tempScale == \'f\'" class="onoffswitch-checkbox" id="myonoffswitch" ng-click="changeCelsius()">' +
                        '<label class="onoffswitch-label" for="myonoffswitch">' +
                            '<span class="onoffswitch-inner"></span>' +
                            '<span class="onoffswitch-switch"></span>' +
                        '</label>' +
                    '</div>', 
                controller: function($scope, blockUI) {
                    $scope.tempScale = 'c';
                    $scope.changeCelsius = function() {
                        blockUI.start('Carregando em Celsius...');
                        $scope.tempScale = 'c';
                        $scope.loadWeather();
                    }
                    $scope.changeFahrenheit = function() {
                        blockUI.start('Carregando em Fahrenheit...');
                        $scope.tempScale = 'f';
                        $scope.loadWeather();
                    }
                }
            }

        });

})();
                // return {
                //     restrict: 'E',
                //     transclude: false,
                //     replace: true,
                //     scope: {
                //         // onPost: "&"
                //     },
                //     templateUrl: "/temperature-switch/temperature-switch.html",
                //     controller: function($scope) {
                //     }
                // };