


let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to(".title-one", 3, { y: -420 })
    .to(".title-main", 3, { y: 260 }, "-=3")
    .to(".title-two", 3, { y: 590 }, "-=3")
    .to("#experience", 3, { top: "50%" }, "-=3");

let scene = new ScrollMagic.Scene({
    triggerElement: "header",
    duration: "600",
    triggerHook: 0,
})
    .setTween(timeline)
    .setPin("header")
    .addTo(controller);
