class Filter extends HTMLElement {
    constructor() {
        super();

        this.clicked = false;

        this.attachShadow({mode : "open"});
    }

    static get styles() {
        return `
            .gg-add {
                box-sizing: border-box;
                position: relative;
                display: block;
                width: 2rem !important;
                height: 2rem !important;
                border: 2px solid var(--glacier-blue) !important;
                transform: scale(var(--ggs,1));
                border-radius: 100%;
            }
              
            .gg-add::after {
                width: 3px !important;
                height: 19px !important;
                top: 5px !important;
                left: 12px !important;
            }

            .gg-add::before {
                width: 19px !important;
                height: 3px !important;
                top: 12px !important;
                left: 4px !important;
            }


            :host {
                position: relative;
                width: 2rem;
                height: 2rem;
                top: -1rem;
                border: .2ox solid var(--ice);
                border-radius: 100%;
                z-index: 1;
            }

            #filter-icon {
                font-size: 300px;
                cursor: pointer;
            } #filter-icon:hover {
                filter: drop-shadow(2px 2px 5px var(--ice));
            } #filter-icon:active {
                transform: scale(.9);
                filter: none;
            }

            #parameters {
                position: relative;
                width: 5rem;
                top: 1rem;
                right: 1.5rem;
                border: .2px solid var(--warm-grey);
                // border-radius: 10px;
                box-shadow: 1px 1px .5px black;
            }

            .hidden {
                display: none;
            }

            @media screen and (max-width: 575px) {
            }
        `;
    }

    connectedCallback() {
        this.render();

        this.filterIcon = this.shadowRoot.getElementById("filter-icon");
        this.parameters = this.shadowRoot.getElementById("parameters");

        this.filterIcon.onclick =  (e) => {
            this.parameters.classList.toggle("hidden");
        };
    }

    disconnectedCallback() {
        this.filterIcon.onclick = null;
    }

    render() {
        this.shadowRoot.innerHTML = 
        `
            <style>${Filter.styles}</style>
            <link href='https://css.gg/filters.css' rel='stylesheet'>
            <link href='https://css.gg/add.css' rel='stylesheet'>
            <i id="filter-icon" class="gg-add"></i>
            
            <section id="parameters" class="hidden">
                Here we will have the different filtters components
            </section>
        `;
    }
}

customElements.define("app-filter", Filter);