(function() {
	'use strict';

	angular
		.module('mCreditCard')
		.factory('CreditCardFactory', CreditCard);

	function CreditCard() {
		return {
			isCardValid: isCardValid,
			isCardValidByLuhn: isCardValidByLuhn,
			isCardValidByBrand: isCardValidByBrand,
			getCardBrand: getCardBrand,
			getAcceptedBrands: getAcceptedBrands
		};

		/**
		 * Validate a credit card number by luhn algorithym and accepted brands
		 * @param {string} cardNumber - Credit card number
		 * @returns {boolean}
		**/
		function isCardValid (cardNumber) {
			return isCardValidByBrand(cardNumber);
		}

		/**
		 * Validate a credit card number by luhn algorithym
		 * @param {string} cardNumber - Credit card number
		 * @param {number=} minimum - Minimum of digits of a credit card number
		 * @returns {boolean}
		**/
		function isCardValidByLuhn (cardNumber) {
			if (!cardNumber) {
				return false;
			}

			cardNumber = removeMask(cardNumber);

			if (cardNumber.length < 12 || cardNumber.length > 16) {
				return false;
			}

			var nCheck = 0;
			var nDigit = 0;
			var bEven = false;

			for (var n = cardNumber.length - 1; n >= 0; n--) {
				var cDigit = cardNumber.charAt(n);
				nDigit = parseInt(cDigit, 10);

				if (bEven && ((nDigit *= 2) > 9)) {
					nDigit -= 9;
				}
				nCheck += nDigit;
				bEven = !bEven;
			}
			return ((nCheck % 10) === 0);
		}

		/**
		 * Validate a credit card number by accepted brands
		 * @param {string} cardNumber - Credit card number
		 * @returns {boolean}
		**/
		function isCardValidByBrand (cardNumber) {
			if (getCardBrand(cardNumber) === '') {
				return false;
			}
			return true;
		}

		/**
		 * Return the brand of a credit card number
		 * @param {string} cardNumber - Credit card number
		 * @returns {string}
		**/
		function getCardBrand (cardNumber) {
			if (!cardNumber || !isCardValidByLuhn(cardNumber)) {
				return '';
			}

			cardNumber = removeMask(cardNumber);

			var brands = getAcceptedBrands();
			var index = brands.length;

			while (index--) {
				if ((brands[index].rule).test(cardNumber)) {
					return brands[index].brand;
				}
			}
			return '';
		}

		/**
		 * Return the accepted brands
		 * @returns {array}
		**/
		function getAcceptedBrands () {
			return [
				{brand: 'discover', rule: (/^(6011)[0-9]{12}|(622)[0-9]{13}|(64|65)[0-9]{14}$/)},
				{brand: 'elo', rule: (/^(506|509|636)[0-9]{13}|(4573|4576|6500|6504|6505|6507|6509|6516|6550)[0-9]{12}|(401178|401179|431274|438935|451416|504175|627780)[0-9]{10}$/)},
				{brand: 'amex', rule: (/^(34|37)[0-9]{13}$/)},
				{brand: 'jcb', rule: (/^(3088|3096|3112|3158|3337)[0-9]{12}|(35)[0-9]{14}$/)},
				{brand: 'hipercard', rule: (/^606282[0-9]{10}$/)},
				{brand: 'diners', rule: (/^30[0-5]{1}[0-9]{11}|(36|38|39)[0-9]{12}$/)},
				{brand: 'hiper', rule: (/^637(095|568|599|600|609|612)[0-9]{10}$/)},
				{brand: 'mastercard', rule: (/^(2|5)[0-9]{15}$/)},
				{brand: 'aura', rule: (/^(50)[0-9]{14}$/)},
				{brand: 'visa', rule: (/^4[0-9]{12,15}$/)}
			];
		}

		function removeMask(value) {
			return value ? value.replace(/[^\d]+/g, '') : value;
		}
	}
})();
