(function() {
	'use strict';

	angular
	.module('test')
	.directive('dayTime', function() {
		return {
			restrict: 'A',
			link : function(scope, el, attr) {

				var dayTime = new Date(); 
		  
				if ( dayTime.getHours() < 12 )  {
					el.addClass('day-weather');
				} 
				else if ( dayTime.getHours() >= 12 && dayTime.getHours() <= 17 ) { 
					el.addClass('sunset-weater');
				} 
				else if ( dayTime.getHours() > 17 && dayTime.getHours() <= 24 ) { 
					el.addClass("night-weather");
				} 
				else {
					el.addClass('day-weather');
				} 
			}
		}
				
	}); 

})();