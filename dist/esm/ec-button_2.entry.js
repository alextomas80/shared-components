import { r as registerInstance, h } from './index-3d3a1297.js';

const ecButtonCss = "button{background-color:rgb(255, 199, 199);padding:10px 20px}";

const ECButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  handleClick() {
    console.log('Click!');
  }
  render() {
    return h("button", null, this.text);
  }
};
ECButton.style = ecButtonCss;

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

export { ECButton as ec_button, MyComponent as my_component };
