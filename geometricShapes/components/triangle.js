class Triangle extends HTMLElement {    
    constructor() {
        super();

        this.height = 0;
        this.side1 = 0;
        this.side2 = 0;
        this.base = 0;

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
        `;
    }
    
    TrainglePerimeter() {
        return  this.side1 + this.side2 + this.base;
    }

    TriangleArea() {
        return (this.base * this.height) / 2;
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {}

    render() {
        this.shadowRoot.innerHTML = `
            <style>${Triangle.styles}</style>

            <!-- Latest compiled and minified CSS -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
            
            <!-- Latest compiled JavaScript -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script> 

            <main id="shapeComponets" class="row mx-0">
                <section id="description" class="col-sm-6">
                <section class="info">
                    <p class="h3" id="name">Triangle</p>
        
                    <p id="meaning">It's a closed, tow dimensinal shape with three straight sides. A triangle is also a polygon.</p>            
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
                            <label for="height">
                                Height
                                <input type="number" name="height" id="height">
                            </label>

                            <label for="side1">
                                Side 1
                                <input type="number" name="side1" id="side1">
                            </label>

                            <label for="side2">
                                Side 2
                                <input type="number" name="side2" id="side">
                            </label>

                            <label for="base">
                                Base
                                <input type="number" name="base" id="base">
                            </label>
                            
                            <input type="submit" value="Perimetro" name="side" id="side">

                            <input type="submit" value="Area" name="side" id="side">
                        </form>
                    </section>

                    <section id="">
                        <p class="h3">Output</p>
                        <p id="output">Any information that is processed by and sent out from a computer or other electronic device is considered output. An example of output is anything viewed on your computer monitor screen, such as the words you type on your keyboard</p>
                    </section>
                </section>
            </main>
        `;
    }
}

customElements.define("app-triangle", Triangle);