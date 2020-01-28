var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("enter");

function setGradient() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background + ";";
}

// this function generates random background with the click
function displayRandomBackground() {
// this part generates right color
    var rR = Math.floor(Math.random() * 256);
    var gR = Math.floor(Math.random() * 256);
    var bR = Math.floor(Math.random() * 256);
    var randomRight = "rgb(" + rR + ", " + gR + ", " + bR + ")";

    // this part generates left color
    var rL = Math.floor(Math.random() * 256);
    var gL = Math.floor(Math.random() * 256);
    var bL = Math.floor(Math.random() * 256);
    var randomLeft = "rgb(" + rL + ", " + gL + ", " + bR + ")";


    body.style.background =
        "linear-gradient(to right, "
        + randomRight
        + ", "
        + randomLeft
        + ")";

    css.textContent = body.style.background + ";";
}


    // this part displays current colors on-load
function displayInitialGradient() {

    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background + ";";
}



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", displayRandomBackground);
