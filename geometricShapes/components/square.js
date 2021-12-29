class Square extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: "open"});
        
        this.side = 0;
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

    SquarePerimeter() {
        return  this.side * 4 ;
    }

    SquareArea() {
        return this.side**2;
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {}

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
                        <form action="#">
                            <p  class="h3" for="">Input</p> <br>
                            <label for="side">
                                Side
                                <input type="number" name="side" id="side">
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

customElements.define("app-square", Square);