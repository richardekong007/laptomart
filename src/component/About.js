

import {render} from "../template/About.js";
import EventEmitter from "../EventEmitter.js";

export default class About extends EventEmitter{

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

