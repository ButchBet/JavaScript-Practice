import "./productCard.js";

class ProductRow extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode : "open"});

        this.category = "Kids";

        this.id = null; // Can open the respective json file
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

            h3 {
                text-align: center;
            }

            .product-row {
                width: 100%;
                display: flex;
                flex-flow: row wrap;
                justify-content: space-evenly;
                align-content: space-around;
                gap: 2rem 0;
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
                </div>
            </section>
        `;
    }
}

window.customElements.define("app-product-row", ProductRow);