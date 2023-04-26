const canvas = document.querySelector("#keyanimation");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
});
function files(index) {
    // list of files inside img dir from key00001 -> key 00151
    return `./images/Key/Key animation_` + index.toString().padStart(5, "0") + `.png`;
}
const frameCount = 151;
const images = [];
const imageSeq = {
    frame: 0
};
for(let i = 0; i < frameCount; i++){
    const img = new Image();
    img.src = files(i);
    images.push(img);
}
gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        trigger: ".page",
        scrub: 0.5,
        start: "top 30%",
        end: "100%"
    },
    onUpdate: render
});
images[0].onload = render;
function render() {
    scaleImage(images[imageSeq.frame], context);
}
function scaleImage(image, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / image.width;
    var vRatio = canvas.height / image.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - image.width * ratio) / 2;
    var centerShift_y = (canvas.height - image.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, image.width, image.height, centerShift_x, centerShift_y, image.width * ratio, image.height * ratio);
}

//# sourceMappingURL=index.383499a8.js.map
