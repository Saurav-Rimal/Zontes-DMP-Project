function revealToSpan() {
    document.querySelectorAll(".reveal").forEach(function(elem) {
        let spanParent = document.createElement("span");
        let spanChild = document.createElement("span");
        spanParent.classList.add("tparent");
        spanChild.classList.add("tchild");
        spanChild.innerHTML = elem.innerHTML;
        spanParent.appendChild(spanChild);
        elem.innerHTML = "";
        elem.appendChild(spanParent);
    });
}
revealToSpan();
function revealNewToSpan() {
    document.querySelectorAll(".revealNew").forEach(function(elem) {
        let spanParent = document.createElement("span");
        let spanChild = document.createElement("span");
        spanParent.classList.add("tparentNew");
        spanChild.classList.add("tchildNew");
        spanChild.innerHTML = elem.innerHTML;
        spanParent.appendChild(spanChild);
        elem.innerHTML = "";
        elem.appendChild(spanParent);
    });
}
revealNewToSpan();
// Normal text reveal from bottom to normal
const revealNewClass = document.querySelectorAll(".revealNew");
revealNewClass.forEach((element)=>{
    gsap.from(element, {
        y: "90%",
        opacity: 0,
        duration: 2,
        stagger: 2,
        scrollTrigger: {
            trigger: element,
            start: "top 75%",
            end: "top 30%",
            toggleActions: "play none none reverse"
        }
    });
});
var tl = gsap.timeline();
// Special first page loader animation normal pos to UP and dissapear
tl.to(".tparent .tchild", {
    y: "-100%",
    duration: 1,
    delay: 3
}).to(".index-logo", {
    onEntry: ()=>{
        document.getElementsByClassName("index-logo").playbackRate = 10;
    },
    y: "-150%",
    duration: 1,
    delay: 0
});
tl.to("#loader", {
    height: 0,
    duration: 1,
    delay: -1,
    stagger: -1,
    onLeave: ()=>{
        window.scrollTo(0, 0);
    }
});

//# sourceMappingURL=about-us.948028ba.js.map
