import {render} from "../template/Product.js";
import EventEmitter from "../EventEmitter.js";

export default class Product extends EventEmitter{

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