import "./productCard.js";

class ProductRow extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode : "open"});

        this.category = "Kids";
    }

    static get styles() {
        return `
            :host {
                display: flex;
                position: relative;
                width: 100%;
            }

            .category {
            }

            .product-row {
                width: 100%;
                display: flex;
                flex-flow: row wrap;
                justify-content: space-evenly;
                align-content: center;
                gap: 20px;
            }

            @media screen and (max-width: 575px) {
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
            <style>${ProductRow.styles}</style>

            <section class="category">
                <h3>${this.category}</h3>
                <div class="product-row">
                    <app-product-card></app-product-card>
                    <app-product-card></app-product-card>
                    <app-product-card></app-product-card>
                    <app-product-card></app-product-card>
                    <app-product-card></app-product-card>
                    <app-product-card></app-product-card>
                    <app-product-card></app-product-card>
                </div>
            </section>
        `;
    }
}

customElements.define("app-product-row", ProductRow);