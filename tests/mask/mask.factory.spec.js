describe('MaskFactory', function() {
	var MaskFactoryMock;

	beforeEach(function(){
		module('mCreditCard');

		inject(function(_MaskFactory_){
			MaskFactoryMock = _MaskFactory_;
		});
	});

	describe('isCardValid', function() {
		it('The mask should be removed', function() {
			expect(MaskFactoryMock.remove('6550 2123 5431 3464')).toBe('6550212354313464');
		});

		it('The value should be the same', function() {
			expect(MaskFactoryMock.remove('6550212354313464')).toBe('6550212354313464');
		});
	});
});