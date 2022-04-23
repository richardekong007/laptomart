import {render} from "../template/Review.js";
import EventEmitter from "../EventEmitter.js";

export default class Review extends EventEmitter{

    #container;
    constructor(container) {
        super();
        this.#container = container;
    }

    render = () =>{
          this.#container.innerHTML = render();
    };

    addEventListeners = () =>{};
}

