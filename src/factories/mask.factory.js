(function() {
	'use strict';

	angular
		.module('mCreditCard')
		.factory('MaskFactory', Mask);

	function Mask() {
		return {
			remove: remove
		};

		function remove(value) {
			return (value || '').toString().replace(/[^\d]+/g, '');
		}
	}
})();
