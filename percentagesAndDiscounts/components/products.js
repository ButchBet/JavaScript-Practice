import "./filter.js";
import "./productRow.js";

class Products extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode : "open"});
        

        this.change = false; // Avoid repeat the product row creating multiple times

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

            #products {
                width: 100%;
                display: flex;
                flex-flow: column;
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

        const products = this.shadowRoot.getElementById("products");

        if(!this.change) {
            this.files.forEach((element) => {
                console.log(element);

                const newELement = document.createElement("app-product-row");
                
                newELement.id = element;
                
                console.log(newELement.id);

                console.log(newELement);

                products.appendChild(newELement);
            });

            this.change = true;

            this.connectedCallback();
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
        `;
    }
}

customElements.define("app-products", Products);