class Output extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode:"open"});
    }

    static get styles() {
        return `
            :host {
                padding-left: 0 !important;
                padding-right: 0 !important;
                display: flex;
            }

            p {
                display: inline-block;
            }

            ul {
                width: 100%;
                padding-left: 0;
            }

            li {
                list-style: none;
                
            }

            .unpair {
                background: var(--charcola);
            } .pair {
                background: var(--dark-aqua);
            }
        `;
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {}

    static get observedAttributes() {
        return ["totalNumbers", "numbersAddition", "main", "median", "mode", "ascendingMode"];
    }

    attributeChangedCallback(name, old, now) {
        console.log(name, old, now);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>${Output.styles}</style>

            <ul>
                <li class="unpair">Total of numbers: <p id="totalNumbers">${this.attributes.totalNumbers.value}</p></li>
                <li class="pair">Addition: <p id="numbersAddition">${this.attributes.numbersAddition.value}</p></li>
                <li class="unpair">Main: <p id="main">${this.attributes.main.value}</p></li>
                <li class="pair">Median: <p id="median">${this.attributes.median.value}</p></li>
                <li class="unpair">Mode: <p id="mode">${this.attributes.mode.value}</p></li>
                <li class="pair">Ascending mode: <p id="ascendingMode">${this.attributes.ascendingMode.value}</p></li>
            </ul>
        `;
    }
}

customElements.define("app-output", Output);