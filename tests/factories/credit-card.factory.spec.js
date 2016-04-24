describe('CreditCardFactory', function() {
	var CreditCardFactoryMock;

	CreditCardFactoryMock = {
		getBrand: function () {},
		isValidByLuhn: function() {}
	}
	
	beforeEach(function(){
		module('mCreditCard');

	});

	describe('getBrand', function() {
		it('it should be defined', function() {
			expect(CreditCardFactoryMock.getBrand('')).toBe('');
		});
	});
});