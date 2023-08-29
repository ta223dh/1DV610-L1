const template = document.createElement('template')
template.innerHTML = `
  <style>
    h1 {
        color: green;
    }
  </style>

  <h1></h1>
`

customElements.define('l1-application',
  /**
   * L1-application.
   */
  class extends HTMLElement {
    /**
     * Create an instance of L1-application.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
      this.displayText('Hello World')
    }

    /**
     * Display text.
     *
     * @param {String} text - The text to display.
     */
    displayText (text) {
      const h1 = this.shadowRoot.querySelector('h1')
      h1.textContent = text
    }
  }
)
