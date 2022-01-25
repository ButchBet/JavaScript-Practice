import "./filter.js";

class Products extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode : "open"});
    }

    static get styles() {
        return `
            :host {
                display: inline-block;
                width: 100%;
                margin-top: .5em;
                backgroud: red;
            }

            main {
                height: 100%;
                background: green;
            }
        `;
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {}

    render() {
        this.shadowRoot.innerHTML = 
        `
            <style>${Products.styles}</style>
            <main>
                <app-filter></app-filter>

                <section id="products">
                    
                </section>
            </main>
        `;
    }
}

customElements.define("app-products", Products);