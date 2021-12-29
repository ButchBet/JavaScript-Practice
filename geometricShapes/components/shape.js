class Shape extends HTMLElement {
    constructor() {
        super();
        
        this.attachShadow({mode: "open"});
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
        `;
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {}

    render() {
        this.shadowRoot.innerHTML = `
            <style>${Shape.styles}</style>
            
            <!-- Latest compiled and minified CSS -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
            
            <!-- Latest compiled JavaScript -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script> 
            
            <main id="shapeComponets" class="row mx-0">
                <section id="description" class="col-sm-6">
                <section class="info">
                    <p class="h3" id="name">Shape</p>
        
                    <p id="meaning">A shape or figure is the form of an object or its external boundary, outline, or external surface, as opposed to other properties such as color, texture, or material type. A plane shape, two-dimensional shape, or 2D shape is constrained to lie on a plane, in contrast to solid figures.</p>            
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
                            <p  class="h3" for="">Input</p> <br>
                            <p>In computer science, the general meaning of input is to provide or give something to the computer, in other words, when a computer or device is receiving a command or signal from outer sources, the event is referred to as input to the device.</p>
                        </form>
                    </section>

                    <section id="output">
                        <p class="h3">Output</p>
                        <p>Any information that is processed by and sent out from a computer or other electronic device is considered output. An example of output is anything viewed on your computer monitor screen, such as the words you type on your keyboard</p>
                    </section>
                </section>
            </main>
        `;
    }
}

customElements.define("app-shape", Shape);