# m-credit-card ~2kb

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
- <img src="https://www.marjoel.com/github/m-credit-card/assets/images/credit-card-elo.svg" width="30px"/> __Elo__ `elo`
- <img src="https://www.marjoel.com/github/m-credit-card/assets/images/credit-card-aura.svg" width="30px"/> __Aura__ `aura`
- <img src="https://www.marjoel.com/github/m-credit-card/assets/images/credit-card-discover.svg" width="30px"/> __Discover__ `discover`

| Brand      | It starts                                      | Length           |
| ---------- | ---------------------------------------------- | ---------------- |
| Visa       | 4                                              | 13, 16           |
| Mastercard | 5, 2                                           | 16               |
| Amex       | 34, 37                                         | 15               |
| Hipercard  | 606282                                         | 16               |
| Hiper      | 637095, 637599, 637609, 637612, 637600, 637568 | 16               |
| Diners     | 300, 301, 302, 303, 304, 305, 36, 38, 39       | 14               |
| JCB        | 3088, 3096, 3112, 3158, 3337, 35               | 16               |
| Elo        | 401178, 401179, 431274, 438935, 451416, 4573, 4576, 506, 509, 636, 6500, 6504, 6505, 6507, 6509, 6516, 6550, 504175, 627780 | 16               |
| Aura       | 50                                             | 16               |
| Discover   | 6011, 622, 64, 65                              | 16               |

_Official data from the two of the largest acquirers in the world and from the largest bank in Latin America._

## How to use
Install `m-credit-card` with bower.

```sh
$ bower install m-credit-card --save
```

Set the directive `m-credit-card` on the input.

```html
<input type="text" m-credit-card />
```

Set a span with a class called `m-credit-card`.

```html
<input type="text" m-credit-card />
<span class="m-credit-card"></span>
```

Set a custom `css` for the following classes:

- `.m-credit-card`
- `.m-credit-card.visa`
- `.m-credit-card.mastercard`
- `.m-credit-card.hipercard`
- `.m-credit-card.hiper`
- `.m-credit-card.diners`
- `.m-credit-card.amex`
- `.m-credit-card.jcb`
- `.m-credit-card.elo`
- `.m-credit-card.aura`
- `.m-credit-card.discover`

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
- [ ] Unit testing for directive