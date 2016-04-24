describe('CreditCardFactory', function() {
	var CreditCardFactoryMock;

	beforeEach(function(){
		module('mCreditCard');

		inject(function(_CreditCardFactory_){
			CreditCardFactoryMock = _CreditCardFactory_;
		});
	});

	describe('getBrand', function() {
		it('it should be empty', function() {
			expect(CreditCardFactoryMock.getBrand('')).toBe('');
		});
		
		it('it should be visa', function() {
			expect(CreditCardFactoryMock.getBrand('4916414802148732')).toBe('visa');
		});
		
		it('it should be mastercard', function() {
			expect(CreditCardFactoryMock.getBrand('5588139637580650')).toBe('mastercard');
		});
		
		it('it should be amex', function() {
			expect(CreditCardFactoryMock.getBrand('347712824774832')).toBe('amex');
		});
		
		it('it should be diners', function() {
			expect(CreditCardFactoryMock.getBrand('30129309150259')).toBe('diners');
		});
		
		it('it should be hipercard', function() {
			expect(CreditCardFactoryMock.getBrand('6062826060750197')).toBe('hipercard');
		});
		
		it('it should be hiper', function() {
			expect(CreditCardFactoryMock.getBrand('6370951234556788')).toBe('hiper');
		});
		
		it('it should be jcb', function() {
			expect(CreditCardFactoryMock.getBrand('3597639252063829')).toBe('jcb');
		});
		
		it('it should be elo', function() {
			expect(CreditCardFactoryMock.getBrand('6550212354313464')).toBe('elo');
		});
		
		it('it should be aura', function() {
			expect(CreditCardFactoryMock.getBrand('5078601870000115')).toBe('aura');
		});
		
		it('it should be discover', function() {
			expect(CreditCardFactoryMock.getBrand('6011809681884795')).toBe('discover');
		});
	});

	describe('isValidByLuhn', function() {
		it('it should be false when value is empty', function() {
			expect(CreditCardFactoryMock.isValidByLuhn('')).toBe(false);
		});
		
		it('it should be false when value is 3597639252063821', function() {
			expect(CreditCardFactoryMock.isValidByLuhn('3597639252063821')).toBe(false);
		});
		
		it('it should be false when value.lenght is lower than 13', function() {
			expect(CreditCardFactoryMock.isValidByLuhn('3597639252')).toBe(false);
		});
		
		it('it should be false when value.lenght is greater than 19', function() {
			expect(CreditCardFactoryMock.isValidByLuhn('35976392520638212345')).toBe(false);
		});
		
		it('it should be true when value is 3597639252063829', function() {
			expect(CreditCardFactoryMock.isValidByLuhn('3597639252063829')).toBe(true);
		});
	});
});