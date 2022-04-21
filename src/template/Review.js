

export const render = () =>{
    return `
        <div id="review-container">    
        <div id="left"></div>
        <div id="center">    
            <div id="create-container">
                    <button id="create-button-container">
                        <svg width="16" height="16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g fill="#00bfab" fill-rule="evenodd" class="fill-000000"><path d="M31.5 13a2.5 2.5 0 0 1 2.5 2.5v32a2.5 2.5 0 1 1-5 0v-32a2.5 2.5 0 0 1 2.5-2.5Z"></path><path d="M50 31.5a2.5 2.5 0 0 1-2.5 2.5h-32a2.5 2.5 0 1 1 0-5h32a2.5 2.5 0 0 1 2.5 2.5Z"></path></g></svg>
                        <a id="create-button">Create</a>
                    </button>    
            </div>
            <div id="top-review-container">
                <div class="review-desc">Top Reviews</div>
                <div class="review">
                    <div class="top-review-slider">
<!-- include a loop here for all five review-->
                    <div id="reviewer-row">
                        <img id="reviewer-photo" src="" alt="">
                        <div class="reviewer-comment-container">
                            <span id="page-num-desc">1/5</span>
                            <p class="reviewer-comment"></p>   
                        </div>
                    </div>
                    <div class="rating-space">
                        <div class="empty-space"></div>
                        <div class="rating-bar">
                            <div class="reviewed-star"></div>
                            <div class="reviewed-star"></div>
                            <div class="reviewed-star"></div>
                            <div class="reviewed-star"></div>
                            <div class="reviewed-star"></div>
                        </div>
                    </div>
                    <div id="top-review-controller">
                        <div id="arrow-back"></div>
<!--                        use loop to automate display of this feature-->
                        <div id="page-indicator-group">
                            <div class="page-indicator"></div>
                            <div class="page-indicator"></div>
                            <div class="page-indicator"></div>
                            <div class="page-indicator"></div>
                            <div class="page-indicator"></div>
                        </div>
                        <div id="arrow-forward"></div>
                    </div>
                </div>
                </div>
            </div>
            <div id="other-reviews-container">
                <div class="review-desc">Other Reviews</div>
                <div class="other-review-scroller">
                          <!-- include a loop here for all five review-->
                    <div class="review"> 
                        <div id="reviewer-row">
                            <img id="reviewer-photo" src="" alt="">
                            <div class="reviewer-comment-container">
                                <p class="reviewer-comment"></p>   
                            </div>
                        </div>
                        <div class="rating-space">
                        <div class="empty-space"></div>
                        <div class="rating-bar">
                            <div class="reviewed-star"></div>
                            <div class="reviewed-star"></div>
                            <div class="reviewed-star"></div>
                            <div class="reviewed-star"></div>
                            <div class="reviewed-star"></div>
                        </div>
                    </div>               
                    </div>
                </div>
            </div>
        </div>
        <div id="right"></div>
    </div>
    `;
};