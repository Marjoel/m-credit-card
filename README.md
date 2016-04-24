# m-credit-card ~4kb

_Validate credit card number and identify it brand in a simple way with this module for AngularJS._

[click to see the demo](https://www.marjoel.com/github/m-credit-card)


## Supported brands

- <img src="https://www.marjoel.com/github/m-credit-card/assets/images/credit-card-visa.svg" width="30px"/> __Visa__ `visa`
- <img src="https://www.marjoel.com/github/m-credit-card/assets/images/credit-card-mastercard.svg" width="30px"/> __Mastercard__ `mastercard`
- <img src="https://www.marjoel.com/github/m-credit-card/assets/images/credit-card-amex.svg" width="30px"/> __American Express__ `amex`
- <img src="https://www.marjoel.com/github/m-credit-card/assets/images/credit-card-hipercard.svg" width="30px"/> __Hipercard__  `hipercard`
- <img src="https://www.marjoel.com/github/m-credit-card/assets/images/credit-card-hiper.svg" width="30px"/> __Hiper__ `hiper`
- <img src="https://www.marjoel.com/github/m-credit-card/assets/images/credit-card-diners.svg" width="30px"/> __Diners Club International__ `diners`
- <img src="https://www.marjoel.com/github/m-credit-card/assets/images/credit-card-jcb.svg" width="30px"/> __Japanese  Credit Bureau__ `jcb`

## How to use

1. Set the directive on the input.
2. Set a span with a class called `m-credit-card`.
3. Set a custom `css` for the following classes:

- `.m-credit-card`
- `.m-credit-card.visa`
- `.m-credit-card.mastercard`
- `.m-credit-card.hipercard`
- `.m-credit-card.hiper`
- `.m-credit-card.diners`
- `.m-credit-card.amex`
- `.m-credit-card.jcb`


```html
<input type="text" m-credit-card />
<span class="m-credit-card"></span>
```

---

## Contributors

### Setup

```sh
$ git clone https://github.com/Marjoel/m-credit-card
```

Then go to the project's folder.

```sh
$ cd m-credit-card
```

Install local dependencies.

```sh
$ npm install
```

### Before the commit

Run `grunt style` to validate the code style.

```sh
$ grunt style
```

Run `npm test` to validate the unit testing.

```sh
$ npm test
```

Then run `grunt build` to generate the `dist` folder.

```sh
$ grunt build
```

---

## To do
- [ ] Identify other credit card brands