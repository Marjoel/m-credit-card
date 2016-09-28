describe('CreditCardFactory', function() {
	var CreditCardFactoryMock;

	beforeEach(function(){
		module('mCreditCard');

		inject(function(_CreditCardFactory_){
			CreditCardFactoryMock = _CreditCardFactory_;
		});
	});

	describe('isCardValid', function() {
		it('it should be true', function() {
			expect(CreditCardFactoryMock.isCardValid('4916414802148732')).toBe(true);
		});
		
		it('it should be false', function() {
			expect(CreditCardFactoryMock.isCardValid('4111111111')).toBe(false);
		});
	});

	describe('isCardValidByLuhn', function() {
		it('it should be false when value is empty', function() {
			expect(CreditCardFactoryMock.isCardValidByLuhn('')).toBe(false);
		});
		
		it('it should be false when value is 3597639252063821', function() {
			expect(CreditCardFactoryMock.isCardValidByLuhn('3597639252063821')).toBe(false);
		});
		
		it('it should be false when value.lenght is lower than 13', function() {
			expect(CreditCardFactoryMock.isCardValidByLuhn('3597639252')).toBe(false);
		});
		
		it('it should be false when value.lenght is greater than 19', function() {
			expect(CreditCardFactoryMock.isCardValidByLuhn('35976392520638212345')).toBe(false);
		});
		
		it('it should be true when value is 3597639252063829', function() {
			expect(CreditCardFactoryMock.isCardValidByLuhn('3597639252063829')).toBe(true);
		});
	});

	describe('isCardValidByBrand', function() {
		it('it should be true', function() {
			expect(CreditCardFactoryMock.isCardValidByBrand('4916414802148732')).toBe(true);
		});

		it('it should be true', function() {
			expect(CreditCardFactoryMock.isCardValidByBrand('441111111')).toBe(false);
		});
	});

	describe('getCardBrand', function() {
		it('it should be empty', function() {
			expect(CreditCardFactoryMock.getCardBrand('')).toBe('');
		});

		it('it should be visa', function() {
			expect(CreditCardFactoryMock.getCardBrand('4916414802148732')).toBe('visa');
		});

		it('it should be mastercard', function() {
			expect(CreditCardFactoryMock.getCardBrand('5588139637580650')).toBe('mastercard');
		});

		it('it should be amex', function() {
			expect(CreditCardFactoryMock.getCardBrand('347712824774832')).toBe('amex');
		});

		it('it should be diners', function() {
			expect(CreditCardFactoryMock.getCardBrand('30129309150259')).toBe('diners');
		});
		
		it('it should be hipercard', function() {
			expect(CreditCardFactoryMock.getCardBrand('6062826060750197')).toBe('hipercard');
		});
		
		it('it should be hiper', function() {
			expect(CreditCardFactoryMock.getCardBrand('6370951234556788')).toBe('hiper');
		});
		
		it('it should be jcb', function() {
			expect(CreditCardFactoryMock.getCardBrand('3597639252063829')).toBe('jcb');
		});
		
		it('it should be elo', function() {
			expect(CreditCardFactoryMock.getCardBrand('6550212354313464')).toBe('elo');
		});
		
		it('it should be aura', function() {
			expect(CreditCardFactoryMock.getCardBrand('5078601870000115')).toBe('aura');
		});
		
		it('it should be discover', function() {
			expect(CreditCardFactoryMock.getCardBrand('6011809681884795')).toBe('discover');
		});
	});

	describe('getSupportedBrandClasses', function() {
		it('it should return all the supported brand classes: visa mastercard hipercard hiper amex diners jcb elo aura discover', function() {
			var brands = CreditCardFactoryMock.getAcceptedBrands();
			var index = brands.length;
			var classes = '';

			while (index--) {
				classes = classes + ' ' + brands[index].brand;
			}
			expect(classes).toBe(' visa aura mastercard hiper diners hipercard jcb amex elo discover');
		});
	});
});