import EventEmitter from "../EventEmitter.js";


export class RatingStarView extends EventEmitter {

    static #STAR_COUNT = 5;
    static #RATING_BAR_ID = "rating-bar";
    static #STAR_CLASS_NAME = "star";
    static STAR_SELECT = "star-select";
    static DEFAULT_STAR_FILL = "#ccc";
    static SELECTED_STAR_FILL = "gold";
    static RATING_PER_STAR = 20;
    static CALCULATE_TOTAL_RATING = "calculate-total-rating";
    static STYLED_SELECTED_STARS = "styled-selected-stars";

    #container;
    #totalRating;
    #selectedStar;
    #selectedStarIndex;

    constructor(container) {
        super()
        this.#container = container;
    }

    #createStars = () => {
        let stars = [];
        let ratingBar = document.createElement("div");
        ratingBar.id = RatingStarView.#RATING_BAR_ID;
        this.#styleRatingBar(ratingBar);
        for (let i = 0; i < RatingStarView.#STAR_COUNT; i++) {
            let star = document.createElement("div");
            star.className = RatingStarView.#STAR_CLASS_NAME;
            stars.push(star);
        }
        this.#styleStars(stars);
        ratingBar.append(...stars);
        return ratingBar;
    };

    #styleRatingBar = (bar) => {
        if (!bar) throw new Error("Can't style argument of type null");
        bar.style.display = "flex";
        bar.style.flexDirection = "row";
        bar.style.gap = "5px";
        bar.style.padding = "10px';"
    };

    #styleStars = (stars) => {
        if (!stars || stars.length === 0) throw new Error("Can't style empty argument");
        stars.forEach((star) => {
            star.style.backgroundColor = RatingStarView.DEFAULT_STAR_FILL;
            star.style.border = "1px solid #fff";
            star.style.clipPath = "polygon(50% 0, 65% 40%, 100% 50%, 70% 60%, 100% 100%," +
                " 50% 80%, 0 100%, 30% 60%, 0 50%, 35% 40%)";
            star.style.width = "14px";
            star.style.height = "14px";
            star.style.cursor = "pointer";
        });
    };

    #resetStarPaint = (stars) => stars.forEach((star) => star.style.backgroundColor = RatingStarView.DEFAULT_STAR_FILL);

    #addEventListeners = () => {
        this.#starSelectEvent()
    };

    #starSelectEvent = () => {
        let stars = document.querySelectorAll(".star");
        stars.forEach((star, index, theStars) =>
            star.addEventListener("click", (ev) => {
                this.#selectedStar = star;
                this.#selectedStarIndex = index;
                this.#resetStarPaint(theStars);
                this.emit(RatingStarView.STAR_SELECT, this.#selectedStarIndex);
            }));
        this.#styleSelectedStarAndPredecessors(stars)
    };

    #styleSelectedStarAndPredecessors = (stars) => {
        this.on(RatingStarView.STAR_SELECT, (selectedStarIndex) => {
            stars.forEach((star, index) => {
                if (index <= selectedStarIndex) {
                    star.style.backgroundColor = RatingStarView.SELECTED_STAR_FILL
                }
            })
            this.#totalRating = (selectedStarIndex + 1) * RatingStarView.RATING_PER_STAR;
            this.emit(RatingStarView.CALCULATE_TOTAL_RATING, this.#totalRating);
            this.emit(RatingStarView.STYLED_SELECTED_STARS, stars);
        });
    }

    render = () => {
        this.#container.append(this.#createStars());
        this.#addEventListeners();
    }

}

