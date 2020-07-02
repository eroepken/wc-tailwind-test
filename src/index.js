import { LitElement, html, css, svg, unsafeCSS } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import { styleMap } from "lit-html/directives/style-map";
import { repeat } from "lit-html/directives/repeat";
import { unsafeHTML } from "lit-html/directives/unsafe-html";
import { ifDefined } from "lit-html/directives/if-defined";

import globalReset from "./styles.css";

import paragraph from "./paragraph.css";
import button from "./button.css";
import heading from "./heading.css";

export default class Component extends LitElement {
  static get styles() {
    return css`
      ${unsafeCSS(globalReset)}
    `;
  }
}

export { html, css, svg, styleMap, classMap, repeat, unsafeHTML, ifDefined };

class Paragraph extends Component {
  static get styles() {
    return [
      super.styles,
      css`
        ${unsafeCSS(paragraph)}
      `,
    ];
  }

  render() {
    return html`<p class="text"><slot></slot></p>`;
  }
}
customElements.define("e-p", Paragraph);

class Button extends Component {
  static get styles() {
    return [
      super.styles,
      css`
        ${unsafeCSS(button)}
      `,
    ];
  }

  render() {
    return html`<p class="button-text"><slot></slot></p>`;
  }
}
customElements.define("e-button", Button);

class Heading extends Component {
  static get styles() {
    return [
      super.styles,
      css`
        ${unsafeCSS(heading)}
      `,
    ];
  }

  render() {
    return html`<h1 class="button-text"><slot></slot></h1>`;
  }
}
customElements.define("e-heading", Heading);
