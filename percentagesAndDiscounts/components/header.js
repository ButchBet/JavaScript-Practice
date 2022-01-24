class Header extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode : "open"});
    }

    static get styles() {
        return `
            @import url('https://css.gg/search.css');

            header {
                height: 13%;
                background: var(--glacier-blue);

                --bs-gutter-x: 0rem !important;
                position: relative;
            }

            // header::before {
            //     content: "Hello";
            //     font-size: 10rem;
            //     color: white;
            // }

            // header::after {
            //     content: "Hello";
            //     font-size: 10rem;
            //     color: white;
            // }

            #logo {
                // background: red;
                height: 100%;
            } #logo img {
                height: 88%;
                border-radius: 100%;
                cursor: pointer;
            } #logo img:hover {
                // transform: scale(1.09);
                filter: drop-shadow(1px 1px 2px black);
                opacity: 1.1;
            } #logo img:active {
                transform: scale(.9);
                box-shadow: 1px 1px 2px black;
            }


            #category {
                height: 100%;
                --bs-gutter-x: 0 !important;
            } #category div {
                height: 40%;
                // background: blue;
            } #category div .arrowDown {
                // height: 20px;
                // width: 20px;
                
            } #category div .arrowDown img {
                height: 20px;
                width: 20px;
                cursor: pointer;
            } #category div .arrowDown img:active {
                transform: scale(.9);
            } .search {
                width: 100%;
                position: relative;
                height: 100% !important;
            } .searchTerm {
                border: 3px solid #00B4CC;
                border-right: none;
                padding: 5px;
                height: 100%;
                border-radius: 5px 0 0 5px;
                outline: none;
                color: #9DBFAF;
            } .searchTerm:focus{
                color: #00B4CC;
            } .searchButton {
                height: 100%;
                border: 1px solid #00B4CC;
                background: #00B4CC;
                text-align: center;
                color: #fff;
                border-radius: 0 5px 5px 0;
                font-size: 20px;
            } .searchButton:active {
                transform: scale(.9);
            } /*Resize the wrap to see the search bar change!*/
                .wrap{
                height: 100% !important;
            }

            #auth-search {
                // background: grey;
                height: 100%;
            } #auth-search img {
                height: 50px;
                border: .1px solid var(--overcast);
                border-radius: 100%;
                cursor: pointer;
            } #auth-search img:active {
                transform: scale(.9);
            } #auth-search img:hover {
                opacity: .99;
                left: 2px;
            }

            @media screen and (max-width: 575px) {
                #category {
                    height: 50%;
                }#category div {
                    width: 50%;
                    height: 50%;
                } #category .textCatergory {
                    justify-content: end !important;
                } #category .arrowDown {
                    justify-content: start !important;
                }

                #searching {
                    position: absolute;
                    left: 0;
                    top: 17rem !important;
                    heignt: 10% !important;
                    width: 100vw !important;
                } #searching .wrap,
                #searching .wrap .search{
                    width: 100% !important;
                } 

                #auth-search img {
                    border-color: var(--glacier-blue);
                }
            }

            @media screen and (min-width: 576px) and (max-width: 652px) {
                #logo img {
                    height: 80% !important;
                }
            }`
        ;
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {}

    render() {
        this.shadowRoot.innerHTML = 
        `
            <style>${Header.styles}</style>

            <!-- Latest compiled and minified CSS -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
            
            <!-- Latest compiled JavaScript -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script> 

            

            <header class="container-fluid row">
                <div id="logo" class="col-sm-2 d-flex flex-row flex-wrap justify-content-center align-content-center">
                <img src="../assets/logo3.png" alt="Logo image of bug" title="crucks.com">
                </div>
                
                <div id="category" class="col-sm-9 row d-flex flex-row flex-wrap align-content-end">
                    <div id="searching" class="col-12 d-flex flex-row flex-wrap justify-content-center align-content-center">
                        <div class="wrap col-10">
                            <div class="search d-flex flex-row flex-nowrap">
                                <input type="text" class="searchTerm col-11" placeholder="What are you looking for?">

                                <button type="submit" class="searchButton col-1 d-flex flex-row flex-wrap justify-content-center align-content-center">
                                    <i class="gg-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div id="men" class="col-sm-3 d-flex flex-row flex-wrap justify-content-center align-content-center">
                        <div class="d-flex flex-row flex-wrap justify-content-center align-content-center textCatergory">
                            Mem
                        </div>

                        <div class="d-flex flex-row flex-wrap justify-content-center align-content-center arrowDown">
                            <img src="../assets/arrow-down.png">
                        </div>

                    </div>

                    <div id="women" class="col-sm-3 d-flex flex-row flex-wrap justify-content-center align-content-center">
                        <div class="d-flex flex-row flex-wrap justify-content-center align-content-center textCatergory">
                            Women
                        </div>

                        <div class="d-flex flex-row flex-wrap justify-content-center align-content-center arrowDown">
                            <img src="../assets/arrow-down.png">
                        </div>

                    </div>

                    <div id="kids" class="col-sm-3 d-flex flex-row flex-wrap justify-content-center align-content-center">
                        <div class="d-flex flex-row flex-wrap justify-content-center align-content-center textCatergory">
                            Kids
                        </div>

                        <div class="d-flex flex-row flex-wrap justify-content-center align-content-center arrowDown">
                            <img src="../assets/arrow-down.png">
                        </div>

                    </div>

                    <div id="gifts" class="col-sm-3 d-flex flex-row flex-wrap justify-content-center align-content-center">
                        <div class="d-flex flex-row flex-wrap justify-content-center align-content-center textCatergory">    
                            Gifts
                        </div>
                        
                        <div class="d-flex flex-row flex-wrap justify-content-center align-content-center arrowDown">
                            <img src="../assets/arrow-down.png">
                        </div>

                    </div>
                </div>

                <div id="auth-search" class="col-sm-1 d-flex flex-row flex-wrap justify-content-center align-content-center">
                    <img title="Account and settings" src="../assets/account.png" alt="Acount image">
                </div>
            </header>
        `;
    }
}

customElements.define("app-header", Header);