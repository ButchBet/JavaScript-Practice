class Task extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: "open"});

        console.log(this.id, this.desciption, this.value);
    }

    static get styles() {
        return ``;
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {}

    render() {
        this.shadowRoot.innerHTML = 
        `
            <style>${Task.styles}</style>
        `;
    }
}

customElements.define("app-task", Task);