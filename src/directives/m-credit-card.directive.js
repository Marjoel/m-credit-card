(function() {
	'use strict';

	angular
		.module('mCreditCard')
		.directive('mCreditCard', CreditCard);

	CreditCard.$inject = ['CreditCardFactory'];

	function CreditCard(CreditCardFactory) {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: link
		};

		function link($scope, $element, $attrs, ngModel) {
			$scope.$watch($attrs.ngModel, function(newValue, oldValue) {
				if (oldValue != newValue) {
					var isValid = CreditCardFactory.isValidByLuhn(newValue);

					cleanCreditCardBrand($element);

					if (isValid) {
						cleanCreditCardBrand($element);
						addCreditCardBrand($element, CreditCardFactory.getBrand(newValue));
					}

					ngModel.$setValidity($attrs.ngModel, isValid);
				}
			});
		}

		function cleanCreditCardBrand(element) {
			element.parent().children().removeClass(CreditCardFactory.getSupportedBrandClasses());
		}

		function addCreditCardBrand(element, value) {
			element.parent().children().addClass(value);
		}
	}
})();
