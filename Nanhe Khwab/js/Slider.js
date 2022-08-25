import $ from "jquery";


function init() {
    loadImages();
    initScrollBtns();
}

function loadImages() {
    // TODO: get metadata from json and add files
}

function initScrollBtns() {
    const leftNav = $(".nav.left-nav");
    const rightNav = $(".nav.right-nav");

    leftNav
        .click(animateScrollFn("-="));

    rightNav
        .click(animateScrollFn("+="));
}

function animateScrollFn(scrollDir) {
    return function() {
        const slider = $(".image-slider");
        const scrollBy = 300;
        const scrollTime = 400;

        slider
            .animate({
                scrollLeft: scrollDir + scrollBy
            }, scrollTime);
    }
}

export default function Slider() {
    return {
        init: init
    }
}