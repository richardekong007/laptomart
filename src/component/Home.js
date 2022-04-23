import {render} from "../template/Home.js";
import EventEmitter from "../EventEmitter.js";

export default class Home extends EventEmitter{

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

