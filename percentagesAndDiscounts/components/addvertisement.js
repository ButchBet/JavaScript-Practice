class Addvertisement extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode : "open"});

        this.image = "horizontal1.jpg";
        this.images  = ["horizontal1.jpg", "horizontal2.jpg", "horizontal3.jpg", "horizontal4.jpg"];
        
        this.index = 0;
        
        this.len = this.images.length;
        
        this.imagesAlt = ["horizontal1.jpg", "horizontal2.jpg", "horizontal3.jpg", "horizontal4.jpg"];
        this.imageAlt = this.imagesAlt[this.index];

        this.imagesTitle = ["Sun flower image.", "Sunrise in India", "Sunset in Colombia.", "Fog in China."];
        this.imageTitle = this.imagesTitle[this.index];
    }

    static get styles() {
        return `
            :host {
                display: inline-block;
                height: 25rem;
                margin-top: .5em;
            }

            section {
                height: 100%;
                width: 100%;
            }

            section img {
                height: 100%;
                width: 100vw;
            }

            @media screen and (max-width: 575px) {
                :host {
                    margin: 0;
                    position: relative;
                    top: 14rem;
                }
            }
        `;
    }

    connectedCallback() {
        this.render();

        setInterval(() => {
            console.log(this.index);
            this.image = this.images[this.index];
            this.imageAlt = this.imagesAlt[this.index];
            this.imageTitle = this.imagesTitle[this.index];
            
            this.index++;

            if(this.index === this.len) {
                this.index = 0;
            }

            this.render();
        }, 5000);
    }

    disconnectedCallback() {}

    render() {
        this.shadowRoot.innerHTML = `
            <style>${Addvertisement.styles}</style>
            <section class="">
                <img src="../assets/${this.image}" alt="${this.imageAlt}" title="${this.imageTitle}">
            </section>
        `;
    }
}

customElements.define("app-addvertisement", Addvertisement);