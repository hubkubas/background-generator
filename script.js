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

/// these two functions return numbers from 0 - 255
function randomNumLeft(min, max) {
    var leftColor = [];
    for (var i = 0; i < 3; i++) {
        leftColor.push(Math.floor(Math.random() * max) + min);
    }
    return leftColor;
};


function randomNumRight(min, max) {
    var rightColor = [];
    for (var i = 0; i < 3; i++) {
        rightColor.push(Math.floor(Math.random() * max) + min);
    }
    return rightColor
};

function display() {

    function right(min, max) {
        var rightColor = [];
        for (var i = 0; i < 3; i++) {
            rightColor.push(Math.floor(Math.random() * max) + min);
        }
        return rightColor;
    };
    var firstRight = right(0, 256)[0];
    var secondRight = right(0, 256)[1];
    var thirdRight = right(0, 256)[2];
    var randomRight = "rgb(" + firstRight + ", " + secondRight + ", " + thirdRight +")";
    console.log(randomRight);

    function left(min, max) {
        var leftColor = [];
        for (var i = 0; i < 3; i++) {
            leftColor.push(Math.floor(Math.random() * max) + min);
        }
        return leftColor;
    };
    var firstLeft = left(0, 256)[0];
    var secondLeft = left(0, 256)[1];
    var thirdLeft = left(0, 256)[2];
    var randomLeft = "rgb(" + firstLeft + ", " + secondLeft + ", " + thirdLeft +")";
    console.log(randomLeft);

    body.style.background =
    "linear-gradient(to right, "
    + randomRight
    + ", "
    + randomLeft
    + ")";

css.textContent = body.style.background + ";";
}


// function randomColors(min,max){
//     randomNumLeft();
//     randomNumRight();
// }


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", display);

// button.addEventListener("click", test);

//here I console log the results which are 3 x numbers from 0 - 255
//  console.log(randomNumLeft(0,256));
//  console.log(randomNumRight(0,256));

