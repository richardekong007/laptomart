import Home from "../src/component/Home.js";
import About from "../src/component/About.js";
import Review from "../src/component/Review.js";
import Product from "../src/component/Product.js";
import Contact from "../src/component/Contact.js";
import Menu from "../src/component/Menu.js";

export default class App {

    #container;
    #home;
    #about;
    #review;
    #product;
    #contact;
    #menu;

    constructor(container) {
        this.#container = container;
        this.#home = new Home(this.#container);
        this.#about = new About(this.#container);
        this.#review = new Review(this.#container);
        this.#product = new Product(this.#container);
        this.#contact = new Contact(this.#container);
        this.#menu = new Menu();
    }

    init = () => {
        this.render();
        this.#addEventListeners();
    };

    render = () => {
        this.#home.render();
    };

    #addEventListeners = () => {
        this.#homeMenuSectionInflateEvent();
        this.#productMenuSectionInflateEvent();
        this.#contactMenuSectionInflateEvent();
        this.#reviewMenuSectionInflateEvent();
        this.#aboutMenuSectionInflateEvent();
    };

    #homeMenuSectionInflateEvent = () => {
        this.#menu.on(Menu.INFLATE_HOME_SECTION, () => this.#home.render());
    };

    #productMenuSectionInflateEvent = () => {
        this.#menu.on(Menu.INFLATE_PRODUCT_SECTION, () => {
            this.#product.render();
        });
    };

    #contactMenuSectionInflateEvent = () => {
        this.#menu.on(Menu.INFLATE_CONTACT_SECTION, () => this.#contact.render());
    };

    #reviewMenuSectionInflateEvent = () => {
        this.#menu.on(Menu.INFLATE_REVIEW_SECTION, () => this.#review.render());
    };

    #aboutMenuSectionInflateEvent = () => {
        this.#menu.on(Menu.INFLATE_ABOUT_SECTION, () => this.#about.render());
    };
}

