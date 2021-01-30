import { attachShadow, h, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const ecButtonCss = "button{background-color:rgb(255, 199, 199);padding:10px 20px}";

const ECButton = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  handleClick() {
    console.log('Click!');
  }
  render() {
    return h("button", null, this.text);
  }
  static get style() { return ecButtonCss; }
};

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
  static get style() { return myComponentCss; }
};

const EcButton = /*@__PURE__*/proxyCustomElement(ECButton, [1,"ec-button",{"text":[1]},[[0,"click","handleClick"]]]);
const MyComponent$1 = /*@__PURE__*/proxyCustomElement(MyComponent, [1,"my-component",{"first":[1],"middle":[1],"last":[1]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      EcButton,
  MyComponent$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { EcButton, MyComponent$1 as MyComponent, defineCustomElements };
