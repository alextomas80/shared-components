import { Component, Prop, h, Listen } from '@stencil/core';
export class ECButton {
  handleClick() {
    console.log('Click!');
  }
  render() {
    return h("button", null, this.text);
  }
  static get is() { return "ec-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["ec-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["ec-button.css"]
  }; }
  static get properties() { return {
    "text": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "text",
      "reflect": false
    }
  }; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleClick",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
