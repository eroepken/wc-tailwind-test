import { LitElement, html, css, svg, unsafeCSS } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map'
import { styleMap } from 'lit-html/directives/style-map'
import { repeat } from 'lit-html/directives/repeat'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'
import { ifDefined } from 'lit-html/directives/if-defined'
import postcss from 'postcss'

import styles from './styles.css'

// import cssnano from 'cssnano'
// import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const css1 = '.text { @apply bg-red-500; }'

const processor = postcss([autoprefixer])

console.log(processor.process(css1).then(result => console.log(result.css)))

// const processor = postcss([
//   // cssnano,
//   // tailwindcss('../tailwind.config.js'),
//   autoprefixer
// ])
// processor.process(css1).then(result => console.log(result.css))

export default class Component extends LitElement {
  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `
  }
}

export { html, css, svg, styleMap, classMap, repeat, unsafeHTML, ifDefined }

class Test extends Component {
  static get styles() {
    return [
      super.styles,
      // css`${unsafeCSS(postcss.process('p { @apply bg-karma-coral; }'))}`
    ]
  }

  render() {
    return html`<p class="text"><slot></slot></p>`
  }
}

customElements.define('ellie-test', Test)
