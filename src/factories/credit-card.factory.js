(function() {
	'use strict';

	angular
		.module('mCreditCard')
		.factory('CreditCardFactory', CreditCard);

	function CreditCard() {
		return {
			isValidByLuhn: isValidByLuhn,
			getBrand: getBrand,
			getSupportedBrandClasses: getSupportedBrandClasses
		};

		function isValidByLuhn(value) {
			if (!value) {
				return false;
			}

			value = strip(value);
			var valueLength = value.length;

			if ((valueLength >= 13) && (valueLength <= 19)) {
				var check = 0, digit = 0, even = false;

				for (var i = valueLength - 1; i >= 0; i--) {
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

		function getBrand(value) {
			if (!value) {
				return '';
			}

			value = strip(value);

			var brand = '',
				visa = (/^(4)[0-9]{12,15}$/),
				mastercard = (/^(5)[0-9]{15}$/),
				amex = (/^(34|37)[0-9]{13}$/),
				diners = (/^(300|301|302|303|304|305)[0-9]{11}|(36|38|39)[0-9]{12}$/),
				hipercard = (/^(606282)[0-9]{10}$/),
				hiper = (/^(637095|637599|637609|637612|637600|637568)[0-9]{10}$/),
				jcb = (/^(3088|3096|3112|3158|3337)[0-9]{12}|(35)[0-9]{14}$/),
				elo = (/^(506|509|636)[0-9]{13}|(4573|4576|6500|6504|6505|6507|6509|6516|6550)[0-9]{12}|(401178|401179|431274|438935|451416|504175|627780)[0-9]{10}$/),
				aura = (/^(50)[0-9]{14}$/),
				discover = (/^(6011)[0-9]{12}|(622)[0-9]{13}|(64|65)[0-9]{14}$/);

			if (elo.test(value)) {
				brand = 'elo';
			}
			else if (hipercard.test(value)) {
				brand = 'hipercard';
			}
			else if (hiper.test(value)) {
				brand = 'hiper';
			}
			else if (discover.test(value)) {
				brand = 'discover';
			}
			else if (jcb.test(value)) {
				brand = 'jcb';
			}
			else if (diners.test(value)) {
				brand = 'diners';
			}
			else if (amex.test(value)) {
				brand = 'amex';
			}
			else if (aura.test(value)) {
				brand = 'aura';
			}
			else if (visa.test(value)) {
				brand = 'visa';
			}
			else if (mastercard.test(value)) {
				brand = 'mastercard';
			}
			return brand;
		}

		function strip(value) {
			return value.toString().replace(/[^\d]+/g, '');
		}

		function getSupportedBrandClasses() {
			return 'visa mastercard hipercard hiper amex diners jcb elo aura discover';
		}
	}
})();
