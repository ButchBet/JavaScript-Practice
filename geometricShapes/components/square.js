class Square extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: "open"});

        this.output = "Any information that is processed by and sent out from a computer or other electronic device is considered output. An example of output is anything viewed on your computer monitor screen, such as the words you type on your keyboard";
    }

    static get styles() {
        return `
            main {
                background-color: red;
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

            // #input {
            //     background: red;
            // }

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

            #Side,
            #Perimeter {
                margin-bottom: 8px !important;
            }
        `;
    }

    connectedCallback() {
        this.render();

        this.perimeter = this.shadowRoot.getElementById("Perimeter");
        this.area = this.shadowRoot.getElementById("Area");
        this.side = this.shadowRoot.getElementById("Side");

        this.perimeter.addEventListener("click", (e) => {
            e.preventDefault();

            this.output = `The perimeter is: ${this.side.value * 4} ut`;

            this.connectedCallback();
        });

        this.area.addEventListener("click", (e) => {
            e.preventDefault();

            this.output = `The area is: ${this.side.value**2} ut^2`;

            this.connectedCallback();
        });
    }

    disconnectedCallback() {
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>${Square.styles}</style>

            <!-- Latest compiled and minified CSS -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
            
            <!-- Latest compiled JavaScript -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script> 

            <main id="shapeComponets" class="row mx-0">
                <section id="description" class="col-sm-6">
                <section class="info">
                    <p class="h3" id="name">Square</p>
        
                    <p id="meaning">It's a figure with four equal and four right angles. It's a popular shape for windows and record albumns, among many other things.</p>            
                </section>

                <!-- <section class="images row">
                    <img class="col-sm-4"src="./asets/square.png" alt="Square">
                    <img class="col-sm-4"src="./asets/triangle.png" alt="Triangle">
                    <img class="col-sm-4"src="./asets/circle.png" alt="Circle">
                </section> -->
                </section>

                <section id="canculation" class="col-sm-6">
                    <section id="input">
                        <form action="#" class="">
                            <p  class="formElem h3" for="">Input</p>
                            <input min="0" placeholder="Side" type="number" name="side" class=" formElem" id="Side">
                            
                            <input type="submit" value="Perimetro" name="side" class="btn formElem" id="Perimeter">

                            <input type="submit" value="Area" name="side" class="btn formElem" id="Area">
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

customElements.define("app-square", Square);