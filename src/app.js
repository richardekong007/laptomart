import Home from "../src/component/Home.js";

export default class App {

    #container;
    #home;

    constructor(container) {
        this.#container = container;
        this.#home = new Home(this.#container);
    }

    init = () => {
        this.render()
    }

    render = () => {
        this.#home.render()
    }

    addEventListeners = () => {
    }
}

