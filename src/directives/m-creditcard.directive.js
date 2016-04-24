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

					if (luhnValidator(newValue)) {
						isValid = true;
						cleanCreditCardType($element);
						addCreditCardType($element, getCreditCardType(newValue));
					}
					else {
						cleanCreditCardType($element);
					}

					ngModel.$setValidity($attrs.ngModel, isValid);
				}
			});
		}

		function getCreditCardType(value) {
			if (!value) {
				return '';
			}

			value = strip(value);

			var type = '';

			var visa = (/^4[0-9]{12,15}$/),
				mastercard = (/^5[0-9]{15}$/),
				amex = (/^(34|37)[0-9]{13}$/),
				diners = (/^(300|301|302|303|304|305)[0-9]{11}|(36|38|39)[0-9]{12}$/),
				hipercard = (/^(606282)[0-9]{10}$/),
				hiper = (/^(637095|637599|637609|637612|637600|637568)[0-9]{10}$/);

			if (hipercard.test(value)) {
				type = 'hipercard';
			}
			else if (hiper.test(value)) {
				type = 'hiper';
			}
			else if (mastercard.test(value)) {
				type = 'mastercard';
			}
			else if (visa.test(value)) {
				type = 'visa';
			}
			else if (diners.test(value)) {
				type = 'diners';
			}
			else if (amex.test(value)) {
				type = 'amex';
			}
			return type;
		}

		function cleanCreditCardType(element) {
			element.parent().children().removeClass('visa mastercard hipercard hiper amex');
		}

		function addCreditCardType(element, value) {
			element.parent().children().addClass(value);
		}

		function luhnValidator(value) {
			if (value) {
				value = strip(value);
				var limit = 14;

				if (((value.length >= limit) && (value.length <= 16))) {
					var nCheck = 0;
					var nDigit = 0;
					var bEven  = false;

					for (var n = value.length - 1; n >= 0; n--) {
						var cDigit = value.charAt(n);
						nDigit = parseInt(cDigit, 10);

						if (bEven) {
							if ((nDigit *= 2) > 9) {
								nDigit -= 9;
							}
						}
						nCheck += nDigit;
						bEven = !bEven;
					}
					return ((nCheck % 10) === 0);
				}
				return false;
			}
			else {
				return false;
			}
		}

		function strip(value) {
			return (value || '').toString().replace(/[^\d]+/g, '');
		}
	}
})();
