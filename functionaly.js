const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
});

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to(".title-one", 3, { y: -240 })
    .to(".title-main", 3, { y: 460 }, "-=3")
    .to(".title-two", 3, { y: 450 }, "-=3")
    .to("#experience", 3, { top: "50%" }, "-=3");

let scene = new ScrollMagic.Scene({
    triggerElement: "header",
    duration: "90%",
    triggerHook: 0,
})
    .setTween(timeline)
    .setPin("header")
    .addTo(controller);