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
					var isValid = CreditCardFactory.isCardValidByBrand(newValue);

					cleanCreditCardBrand($element);

					if (isValid) {
						addCreditCardBrand($element, newValue);
					}
					ngModel.$setValidity($attrs.ngModel, isValid);
				}
			});
		}

		function cleanCreditCardBrand(element) {
			var brands = CreditCardFactory.getAcceptedBrands();
			var index = brands.length;
			var classes = '';

			while (index--) {
				classes = classes + ' ' + brands[index].brand;
			}
			element.parent().children().removeClass(classes);
		}

		function addCreditCardBrand(element, cardNumber) {
			element.parent().children().addClass(CreditCardFactory.getCardBrand(cardNumber));
		}
	}
})();
