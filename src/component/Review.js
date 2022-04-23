import {render} from "../template/Review.js";
import EventEmitter from "../EventEmitter.js";

export default class Review extends EventEmitter {

    #container;
    static CREATE_REVIEW = "create-review";

    constructor(container) {
        super();
        this.#container = container;
    }

    render = () => {
        this.#container.innerHTML = render();
        this.#addEventListeners();
    };

    #addEventListeners = () => {
        this.#createReviewClick()
    };

    #createReviewClick = () => {
        const createButton = this.#container.querySelector("#create-button-container");
        createButton.addEventListener("click", (_ev) => {
            this.emit(Review.CREATE_REVIEW);
        });
    };



}

