class ProductCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mone : "open"});
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
            <style>${ProductCard.styles}</style>
        `;
    }
}

customElements.define("app-product-card", ProductCard);