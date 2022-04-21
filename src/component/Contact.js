

import {render} from "../template/Contact.js";
import {TinyEmitter} from "tiny-emitter";


export default class Contact extends TinyEmitter{

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