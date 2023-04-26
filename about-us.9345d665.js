var viewers360 = document.querySelectorAll("#R-Alum-360,#O-Alum-360,#N-Alum-360,#R-Spok-360,#B-Spok-360,#O-Spok-360,#N-Spok-360");
var currentOptionTxt = document.querySelectorAll(".NeonTxt,.OrangeTxt, .BlueTxt,.RedTxt");
var wheelOptionTxt = document.querySelectorAll(".SpokTxt, .AlloyTxt");
var colorButtons = document.querySelectorAll(".neonOption,.orangeOption,.blueOption,.redOption,.neonOption,.orangeOption, .redOption");
function changeSpok(color = "neon") {
    div = document.querySelector(".cloudimage-360");
    var colorLetter = color[0].toUpperCase();
    div.dataset.folder = `images/360/${colorLetter}-Spok/`;
    div.dataset.filenameX = `${colorLetter}-Spok-{index}.webp`;
    var newId = colorLetter + "-Spok-360";
    div.id = newId;
    window.CI360.update();
    makeActive(newId);
    changeTextContent(color, "Spok");
}
function changeAlloy(color = "Neon") {
    div = document.querySelector(".cloudimage-360");
    var colorLetter = color[0].toUpperCase();
    div.dataset.folder = `images/360/${colorLetter}-Alum/`;
    div.dataset.filenameX = `${colorLetter}-Alum-{index}.webp`;
    var newId = colorLetter + "-Alum-360";
    div.id = newId;
    window.CI360.update();
    makeActive(newId);
    changeTextContent(color, "Alloy");
}
function makeActive(id) {
    var el = document.querySelector(".option-selector#" + id);
    var currEl = document.querySelector(".option-selector.activeBtn");
    console.log(id, el, currEl);
    if (el != currEl) {
        currEl.classList.remove("activeBtn");
        el.classList.add("activeBtn");
    }
}
function changeTextContent(color, type) {
    colorTxtElem = document.querySelector(".colorTxt");
    colorTxtElem.textContent = color;
    tyreTypeTextElem = document.querySelector(".tyreTypeTxt");
    tyreTypeTextElem.textContent = "with " + type + " wheels";
}
// // GSAP Codes
window.onload = (event)=>{
    window.scrollTo(0, 0);
};
// Navbar Start
var tl = gsap.timeline({
    paused: "true"
});
tl.to(".menu", {
    duration: 1,
    x: "0%",
    ease: Expo.easeInOut
});
function toggle() {
    tl.play();
}
function toggleClose() {
    tl.reverse();
}
//Navbar end
//Single Bike Hero Parallax Start
const parallax_el = document.querySelectorAll(".parallax");
const main = document.querySelector(".single-bike>.hero");
let xValue = 0, yValue = 0;
window.addEventListener("mousemove", (e)=>{
    xValue = e.clientX - window.innerHeight / 2;
    yValue = e.clientY - window.innerHeight / 2;
    parallax_el.forEach((el)=>{
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
    });
});
//Single Bike Hero Parallax End
// change the background color to white and the text color to black
gsap.timeline({
    scrollTrigger: {
        trigger: "#liquidengine",
        start: "top 90%",
        end: "top 50%",
        scrub: "1"
    }
}).to(".bgToBlack", {
    backgroundColor: "rgba(20, 20, 20, 1)"
});
gsap.timeline({
    scrollTrigger: {
        trigger: ".t-glow",
        start: "top 100%",
        end: "bottom 70%",
        scrub: "1"
    }
}).fromTo(".glow-gradient", {
    color: "#202020",
    textShadow: "none",
    ease: Expo.easeInOut
}, {
    color: "#fff",
    textShadow: "0 0 10px #ffffff",
    ease: Expo.easeInOut
});
let features = gsap.utils.toArray(".half-feature-viewer");
var tl2 = gsap.timeline();
tl2.to(features, {
    xPercent: -100 * (features.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".features",
        start: "top 9.5%",
        pin: ".features-wrapper",
        pinSpacing: true,
        scrub: 1,
        delay: 1,
        end: "+=9000"
    }
});

//# sourceMappingURL=about-us.9345d665.js.map
