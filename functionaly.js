const menuIcoN = document.querySelector(".hamburger");
const navigatioN = document.querySelector(".navigation");

menuIcoN.addEventListener("click", () => {
    navigatioN.classList.toggle("change");
});




const titleOne = document.querySelector("#titleOne");
const titleMain = document.querySelector("#titleMain");
const titleTwo = document.querySelector("#titleTwo");

const sectionExperience = document.getElementById("experience");

// const titleOneLand = 41

// titleOne.style.bottom = titleOneLand + "%";


// function move() {
//     const increment = window.scrollY

//     //titleOne up //
//     titleOne.style.bottom = 61 + increment * 0.10 + '%'
//     titleMain.style.bottom = 53 - increment * 0.12 + '%'
//     titleTwo.style.bottom = 46 - increment * 0.15 + '%'


// }
// window.addEventListener("scroll", move)



// const mediaQuery = window.matchMedia('(min-device-width : 321px)')

// if (mediaQuery.matches) {


//     function move() {
//         const increment = window.scrollY

//         //titleOne up //
//         titleOne.style.bottom = 61 + increment * 0.10 + '%'
//         titleMain.style.bottom = 53 - increment * 0.12 + '%'
//         titleTwo.style.bottom = 46 - increment * 0.15 + '%'


//     }
//     window.addEventListener("scroll", move)

// }



// const mediaQuery = window.matchMedia('(min-device-width : 481px)')


// if (mediaQuery.matches) {



//         titleOneLand = 41 + increment * 0.10 + '%'
//         titleMain.style.bottom = 23 - increment * 0.12 + '%'
//         titleTwo.style.bottom = 6 - increment * 0.15 + '%'


//     }
//     window.addEventListener("scroll", move)











// window.addEventListener("resize",checkMediaQuery);





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

const hoverAdresPoland = document.querySelector(".pin-p");
const hoverAdresGermany = document.querySelector(".pin-g");




hoverAdresGermany.addEventListener("click", () => {
    // hoverAdresGermany.classList.toggle = ("adgermany")
    console.log("test");
});






const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup")
const selectedImage = document.getElementById("selectedImage");
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
const selectedIndex = null;

imageIndexes.forEach(i => {
    const image = document.createElement('img');
    image.src = `./images/works-${i}.jpg`;
    image.alt = `Portfolio Works ${i} by Pink Pepper Media`;
    image.classList.add('galleryImg');


    image.addEventListener("click", () => {

        popup.style.transform = `translateY(0)`;
        selectedImage.src = `./images/works-${i}.jpg`;
        selectedImage.alt = `Portfolio Works ${i} by Pink Pepper Media`;
    });



    gallery.appendChild(image);
});

popup.addEventListener("click", () => {
    popup.style.transform = `translateY(-100%)`;
    popup.src = "";
    popup.alt = "";
})


const galleryVis = document.getElementById("gallery-visuals");
const popupVis = document.getElementById("popupVisual")
const selectedImageVis = document.getElementById("selectedImageV");
const imageIndexesVis = [1, 2, 3,];
const selectedIndexVis = null;

imageIndexesVis.forEach(i => {
    const image = document.createElement('img');
    image.src = `./images/visual-${i}.jpg`;
    image.alt = `Portfolio KEY VISUALS ${i} by Pink Pepper Media`;
    image.classList.add('galleryImgV');


    image.addEventListener("click", () => {

        popupVis.style.transform = `translateY(0)`;
        selectedImageVis.src = `./images/visual-${i}.jpg`;
        selectedImageVis.alt = `Portfolio KEY VISUALS ${i} by Pink Pepper Media`;
    });



    galleryVis.appendChild(image);
});

popupVis.addEventListener("click", () => {
    popupVis.style.transform = `translateY(-100%)`;
    popupVis.src = "";
    popupVis.alt = "";
})



const galleryGadgets = document.getElementById("gallery-gadgets");
const popupGadgets = document.getElementById("popupGadgets")
const selectedImageGadget = document.getElementById("selectedImageGadgets");
const imageIndexesGadget = [1, 2, 3,];
const selectedIndexGadget = null;

imageIndexesGadget.forEach(i => {
    const image = document.createElement('img');
    image.src = `./images/gadgets-${i}.jpg`;
    image.alt = `Portfolio gadgets ${i} by Pink Pepper Media`;
    image.classList.add('galleryImgGa');


    image.addEventListener("click", () => {

        popupVis.style.transform = `translateY(0)`;
        selectedImageVis.src = `./images/gadgets-${i}.jpg`;
        selectedImageVis.alt = `Portfolio gadgets ${i} by Pink Pepper Media`;
    });



    galleryGadgets.appendChild(image);
});

popupGadgets.addEventListener("click", () => {
    popupGadgets.style.transform = `translateY(-100%)`;
    popupGadgets.src = "";
    popupGadgets.alt = "";
})