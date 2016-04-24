# m-credit-card

Validate credit card number and identify it brand in a simple way with this module for AngularJS.
```[click to see the demo](https://www.marjoel.com/github/m-credit-card)```


## Supported brands

* Visa `visa`
* Mastercard `mastercard`
* American Express `amex`
* Hipercard  `hipercard`
* Hiper `hiper`
* Diners Club International `diners`

## How to use

1. Set the directive on the input.
2. Set a span with a class called "m-credit-card".
3. Set a custom css for the classes "m-credit-card, visa, mastercard, hipercard, hiper, diners, amex".


```html
	<input type="text" m-credit-card />
	<span class="m-credit-card"></span>
```


## Contributors

Before your commit:

Run `grunt style` to validate the code style.

```sh
$ grunt prod
```

Run `grunt build` to generate the `dist` folder.

```sh
$ grunt build
```