const template = document.createElement('template')
template.innerHTML = `
  <style>

  </style>

  <form>
    <input type="text" placeholder="Enter your name.">
    <input type="submit" value="Submit" disabled>
  </form>
`

customElements.define('l1-application',
  /**
   * L1-application.
   */
  class extends HTMLElement {
    #form
    #textField
    #button

    /**
     * Create an instance of L1-application.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#form = this.shadowRoot.querySelector('form')
      this.#textField = this.shadowRoot.querySelector('input[type="text"]')
      this.#button = this.shadowRoot.querySelector('input[type="submit"]')


      this.#form.addEventListener('submit', (event) => this.#submit(event))
      this.#textField.addEventListener('keyup', (event) => this.#validate(event))
    }

    connectedCallback () {
      this.#textField.focus()
    }

    #validate (event) {
      event.preventDefault()

      if (this.#textField.value.trim().length > 0) {
        this.#button.removeAttribute('disabled')
      } else if (this.#textField.value.trim().length <= 0) {
        this.#button.setAttribute('disabled', '')
      }
    }

    #submit (event) {
      event.preventDefault()

      if (!this.#button.hasAttribute('disabled')) {
        console.log(this.#textField.value)
        this.#textField.value = ''
      }
    }
  }
)
