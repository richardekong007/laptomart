

import {render} from "../template/About.js";
import {TinyEmitter} from "tiny-emitter";

export default class About extends TinyEmitter{

    #container;
    constructor(container){
        super();
        this.#container = container;
    }

    render = () =>{
        this.#container.innerHTML = render();
    };

    addEventListeners = () =>{};
}

