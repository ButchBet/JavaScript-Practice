import "./filter.js";
import "./productRow.js";


class Products extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode : "open"});
        

        this.changeRow = false; // Avoid repeat the product row creating multiple times

        this.files = ["men", "women", "kids", "gifts"]; // type value of each product row
    }

    static get styles() {
        return `
            :host {
                position: relative;
                display: flex;
                width: 100%;
                top: .5em;
                background: var(--warm-grey);
                z-index: 1
            }

            main {
                height: 100%;
                display: flex;
                flex-flow: column;
                align-items: center;
            }

            // #men {
            //     background: red;
            // }

            // #women {
            //     background: blue;
            // }

            // #kids {
            //     background: yellow;
            // }

            #gifts {
                margin-bottom: 5rem;
            }

            #products {
                width: 100%;
                display: flex;
                flex-flow: row wrap;
            }

            .hidden {
                display: none;
            }

            @media screen and (max-width: 575px) {
                :host {
                    top: 14.3rem;
                }
            }
        `;
    }

    connectedCallback() {
        this.render();

        // Getting element to clone (The row one)
        const row = this.shadowRoot.getElementById("row");

        // Getting product section
        const products = this.shadowRoot.getElementById("products");

        // Insert rows elements
        if(!this.changeRow) {
            this.files.forEach((id, index) => {
                // Clone the row and cards
                const newElement = row.cloneNode(true);

                // Remove the hidden class and the id will be change for id
                newElement.classList.toggle("hidden");
                newElement.id = id;
                
                // Inserting the new element inside the product section
                products.appendChild(newElement);
            });
            
            this.changeRow = true;
        }
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
            <app-product-row class="hidden" id="row"></app-product-row>
        `;
    }
}
customElements.define("app-products", Products);