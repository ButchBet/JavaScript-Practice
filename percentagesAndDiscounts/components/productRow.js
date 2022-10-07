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
                justify-content: center;
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

        // Getting element to fill (The row one)
        const row = this.shadowRoot.getElementById("product-row");

        // Fetch especifications
        const option = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
              }
        };

        // Create the file reference
        const fileReference = `data/${this.id}.json`;

        // Opan de items file
        fetch("data/items.json", option)
        .then(response => response.json())
        .then(response => {
            // Save the array of items refered to the category 
            const items = response[this.id];

            // Create one card element for every item
            items.forEach(e => {
                // Clone card element
                const newCardElement = card.cloneNode(true);

                // Remove the hidden class, change the id for the item number and add the file reference
                newCardElement.classList.toggle("hidden");
                newCardElement.id  = e;
                newCardElement.fileReference = fileReference;

                // Append the new element inside the row
                row.appendChild(newCardElement);
            });
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