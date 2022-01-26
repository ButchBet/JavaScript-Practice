import "./filter.js";
import "./productRow.js";

class Products extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode : "open"});
        

        this.changeNeeded = false;
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

        const option = {
            "method" : "GET",
            "header" : {}
        };

        if(this.changeNeeded) {
            // Data 
            let men = fetch("../data/men.json", option);
            let women = fetch("../data/women.json", option);
            let kids = fetch("../data/kids.json", option);
            let gifts = fetch("../data/gifts.json", option);


            this.changeNeeded = false;
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
                    <app-product-row></app-product-row>
                </section>
            </main>
        `;
    }
}

customElements.define("app-products", Products);