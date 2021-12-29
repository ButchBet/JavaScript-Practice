import "./shape.js";
import "./square.js";
import "./triangle.js";
import "./circle.js";

class Calculation extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        
        // Shape status (selected = true, unselected = false)
        this.squareStatus = false;
        this.triangleStatus  = false;
        this.circleStatus  = false;

        this._square;
        this._triangle;
        this._circle;
    }

    static get styles() {
        return `
            header {
                background-color: var(--shadow);
                padding: 10px;
                box-sizing: border-box;
            }
            
            h1 {
                font-size: 100px;
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                align-content: center;
            }
            
            
            nav div img {
                /* width: 64px; */
                width: 64px;
                height: 64px;
                cursor: pointer;
            }
            
            nav div img:hover {
                opacity: .8;
            }
            
            nav div img:active {
                transform: scale(.9);
            }
            
            header,
            nav {
                margin-bottom: 10px;
            }
            
            @media screen and (max-widht: 579px){
                main .images .col-sm-4 {
                    width: 101px !important;
                    height: 101px !important;
                }
            }
        `;
    }

    SquareClicked(e) {
        // if(this.square) {
        //     // Change quare componet to welcome component
            
        // }
        console.log("Hello from square");
    }

    TriangleClicked() {
        console.log("Hello from triangel");
    }

    CircleClicked() {
        console.log("Hello from circle");
    }

    connectedCallback() {
        this.render();
        
        // Main selectors
        this.square = this.shadowRoot.getElementById("Square");
        this.triangle = this.shadowRoot.getElementById("Triangle");
        this.circle = this.shadowRoot.getElementById("Circle");

        // Initialize main valiabels shape
        this._square = this.square;
        this._triangle = this.triangle;
        this._circle = this.circle;

        // console.log(this.square, this.triangle, this.circle);

        this.square.onpointerdown = this.SquareClicked;
        this.triangle.onpointerdown = this.TriangleClicked;
        this.circle.onpointerdown = this.CircleClicked;
    }

    disconnectedCallback() {}

    render() {
        this.shadowRoot.innerHTML = `
            <style>${Calculation.styles}</style>

            <!-- Latest compiled and minified CSS -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
            
            <!-- Latest compiled JavaScript -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script> 

            <header class="text-center">
                    <h1>Geometric Shapes</h1>
                </header>
            

            <nav class="row mx-0">
                <div class="col-sm-4 d-flex justify-content-center"><img src="./asets/square.png" class="Square" id="Square" title="Square"</img></div>

                <div class="col-sm-4 d-flex justify-content-center"><img src="./asets/triangle.png" class="Triangle" id="Triangle" title="Triangle"></img></div>

                <div class="col-sm-4 d-flex justify-content-center"><img src="./asets/circle.png" class="Circle" id="Circle" title="Circle"></img></div>
            </nav>
            
            <div id="change"><app-circle></app-circle><div>
      `;
    }
}

customElements.define("app-calculation", Calculation);