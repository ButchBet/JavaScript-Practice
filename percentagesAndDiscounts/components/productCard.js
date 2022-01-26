class ProductCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode : "open"});

        this.productName = "Peacoat";
        // this.image = "https://n.nordstrommedia.com/id/sr3/cc5f4851-5d4b-407a-9bf2-eb14e99514cf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196";
        this.alt = "Peacoat";
        this.colorAlt = "Red Salsa";
    }

    static get styles() {
        return `
            :host {
                display: flex;
                position: relative;
                width: 15rem;
                height: 18rem;
                background: red;
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
            <style>${ProductCard.styles}</style>
            <link href='https://css.gg/arrow-right-r.css' rel='stylesheet'>
            
            <section class="images">
                <img src="${this.image}" alt="${this.alt}">
                <i class="gg-arrow-right-r"></i>
            </section>

            <section class="description">
                <div class="name"><p>${this.productName}</p></div>

                <section class="colors">
                    <img class="color" src="https://n.nordstrommedia.com/id/sr3/0b11abfd-19d2-478b-84ad-58d51c5ab6ee.jpeg?crop=fit&w=31&h=31" alt="${this.colorAlt}">

                    <i class="gg-arrow-right-r"></i>
                </section>

                <button class="check">Check</button>
            </section>
        `;
    }
}

customElements.define("app-product-card", ProductCard);