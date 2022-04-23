import EventEmitter from "../EventEmitter.js";


export default class Dialog extends EventEmitter{
    _container;
    _containerId;
    _overlayId = "overlay";
    _overlayClass = "overlay"
    _url;

    constructor(container){
        super();
        this._container = container;
        this._containerId = container.id;
        this._createOverlay();
    }

    _createOverlay = () =>{};

    inflate = () =>{};

    dismiss = () =>{};
}

