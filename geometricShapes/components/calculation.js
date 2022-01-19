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
        this.shapeStatus  = true;

        // Shape components triangle
        this.squareTemp = "<app-square></app-square>";
        this.triangleTemp = "<app-triangle></app-triangle>";
        this.circleTemp = "<app-circle></app-circle>";
        this.shapeTemp = "<app-shape></app-shape>";

        // change tag
        this.tag = this.shapeTemp;
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

            #change {
                height: 6em !important;
            }
        `;
    }

    connectedCallback() {
        this.render();
        
        // Main selectors
        this.square = this.shadowRoot.getElementById("Square");
        this.triangle = this.shadowRoot.getElementById("Triangle");
        this.circle = this.shadowRoot.getElementById("Circle");

        this.square.addEventListener("click", () => {
            if(this.squareStatus) {
                this.tag = this.shapeTemp;
    
                this.shapeStatus = true;
                this.squareStatus = false;
            } else {
                this.tag = this.squareTemp;
    
                this.squareStatus = true;
                this.shapeStatus = false;
                this.triangleStatus = false;
                this.circleStatus = false;
            }

            this.connectedCallback();
        });

        this.triangle.addEventListener("click", () => {
            if(this.triangleStatus) {
                this.tag = this.shapeTemp;
    
                this.shapeStatus = true;
                this.triangleStatus = false;
            } else {
                this.tag = this.triangleTemp;
    
                this.triangleStatus = true;
                this.shapeStatus = false;
                this.squareStatus = false;
                this.circleStatus = false;
            }

            this.connectedCallback();
        });

        this.circle.addEventListener("click", () => {
            if(this.circleStatus) {
                this.tag = this.shapeTemp;
    
                this.shapeStatus = true;
                this.circleStatus = false;
            } else {
                this.tag = this.circleTemp;
    
                this.circleStatus = true;
                this.shapeStatus = false;
                this.squareStatus = false;
                this.triangleStatus = false;
            }

            this.connectedCallback();
        });
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
                <div class="col-sm-4 d-flex justify-content-center"><img src="./assets/square.png" class="Square" id="Square" title="Square"</img></div>

                <div class="col-sm-4 d-flex justify-content-center"><img src="./assets/triangle.png" class="Triangle" id="Triangle" title="Triangle"></img></div>

                <div class="col-sm-4 d-flex justify-content-center"><img src="./assets/circle.png" class="Circle" id="Circle" title="Circle"></img></div>
            </nav>
            
            <div id="change">${this.tag}<div>
      `;

    }
}

customElements.define("app-calculation", Calculation);