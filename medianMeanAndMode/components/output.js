class Output extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode:"open"});
    }

    static get styles() {
        return `
            :host {
                display: flex;
                background-color: red;
            }

            p {
                display: inline-block;
            }
        `;
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {}

    render() {
        this.shadowRoot.innerHTML = `
            <style>${Output.styles}</style>

            <ul>
                <li>Total of numbers: <p id="totalNumbers">${this.attributes.totalNumbers.value}</p></li>
                <li>Total of numbers: <p id="numbersAddition">${this.attributes.numbersAddition.value}</p></li>
                <li>Total of numbers: <p id="main">${this.attributes.main.value}</p></li>
                <li>Total of numbers: <p id="median">${this.attributes.median.value}</p></li>
                <li>Total of numbers: <p id="mode">${this.attributes.mode.value}</p></li>
                <li>Total of numbers: <p id="ascendingMode">${this.attributes.ascendingMode.value}</p></li>
            </ul>
        `;
    }
}

customElements.define("app-output", Output);