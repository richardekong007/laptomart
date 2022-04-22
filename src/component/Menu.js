import {TinyEmitter} from "tiny-emitter";


export default class Menu extends TinyEmitter {

    #container
    static INFLATE_HOME_SECTION = "inflate-home-section";
    static INFLATE_PRODUCT_SECTION = "inflate-product-section";
    static INFLATE_CONTACT_SECTION = "inflate-contact-section";
    static INFLATE_REVIEW_SECTION = "inflate-review-section";
    static INFLATE_ABOUT_SECTION = "inflate-about-section";

    constructor() {
        super();
        this.#container = document.querySelector("#menu");
        this.#tintMenuItem();
        this.#addEventListener();
    }

    #addEventListener = () => {
        this.homeItemClick();
        this.productItemClick();
        this.contactItemClick();
        this.reviewItemClick();
        this.aboutItemClick();
    };

    homeItemClick = () => {
        let homeItem = this.#container.querySelector("#home-item");
        homeItem.addEventListener("click", (ev) => {
            this.emit(Menu.INFLATE_HOME_SECTION);
        });
    };

    productItemClick = () => {
        let productItem = this.#container.querySelector("#product-item");
        productItem.addEventListener("click", (ev) => {
            this.emit(Menu.INFLATE_PRODUCT_SECTION);
        });
    };

    contactItemClick = () => {
        let contactItem = this.#container.querySelector("#contact-item");
        contactItem.addEventListener("click", (ev) => {
            this.emit(Menu.INFLATE_CONTACT_SECTION);
        });
    };

    reviewItemClick = () => {
        let reviewItem = this.#container.querySelector("#review-item");
        reviewItem.addEventListener("click", (ev) => {
            this.emit(Menu.INFLATE_REVIEW_SECTION);
        });
    };

    aboutItemClick = () => {
        let aboutItem = this.#container.querySelector("#about-item");
        aboutItem.addEventListener("click", (ev) => {
            this.emit(Menu.INFLATE_ABOUT_SECTION);
        });
    };

    #tintMenuItem = () =>{
        window.addEventListener("hashchange", (ev) =>{
            this.#container.querySelectorAll("a").forEach(anchor=>{
                if (window.location.href === anchor.href){
                    anchor.style.borderBottom = "5px solid #00bfa5";
                    anchor.style.color = "#00bfa5"
                    anchor.querySelector("svg *").style.fill = "#00bfa5";
                    anchor.querySelector("svg *").style.stroke = "#fff";
                }else{
                    anchor.style.borderBottom = "0";
                    anchor.style.color = "#fff";
                    anchor.querySelector("svg *").style.fill = "#fff";
                    anchor.querySelector("svg *").style.stroke ="#fff";
                }
            });
        });
    };
}

