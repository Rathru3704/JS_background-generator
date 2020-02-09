var gInfo = document.querySelector("#gInfo");
var img = document.querySelector(".img");
var gColor1 = document.querySelector("#gColor1");
var gColor2 = document.querySelector("#gColor2");

function setGradientValue() {
    img.style.background = "linear-gradient(" + gColor1.value + ", " + gColor2.value + ")";
    gInfo.textContent = img.style.background;
}

gColor1.addEventListener("input", setGradientValue);
gColor2.addEventListener("input", setGradientValue);