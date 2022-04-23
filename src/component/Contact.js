

import {render} from "../template/Contact.js";
import EventEmitter from "../EventEmitter.js";


export default class Contact extends EventEmitter{

    #container

    constructor(container){
        super();
        this.#container = container
    }

    render = () =>{
        this.#container.innerHTML = render();
    }

    addEventListener = () =>{};
}