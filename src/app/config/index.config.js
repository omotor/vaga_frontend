(function() {
	'use strict';

	angular
		.module('test')
		.config(config);

	function config($translateProvider, ChartJsProvider, blockUIConfig) {

		blockUIConfig.autoBlock = false;

		$translateProvider.translations('pt-br', {
			'Sun' : 'Dom',
			'Mon' : 'Seg',
			'Tue' : 'Ter',
			'Wed' : 'Qua',
			'Thu' : 'Qui',
			'Fri' : 'Sex',
			'Sat' : 'Sab',
		});

		$translateProvider.preferredLanguage('pt-br');

		ChartJsProvider.setOptions({ 
			colors : [ '#fff', '#fff', '#DCDCDC', '#fff', '#fff', '#fff', '#fff'],
			padding : 30,
			fontSize : 30,
		});

	}

})();