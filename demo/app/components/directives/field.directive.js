(function() {
    'use strict';

    angular
        .module('app')
        .directive('field', field);

	field.$inject = ['$timeout'];

    function field($timeout) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function ($scope, $element) {
				$element.on('focus', function() {
                	handlerReturn($element, 'focus');
                });
				
				$element.on('blur', function() {
					$timeout(function() {
						if(($element[0].value).length === 0) {
							handlerReturn($element, 'blur');
						}
					}, true);
                });
            }
        };

        function handlerReturn(element, event) {
			switch(event) {
				case 'focus':
					addFieldActive(element);
					break;
				case 'blur':
					removeFieldActive(element);
					break;
			}
		}

		function addFieldActive(element) {
			element.addClass('fld-active');
		}

		function removeFieldActive(element) {
			element.removeClass('fld-active');
		}
    }
})();
