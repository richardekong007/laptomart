import Home from "../src/component/Home.js";
import About from "../src/component/About.js";
import Review from "../src/component/Review.js";
import Product from "../src/component/Product.js";

export default class App {

    #container;
    #home;
    #about;
    #review;
    #product;

    constructor(container) {
        this.#container = container;
        this.#home = new Home(this.#container);
        this.#about = new About(this.#container);
        this.#review = new Review(this.#container);
        this.#product = new Product(this.#container);
    }

    init = () => {
        this.render();
    };

    render = () => {
        this.#home.render();
    };

    addEventListeners = () => {
    };
}

