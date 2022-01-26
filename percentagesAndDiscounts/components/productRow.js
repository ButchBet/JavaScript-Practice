class ProductRow extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode : "open"});
    }

    static get styles() {
        return `
            
        `;
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {}

    render() {
        this.shadowRoot.innerHTML = 
        `
            <style>${ProductRow.styles}</style>
        `;
    }
}

customElements.define("app-product-row", ProductRow);