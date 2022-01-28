import "./productCard.js";

class ProductRow extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode : "open"});
        // this.id = null; // Can open the respective json file
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

            #product-row {
                width: 100%;
                display: flex;
                flex-flow: row wrap;
                justify-content: space-evenly;
                align-content: space-around;
                gap: 2rem 0;
            }

            .hidden {
                display: none;
            }

            @media screen and (max-width: 575px) {
            }
        `;
    }

    connectedCallback() {
        this.category = this.id.replace(/^\w/, (c) => c.toUpperCase());
        
        this.render();
        
        // Getting element to clone (The card one)
        const card = this.shadowRoot.getElementById("card");

        // Getting emenet to fill (The row one)
        const row = this.shadowRoot.getElementById("product-row");

        // Fetch especifications
        const option = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
              }
        };

        fetch(`../data/${this.id}.json`, option)
        .then(response => response.json())
        .then(response => {
            // Accesing to the item category
            for(let key in response) {
                const subResponse = response[key];
                // Accesing to the item
                for(let subKey in subResponse) {
                    const item = subResponse[subKey];
                    // Clone card element
                    const newCardElement = card.cloneNode(true);

                    // Remove the hidden class and change the id for the item number
                    newCardElement.classList.toggle("hidden");
                    newCardElement.id  = subKey;

                    // Add attributes (productName, image, alt, colorAlt, cost:beforeDiscount, discount)
                    newCardElement.productName = item.name;
                    newCardElement.image = item.item[0];
                    newCardElement.alt = item.name;
                    newCardElement.beforeDiscount = item.cost;
                    newCardElement.discount = item.discount;
                    
                    row.appendChild(newCardElement);
                }
            }
        })
        .catch(err => console.log("The erros: " + err));

    }

    disconnectedCallback() {}

    render() {
        this.shadowRoot.innerHTML = 
        `
            <style>${ProductRow.styles}</style>

            <section class="category">
                <h3>${this.category}</h3>
                <div id="product-row">
                </div>
            </section>
            <app-product-card class="hidden" id="card"></app-product-card>
        `;
    }
}

window.customElements.define("app-product-row", ProductRow);