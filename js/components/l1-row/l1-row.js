const template = document.createElement('template')
template.innerHTML = `
  <style>
  </style>

  <div>
  </div>
`

customElements.define('l1-row',
  /**
   * L1-row.
   */
  class extends HTMLElement {
    #name
    #correctName
    /**
     * Create an instance of L1-row.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#name = this.shadowRoot.querySelector('div')
      this.#correctName = 'Tobias'
    }

    static get observedAttributes () {
      return ['name']
    }

    attributeChangedCallback (name, oldValue, newValue) {
      if (name == 'name' && newValue !== oldValue) {
        this.colorCodeName(newValue)
      }
    }

    colorCodeName (name) {
      const colorCodedName = document.createElement('span')
      colorCodedName.textContent = name
      this.#name.appendChild(colorCodedName)
    }
  }
)
