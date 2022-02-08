import "./header.js";
import "./addvertisement.js";
import "./products.js";
import "./footer.js";

class Page extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode : "open"});
    }

    static get styles() {
        return `
            :host {
            }

            .hidden {
                display: none;
            }
        `;
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {}

    render() {
        this.shadowRoot.innerHTML = `
            <style>${Page.styles}</style>

            <app-header></app-header>
            <app-addvertisement class=""></app-addvertisement>
            <app-products></app-products>
            <app-footer></app-footer>
        `;
    }

}

customElements.define("app-page", Page);
