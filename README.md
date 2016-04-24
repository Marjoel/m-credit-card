# m-credit-card

_Validate credit card number and identify it brand in a simple way with this module for AngularJS._

[click to see the demo](https://www.marjoel.com/github/m-credit-card)


## Supported brands

* Visa `visa`
* Mastercard `mastercard`
* American Express `amex`
* Hipercard  `hipercard`
* Hiper `hiper`
* Diners Club International `diners`

## How to use

1. Set the directive on the input.
2. Set a span with a class called `m-credit-card`.
3. Set a custom `css` for the following classes:

* `.m-credit-card`
* `.m-credit-card.visa`
* `.m-credit-card.mastercard`
* `.m-credit-card.hipercard`
* `.m-credit-card.hiper`
* `.m-credit-card.diners`
* `.m-credit-card.amex`


```html
<input type="text" m-credit-card />
<span class="m-credit-card"></span>
```


---

## Contributors

__Setup__

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

__Before the commit__

Run `grunt style` to validate the code style.

```sh
$ grunt style
```

Then run `grunt build` to generate the `dist` folder.

```sh
$ grunt build
```