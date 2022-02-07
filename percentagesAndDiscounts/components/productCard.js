class ProductCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode : "open"});

        // Prevent to repit the fetch petition
        this.change = false;
        
        // Prevent the initialization of of the image with the index 0 
        this.loadedImages = false;

        // Save the object of the item
        this.item = null;

        // Declarations of the main variables to manipulate thei information of each product card
        this.productName = "Peacoat";
        this.images = []; // Used to change product image when the use click on the previus or next button
        this.image;
        this.index = 0;
        this.alt = "Peacoat";
        this.colorAlt = "Red Salsa";
        this.beforeDiscount = 89;
        this.discount = 15;
        this.affterDiscount = Math.floor(this.beforeDiscount * (1 - (this.discount/100)));
        this.state1 = "Now";
        this.state2 = "Before";
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

    goLeft() {
        if(this.index === 0) {
            this.index = this.images.length - 1;
        } else {
            this.index--;
        }

        this.image = this.images[this.index];
        
        this.connectedCallback();
    }

    goRight() {
        if(this.index === this.images.length - 1) {
            this.index = 0;
        } else {
            this.index++;
        }

        this.image = this.images[this.index];

        this.connectedCallback();
    }

    connectedCallback() {
        if(!this.change) {
            
            const option = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            };


            fetch(this.fileReference, option)
            .then(response => response.json())
            .then(response => {
                // We will serach the element with the item number
                for(var key in response) { // The category key
                    let change = false; // To stop the iteration in case that we find it before the end

                    // Accesing to the item
                    for(var subKey in response[key]) {
                        if(subKey === this.id) {
                            // Save the object in item
                            this.item = response[key][subKey]; 

                            // Change every propety
                            this.change = true;
                            this.connectedCallback();                            
                            
                            // Change the change variable to can stop the fist loop
                            change = true;
                            break;
                        }
                    }

                    if(change) {
                        break;
                    }
                }
            })
            .catch(err => console.log("The erros: " + err));
        } else {
            // Saving the neccesary variables
            this.alt = this.item.name;
            this.discount = this.item.discount;
            this.beforeDiscount = this.item.cost;
            this.afterDiscount = Math.floor(this.beforeDiscount * (1 - (this.discount/100)));
            
            // Saving the images
            if(!this.loadedImages) {
                this.images = this.item.item;
                
                this.image = this.images[this.index];

                this.loadedImages = true;
            } 



            this.render()

            // Getting the left ands right buttons
            this.left = this.shadowRoot.getElementById("left");

            this.right = this.shadowRoot.getElementById("right");

            // Adding evending to move thought the images
            this.left.onclick = () => this.goLeft();

            this.right.onclick = () => this.goRight();

            // Getting the image element
            this.imageElement = this.shadowRoot.getElementById("image");

        }
    }

    disconnectedCallback() {}

    render() {
        this.shadowRoot.innerHTML = 
        `
            <style>${ProductCard.styles}</style>
            <link href='https://css.gg/arrow-right-r.css' rel='stylesheet'>
            
            <section class="images">
                <img id="image" src="${this.image}" alt="${this.alt}">

                
                <div class="move">
                    <div id="left" class="left"><</div>

                    <div id="right" class="right">></div>
                </div>
            </section>
                
            <section class="costs">
                <div id="afterDiscount" class="calcName">
                    <p class="name">${this.state1}</p>
                    <p class="costAndMore afterDiscount">$${this.afterDiscount}</p>
                </div>

                <div id="discount" class="calcName">
                    <p class="name">Discount</p>
                    <p class="costAndMore discount">${this.discount}%</p>
                </div>

                <div id="beforeDiscount" class="calcName">
                    <p class="name">${this.state2}</p>
                    <p class="costAndMore beforeDiscount">$${this.beforeDiscount}</p>
                </div>
            </section>
            asdfasdfaf
            <button class="check">Check</button>
        `;
    }
}
        
customElements.define("app-product-card", ProductCard);