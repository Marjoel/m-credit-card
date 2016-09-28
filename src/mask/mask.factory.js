(function() {
	'use strict';

	angular
		.module('mCreditCard')
		.factory('MaskFactory', Mask);

	function Mask() {
		return {
			remove: remove
		};

		/**
		 * Remove mask from a string
		 * @param {string} value - Value
		 * @returns {string}
		**/
		function remove(value) {
			return value ? value.replace(/[^\d]+/g, '') : value;
		}
	}
})();