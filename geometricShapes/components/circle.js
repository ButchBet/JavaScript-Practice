class Circle extends HTMLElement {
    constructor() {
        super();

        this.PI = Math.PI;

        this.output = "Any information that is processed by and sent out from a computer or other electronic device is considered output. An example of output is anything viewed on your computer monitor screen, such as the words you type on your keyboard";

        this.attachShadow({mode : "open"});
    }

    static get styles() {
        return `
            main {
                background-color: var(--mist);
            }
            
            main > section {
                border: .5px solid black;
                
                width: 24em;
            }
            
            #description {
                background-color: var(--stone);
            }
            
            #canculation {
                background-color: var(--stone);
            }

            .formElem {
                width: 100%;
                height: 40px;
            }

            #Perimeter,
            #Area {
                background: var(--shadow) !important;
                border: 1px solid white !important;
                color: white;
            }

            #Perimeter:hover,
            #Area:hover {
                opacity: .8;
            }

            #Perimeter:active,
            #Area:active {
                transform: scale(.99);
            }

            #Radio,
            #Perimeter {
                margin-bottom: 8px !important;
            }
        `;
    }

    connectedCallback() {
        this.render();

        // Inputs
        this.radio = this.shadowRoot.getElementById("Radio");

        // Buttons
        this.perimeter = this.shadowRoot.getElementById("Perimeter");
        this.area = this.shadowRoot.getElementById("Area");

        this.perimeter.addEventListener("click", (e) => {
            e.preventDefault();

            let result = this.radio.value * 2 * this.PI;

            this.output = `The perimeter is: ${result} ut.`;

            this.connectedCallback();
        });

        this.area.addEventListener("click", (e) => {
            e.preventDefault();

            let result = this.PI * (this.radio.value**2);

            this.output = `The area is: ${result} ut^2.`;

            this.connectedCallback();
        });
    }

    disconnectedCallback() {
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>${Circle.styles}</style>

            <!-- Latest compiled and minified CSS -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
            
            <!-- Latest compiled JavaScript -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script> 

            <main id="shapeComponets" class="row mx-0">
                <section id="description" class="col-sm-6">
                <section class="info">
                    <p class="h3" id="name">Cricle</p>
        
                    <p id="meaning">It's an universal symbol with extensive meaning. It represent the notions of totality, whileness, original perfection. the self, the infinity, eternity, timelesssness, all cyclic movement.</p>            
                </section>

                <!-- <section class="images row">
                    <img class="col-sm-4"src="./asets/square.png" alt="Square">
                    <img class="col-sm-4"src="./asets/triangle.png" alt="Triangle">
                    <img class="col-sm-4"src="./asets/circle.png" alt="Circle">
                </section> -->
                </section>

                <section id="canculation" class="col-sm-6">
                    <section id="input">
                        <form action="#">
                            <p  class="formElem h3" for="">Input</p>
                            <input min="0" placeholder="Radio" type="number" name="radio" id="Radio" class="formElem">
                            
                            <input type="submit" value="Perimetro" name="side" id="Perimeter" class="formElem">

                            <input type="submit" value="Area" name="side" id="Area" class="formElem">
                        </form>
                    </section>

                    <section id="">
                        <p class="h3">Output</p>
                        <p id="output">${this.output}</p>
                    </section>
                </section>
            </main>
        `;
    }

}

customElements.define("app-circle", Circle);