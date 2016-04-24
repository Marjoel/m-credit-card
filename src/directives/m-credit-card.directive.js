(function() {
	'use strict';

	angular
		.module('mCreditCard')
		.directive('mCreditCard', CreditCard);

	function CreditCard() {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: link
		};

		function link($scope, $element, $attrs, ngModel) {
			$scope.$watch($attrs.ngModel, function(newValue, oldValue) {
				if (oldValue != newValue) {
					var isValid = false;

					if (isValidByLuhn(newValue)) {
						isValid = true;
						cleanCreditCardBrand($element);
						addCreditCardBrand($element, getCreditCardBrand(newValue));
					}
					else {
						cleanCreditCardBrand($element);
					}

					ngModel.$setValidity($attrs.ngModel, isValid);
				}
			});
		}

		function getCreditCardBrand(value) {
			if (!value) {
				return '';
			}

			value = strip(value);

			var brand = '';

			var visa = (/^4[0-9]{12,15}$/),
				mastercard = (/^5[0-9]{15}$/),
				amex = (/^(34|37)[0-9]{13}$/),
				diners = (/^(300|301|302|303|304|305)[0-9]{11}|(36|38|39)[0-9]{12}$/),
				hipercard = (/^(606282)[0-9]{10}$/),
				hiper = (/^(637095|637599|637609|637612|637600|637568)[0-9]{10}$/);

			if (hipercard.test(value)) {
				brand = 'hipercard';
			}
			else if (hiper.test(value)) {
				brand = 'hiper';
			}
			else if (mastercard.test(value)) {
				brand = 'mastercard';
			}
			else if (visa.test(value)) {
				brand = 'visa';
			}
			else if (diners.test(value)) {
				brand = 'diners';
			}
			else if (amex.test(value)) {
				brand = 'amex';
			}
			return brand;
		}

		function cleanCreditCardBrand(element) {
			element.parent().children().removeClass('visa mastercard hipercard hiper amex');
		}

		function addCreditCardBrand(element, value) {
			element.parent().children().addClass(value);
		}

		function isValidByLuhn(value) {
			if (!value) {
				return false;
			}

			value = strip(value);

			if (((value.length >= 13) && (value.length <= 19))) {
				var check = 0;
				var digit = 0;
				var even = false;

				for (var i = value.length - 1; i >= 0; i--) {
					digit = value.charAt(i);
					digit = parseInt(digit, 10);

					if (even) {
						if ((digit *= 2) > 9) {
							digit -= 9;
						}
					}
					check += digit;
					even = !even;
				}
				return ((check % 10) === 0);
			}
			return false;
		}

		function strip(value) {
			return (value || '').toString().replace(/[^\d]+/g, '');
		}
	}
})();
