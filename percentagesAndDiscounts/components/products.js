import "./filter.js";

class Products extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode : "open"});
        

        this.changeNeeded = false;

        this.category = "Coats & Jackets";
        this.productName = "Peacoat";
        // this.image = "https://n.nordstrommedia.com/id/sr3/cc5f4851-5d4b-407a-9bf2-eb14e99514cf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196";
        this.alt = "Peacoat";
        this.colorAlt = "Red Salsa";
    }

    static get styles() {
        return `
            :host {
                display: inline-block;
                width: 100%;
                margin-top: .5em;
                backgroud: red;
            }

            main {
                height: 100%;
                background: green;
            }

            #products {
                background: var(--warm-grey);
                width: 100%;
                height: 5rem;
            }

            @media screen and (max-width: 575px) {
                #products {
                    position: relative !important;
                    top: 14rem !important;
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
            <link href='https://css.gg/arrow-right-r.css' rel='stylesheet'>
            <style>${Products.styles}</style>
            <main>
                <app-filter></app-filter>

                <section id="products">
                    <section class="category">
                        <h3>${this.category}</h3>
                        <section class="product">
                            <section class="product-row">
                                <section class="images">
                                <img src="${this.image}" alt="${this.alt}">
                                <i class="gg-arrow-right-r"></i>
                                </section>

                                <section class="description">
                                    <div class="name"> <p>${this.productName}</p></div>

                                    <section class="colors">
                                        <img class="color" src="https://n.nordstrommedia.com/id/sr3/0b11abfd-19d2-478b-84ad-58d51c5ab6ee.jpeg?crop=fit&w=31&h=31" alt="${this.colorAlt}">

                                        <i class="gg-arrow-right-r"></i>
                                    </section>

                                    <button class="check">Check</button>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </main>
        `;
    }
}

customElements.define("app-products", Products);