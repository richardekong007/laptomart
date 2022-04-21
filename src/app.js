import Home from "../src/component/Home.js";
import About from "../src/component/About.js";

export default class App {

    #container;
    #home;
    #about;

    constructor(container) {
        this.#container = container;
        this.#home = new Home(this.#container);
        this.#about = new About(this.#container);
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

