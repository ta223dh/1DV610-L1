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
      this.#correctName = 'tobias'
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
      let tempName = this.#correctName.toLowerCase()
      let correct = true
      for (let i = 0; i < name.length; i++) {
        const colorCodedName = document.createElement('span')
        colorCodedName.textContent = name[i]
        if (name[i].toLowerCase() === this.#correctName[i]) {
          colorCodedName.style.backgroundColor = 'lightgreen'
          tempName = tempName.slice(1, tempName.length)
        } else if (tempName.includes(name[i].toLowerCase())) {
          colorCodedName.style.backgroundColor = 'yellow'
          tempName = tempName.slice(0, tempName.indexOf(name[i])-1 + tempName.slice(tempName.indexOf(name[i])+1, name.length))
          correct = false
        } else {
          correct = false
        }
        this.#name.appendChild(colorCodedName)
      }
      const result = document.createElement('span')
      if (correct) {
        result.textContent = ' ✅'
      } else {
        result.textContent = ' ❌'
      }
      this.#name.appendChild(result)
    }
  }
)
