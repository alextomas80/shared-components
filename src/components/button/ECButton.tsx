import { Component, Prop, h, Listen } from '@stencil/core';

@Component({
  tag: 'ec-button',
  styleUrl: 'ec-button.css',
  shadow: true,
})
export class ECButton {

  @Prop() text: string;

  @Listen('click')
  handleClick() {
    console.log('Click!')
  }

  render() {
    return <button>{this.text}</button>;
  }
}
