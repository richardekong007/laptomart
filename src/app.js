import Home from "../src/component/Home.js";
import About from "../src/component/About.js";
import Review from "../src/component/Review.js";

export default class App {

    #container;
    #home;
    #about;
    #review;

    constructor(container) {
        this.#container = container;
        this.#home = new Home(this.#container);
        this.#about = new About(this.#container);
        this.#review = new Review(this.#container);
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

