import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, Currency) {
    this._amount = amount;
    this._Currency = Currency;
  }

  get amount() {
    return this._amount;
  }

  get Currency() {
    return this._Currency;
  }

  set amount(value) {
    this._amount = value;
  }

  set Currency(value) {
    this._Currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this.Currency._name} (${this.Currency._code})`;
  }

  static convertPrice(amount, convrate) {
    return amount * convrate;
  }
}
