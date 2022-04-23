
import {render} from "../template/ReviewDialog.js";
import Dialog from "./Dialog.js";

export default class ReviewDialog extends Dialog {

    static CLOSE_REVIEW_DIALOG = "close-review-dialog";

    constructor(container) {
        super(container);
    }

    _createOverlay = () => {
        let overlay = document.createElement("div");
        let dialogContainer = document.createElement("div");
        overlay.id = this._overlayId;
        overlay.className = this._overlayClass
        this.#styleOverlay(overlay);
        dialogContainer.id = "dialog-container";
        dialogContainer.innerHTML = render();
        overlay.append(dialogContainer);
        this._container.append(overlay);
        this.#addEventListeners();
    };

    #styleOverlay = (overlay) => {
        overlay.style.backgroundColor = "#000";
        overlay.style.opacity = "0.8";
        overlay.style.filter = "alpha(opacity=80)";
        overlay.style.position = "absolute";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.zIndex = "10";
    };

    #addEventListeners = () =>{
        this.#closeReviewDialogEvent();
    };

    inflate = () => {
        this._createOverlay();
    };

    dismiss = () => {
        let overlay = document.getElementById(this._overlayId);
        let dialogContainer = document.querySelector("#dialog-container");
        overlay.removeChild(dialogContainer);
        this._container.removeChild(overlay);
    };

    #closeReviewDialogEvent = () =>{
        const cancelButton = document.querySelector("#review-form-close-btn");
        const closeButton = document.querySelector("#cancel");
        cancelButton.addEventListener("click", (ev) => this.emit(ReviewDialog.CLOSE_REVIEW_DIALOG));
        closeButton.addEventListener("click", (ev) => this.emit(ReviewDialog.CLOSE_REVIEW_DIALOG));
    };

}

