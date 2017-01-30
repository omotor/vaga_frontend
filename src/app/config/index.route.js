(function() {
	'use strict';

	angular
		.module('test')
		.config(routerConfig);

	function routerConfig($stateProvider, $urlRouterProvider) {
        
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/templates/weather/weather.html',
				controller: 'appController'
			});

		$urlRouterProvider.otherwise('/');
	}

})();