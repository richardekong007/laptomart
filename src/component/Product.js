

import {render} from "../template/Product.js";
import {TinyEmitter} from "tiny-emitter";

export default class Product extends TinyEmitter{

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