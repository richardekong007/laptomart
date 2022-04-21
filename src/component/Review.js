

import {render} from "../template/Review.js";
import {TinyEmitter} from "tiny-emitter";

export default class Review extends TinyEmitter{

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