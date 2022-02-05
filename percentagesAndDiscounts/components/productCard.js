class ProductCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode : "open"});

        // this.productName = "Peacoat";
        // this.image = "https://n.nordstrommedia.com/id/sr3/cc5f4851-5d4b-407a-9bf2-eb14e99514cf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196";
        // this.alt = "Peacoat";
        // this.colorAlt = "Red Salsa";
        // this.beforeDiscount = 89;
        // this.discount = 15;
        this.state = "Now";
    }

    static get styles() {
        return `
            :host {
                display: flex;
                flex-flow: column;
                align-items: center;
                position: relative;
                width: 15rem;
                height: 25rem;
            }

            .images {
                width: 100%;
                height: 80%;
                position: relative;
            } .images img {
                height: 100%;
                width: 100%;
            } .move {
                display: flex;
                position: absolute;
                flex-flow: row wrap;
                justify-content: space-between;
                top: 0;
                left: 0;
                background: transparent;
                width: 100%;
                height: 100%;
            }.left,
              .right {
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                align-content: center;
                background: var(--ice);
                width: 2em;
                height: 100%;
                top: 0;
                opacity: .1;
                cursor: pointer;
            } .right {
            } .left:hover,
              .right:hover {
                  opacity: 1;
            } 
            
            .costs {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-evenly;
                width: 100%;
                height: 10%;
                // border-left: .1px solid var(--overcast);
                // border-right: .1px inset var(--overcast);
            } .calcName {
                display: flex;
                flex-flow: column;
                justify-content: center;
                gap: 0;
                height: 100%;
                width: 33.333%;
            } .name {
                font-size: 10px;
                text-align: center;
                margin: 0;
            } .costAndMore {
                margin: 0;
                text-align: center;
                z-index: 1;
            }.check {
                width: 100%;
                height: 10%;
                background: var(--glacier-blue);
                font-family: inherit;
                font-weight: bold;
            }
            
            .description {
                width: 100%;
                background: yellow;
            }

            
        `;
    }

    connectedCallback() {
        // this.afterDiscount = Math.floor(this.beforeDiscount * (1 - (this.discount/100)));

        // fetch("../data/items.json", option)
        // .then(response => response.json())
        // .then(response => {
        //     // Accesing to the item category
        //     for(let key in response) {
        //         const subResponse = response[key];
        //         // Accesing to the item
        //         for(let subKey in subResponse) {
        //             const item = subResponse[subKey];
        //             // Clone card element
        //             const newCardElement = card.cloneNode(true);

        //             // Remove the hidden class, change the id for the item number and add the file reference
        //             newCardElement.classList.toggle("hidden");
        //             newCardElement.id  = subKey;
        //             newCardElement.fileReference = fileReference;

                    
        //             row.appendChild(newCardElement);
        //         }
        //     }
        // })
        // .catch(err => console.log("The erros: " + err));
        this.render();
    }

    disconnectedCallback() {}

    render() {
        this.shadowRoot.innerHTML = 
        `
            <style>${ProductCard.styles}</style>
            <link href='https://css.gg/arrow-right-r.css' rel='stylesheet'>
            
            <section class="images">
                <img src="${this.image}" alt="${this.alt}">

                
                <div class="move">
                    <div class="left"><</div>

                    <div class="right">></div>
                </div>
            </section>
                
            <section class="costs">
                <div class="calcName">
                    <p class="name">${this.state}</p>
                    <p class="costAndMore afterDiscount">$${this.afterDiscount}</p>
                </div>

                <div class="calcName">
                    <p class="name">Discount</p>
                    <p class="costAndMore discount">${this.discount}%</p>
                </div>

                <div class="calcName">
                    <p class="name">Defore</p>
                    <p class="costAndMore beforeDiscount">$${this.beforeDiscount}</p>
                </div>
            </section>

            <button class="check">Check</button>
        `;
    }
}
        
customElements.define("app-product-card", ProductCard);