const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
});

// let controller = new ScrollMagic.Controller();
// let timeline = new TimelineMax();

// timeline
//     .to(".title-one", 3, { y: -240 })
//     .to(".title-main", 3, { y: 360 }, "-=3")
//     .to(".title-two", 3, { y: 480 }, "-=3")
//     .to("#experience", 3, { top: "50%" }, "-=3");

// let scene = new ScrollMagic.Scene({
//     triggerElement: "header",
//     duration: "90%",
//     triggerHook: 0,
// })
//     .setTween(timeline)
//     .setPin("header")
//     .addTo(controller);

const firstItem = document.querySelector(".first");
const secondItem = document.querySelector(".second");
const thirdItem = document.querySelector(".third")
const fourthItem = document.querySelector(".fourth");
const fifthItem = document.querySelector(".fifth");
const sixItem = document.querySelector(".six");

const pinkTitle = document.querySelector(".titlechangepink");

const sectionDesign = document.querySelector(".design");
const sectionActivate = document.querySelector(".activate");
const sectionPOSM = document.querySelector(".POSM");
const sectionGadgets = document.querySelector(".Gadgets");
const sectionProjects = document.querySelector(".Projects");
const sectionTransport = document.querySelector(".Transport");

firstItem.addEventListener("mouseover", () => {
    sectionDesign.classList.toggle("design");
    sectionDesign.style.animation = "moveText 1s linear";


});

firstItem.addEventListener("mouseout", () => {
    sectionDesign.classList.toggle("design");
    sectionDesign.style.animation = "moveText 1s linear";
});

// // sekcja 2// 

secondItem.addEventListener("mouseover", () => {
    sectionActivate.classList.toggle("activate");
    sectionActivate.style.animation = "moveText 1s linear";


});

secondItem.addEventListener("mouseout", () => {
    sectionActivate.classList.toggle("activate");
    sectionActivate.style.animation = "moveText 1s linear";


});

// // sekcja 3// 

thirdItem.addEventListener("mouseover", () => {
    sectionProjects.classList.toggle("Projects");
    sectionProjects.style.animation = "moveText 1s linear";


});

thirdItem.addEventListener("mouseout", () => {
    sectionProjects.classList.toggle("Projects");
    sectionProjects.style.animation = "moveText 1s linear";

});

// // sekcja 4// 

fourthItem.addEventListener("mouseover", () => {
    sectionPOSM.classList.toggle("POSM");
    sectionPOSM.style.animation = "moveText 1s linear";

});

fourthItem.addEventListener("mouseout", () => {
    sectionPOSM.classList.toggle("POSM");
    sectionPOSM.style.animation = "moveText 1s linear";
});

// // sekcja 5// 

fifthItem.addEventListener("mouseover", () => {
    sectionGadgets.classList.toggle("Gadgets");
    sectionGadgets.style.animation = "moveText 1s linear";


});

fifthItem.addEventListener("mouseout", () => {
    sectionGadgets.classList.toggle("Gadgets");
    sectionGadgets.style.animation = "moveText 1s linear";
});


sixItem.addEventListener("mouseover", () => {
    sectionTransport.classList.toggle("Transport");
    sectionTransport.style.animation = "moveText 1s linear";


});

sixItem.addEventListener("mouseout", () => {
    sectionTransport.classList.toggle("Transport");
    sectionTransport.style.animation = "moveText 1s linear";


});

const fade = document.querySelectorAll(".fade-in");

const fadeOptions = {
    threshold: 0.4

};

const fadeOnScroll = new IntersectionObserver
    (function (
        entries,
        fadeOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                fadeOnScroll.unobserve(entry.target);

            }
        })
    },
        fadeOptions);

fade.forEach(fadeOne => {
    fadeOnScroll.observe(fadeOne);
});

const hoverAdres = document.querySelector(".pin");

const adresGermany = document.querySelector(".adgermany");
const adresPoland = document.querySelector(".adpoland");


hoverAdres.addEventListener("mouseover", () => {
    adresGermany.style.display = "block";
});


