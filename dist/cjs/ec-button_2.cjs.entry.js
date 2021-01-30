'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-83e386ac.js');

const ecButtonCss = "button{background-color:rgb(255, 199, 199);padding:10px 20px}";

const ECButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  handleClick() {
    console.log('Click!');
  }
  render() {
    return index.h("button", null, this.text);
  }
};
ECButton.style = ecButtonCss;

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return index.h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

exports.ec_button = ECButton;
exports.my_component = MyComponent;
