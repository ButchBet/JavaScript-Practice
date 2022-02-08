class Footer extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode : "open"});
    }

    goTop() {
        // window.scrollTo(0, 0);
        window.scrollTo({
            top: 0,
            left: 0, 
            behavior: "smooth"
        });

        // $("html", "body").animate({ scrollTop: 0}, "slow")

        this.connectedCallback();
    }

    static get styles() {
        return `
            :host {
                width: 100%;
                display: flex;
                position: relative;
                flex-flow: column;
                justify-content: space-between;
                top: 1rem;
            }

            #main-info {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-evenly;
                gap: 2em;
            } #main-info section ul {
                padding: 0;
            } #main-info section ul  li{
                margin-bottom: 2rem;
            } #main-info section ul li:last-child {
                margin-bottom: 0;
            } #check-app {
                display: flex;
                flex-flow: column;
                gap: 1rem;
            } #logo-title {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
            } #logo-title img {
                width: 40px;
            } #apps {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-evenly;
                cursor: pointer;
            } #apps img:active,
              #go-top:active {
                transform: scale(.9);
            }
            
            #logo-title, 
            #go-top {
                margin-top: 1em;
            }

            #go-top {
                display: flex;
                flex-flow: column;
                align-items: center;
                cursor: pointer;
            }

            #go-top,
            #apps img, 
            #logo-title img {
                user-select: none;
            }

            
            ul {
                list-style: none;
            } a,
              #copyrights {
                text-decoration: none;
                color: grey;
            } a:hover,
              #copyrights:hover {
                text-decoration: underline;
            } .titles {
                color: black;
                font-weight: 800;
            }

            #secondary-info ul{
                display: flex;
                flex-flow: row wrap;
                justify-content: flex-start;
                padding-left: 5.5em;
                gap: 3rem;
            }

            @media screen and (max-width: 575px) {
                :host {
                    top: 15rem;
                }

                .checking {
                    width: 16rem;
                }

                #logo-title {
                    justify-content: space-evenly;
                }

                #secondary-info ul{
                    padding-left: 0;
                    justify-content: space-evenly;
                    gap: 2rem;
                }
            }
        `;
    }

    connectedCallback() {
        this.render();

        this.buttonGoTop = this.shadowRoot.getElementById("go-top");

        this.buttonGoTop.onclick = () => this.goTop();
    }

    disconnectedCallback() {
        this.buttonGoTop.onclick = null;
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>${Footer.styles}</style>
            
            <section id="main-info">
                <section id="about-us" class="checking">
                    <ul>
                        <li class="titles">About us</li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Corporate social & responsability</a></li>
                        <li><a href="#">Investor relations</a></li>
                        <li><a href="#">Get email updates</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </section>

                <section id="customer-service" class="checking">
                    <ul>
                        <li class="titles">Customer service</li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Order status</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Return policies & exchange</a></li>
                    </ul>
                </section>

                <section id="store-services" class="checking">
                    <ul>
                        <li class="titles">Store & services</li>
                        <li><a href="#">Free style help</a></li>
                        <li><a href="#">Alterations & tailoring</a></li>
                        <li><a href="#">Find a store</a></li>
                    </ul>
                </section>

                <section id="check-app" class="checking">
                        <section id="logo-title">
                            <img src="https://img.icons8.com/external-prettycons-solid-prettycons/30/000000/external-iphone-devices-prettycons-solid-prettycons.png"/>
                            <p><a href="#">Check apps</a></p>
                        </section>

                        <section id="apps">
                            <img src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png"/>
                            <img src="https://img.icons8.com/material-outlined/24/000000/pinterest--v1.png"/>
                            <img src="https://img.icons8.com/ios-glyphs/24/000000/twitter--v1.png"/>
                            <img src="https://img.icons8.com/material-outlined/24/000000/facebook-new.png"/>
                            <img src="https://img.icons8.com/material-outlined/24/000000/plus--v1.png"/>
                        </section>
                </section>

                <section id="go-top" class="checking">
                    <img src="https://img.icons8.com/external-those-icons-fill-those-icons/30/000000/external-up-arrows-those-icons-fill-those-icons.png"/>
                    <p>Top</p>
                </section>
            </section>

            <section id="secondary-info">
                <ul>
                    <li><a href="#">Do Not Sell My Info</a></li>
                    <li><a href="#">Your Privacy Rights</a></li>
                    <li><a href="#">Alterations & tailoring</a></li>
                    <li id="copyrights">©2022 Crucks, Inc.</li>
                </ul>
            </section>
        `;
    }
}

customElements.define("app-footer", Footer);