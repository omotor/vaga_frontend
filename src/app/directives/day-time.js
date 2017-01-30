(function() {
	'use strict';

	angular
	.module('test')
	.directive('dayTime', function() {
		return {
			restrict: 'A',
			link : function(scope, el, attr) {
				var dayTime = new Date();
				console.log(dayTime.getHours());
				if ( dayTime.getHours() >= 5 && dayTime.getHours() <= 17 )  {
					el.addClass('day-weather');
				} 
				else if ( dayTime.getHours() >= 17 && dayTime.getHours() <= 20 ) { 
					el.addClass('sunset-weater');
				} 
				else if ( dayTime.getHours() >= 20 && dayTime.getHours() <= 5 ) { 
					el.addClass("night-weather");
				} 
				else {
					el.addClass('day-weather');
				} 
			}
		}
				
	}); 

})();