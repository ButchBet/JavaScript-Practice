class Task extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: "open"});
    }

    static get styles() {
        return `
            :host {
                display: flex;
                flex-flow: column wrap;
                justify-content: space-between;
            }

            #image {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-between;
                align-items: center;
            }

            #image img  {
                width: 100px;
            }

            #info {
                text-align: center;
            }
        `;
    }

    connectedCallback() {
        const option = {
            method: "GET"
        }

        fetch("data/tasks.json", option)
        .then((response) => response.json())
        .then((file) => {
            // Get the data using the id
            const data = file[this.id];

            // Initializate the image url, title and description
            this.image = data.img;
            this.title = data.name;
            this.description = data.description;

            this.render();
        })
        .catch((err) => console.log(err));
    }

    disconnectedCallback() {}

    render() {
        this.shadowRoot.innerHTML = 
        `
            <style>${Task.styles}</style>
            
            <section id="image">
                <img src="${this.image}">
                <h1>${this.title}<h1>
            </section>

            <section id="info">
                <p>${this.description}</p>
            </section>
        `;
    }
}

customElements.define("app-task", Task);

