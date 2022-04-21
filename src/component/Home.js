import {TinyEmitter} from "tiny-emitter";
import {render} from "../template/Home.js";

export default class Home extends TinyEmitter{

    #container;
    constructor(container){
        super();
        this.#container = container;
    }

    render = ()=>{
        this.#container.innerHTML = render();
    };

    addEventListeners = () =>{
        this.searchClick();
    };

    searchClick = () =>{};

    findProduct= () =>{};
}

