var pageLength = 25;
var saturation = 0.5;
var value = 0.95;
var goldenRatio = 1.61803398875;


function makeBoxes(numberOfBoxes) {
    var hue = Math.random();
    for (var i = 0; i < 4; i++) {
        var j = 0;
        while (j < numberOfBoxes) {
            var boxSize = 1;
            var newBlock = document.createElement("div");
            newBlock.className +=" " + "square";

            //colors the box a square
            var rgb = hsvToRgb(hue, saturation, value);
            newBlock.style.backgroundColor = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
            if ((rgb[0] % 3 === 0 && j + 2 < numberOfBoxes) || j + 2 == numberOfBoxes) {
                newBlock.style.height = "34.6vw";
                boxSize = 2;
            } else if (rgb[0] % 3 === 1 && j + 3 < numberOfBoxes|| j + 3 == numberOfBoxes) {
                newBlock.style.height = "53.2vw";
                boxSize = 3;
            }
            document.getElementById("partition" + i).appendChild(newBlock);

            hue = (hue + 1 / goldenRatio) % 1;
            j = j + boxSize;
        }
    }

}

function addAnimationTo(square) {
    square.addEventListener("click",  function() {
        this.style.animationName = "disappear";

    });
    square.addEventListener("webkitAnimationEnd", function() {this.style.animationName = "";});
}


function hsvToRgb(h, s, v) {
    var r, g, b;
    var h0 = h * 6;
    var i = Math.floor(h0);
    var f = h0 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var n = i % 6;

    if (i == 0) {
        r = v;
        g = t;
        b = p;
    } else if (i == 1) {
        r = q;
        g = v;
        b = p;
    } else if (i == 2) {
        r = p;
        g = v;
        b = t;
    } else if (i == 3) {
        r = p;
        g = q;
        b = v;
    } else if (i == 4) {
        r = t;
        g = p;
        b = v;
    } else if (i == 5) {
        r = v;
        g = p;
        b = q;
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}


function onScreenChanged(element) {
    var event = document.createEvent("Event");

    element.dispatchEvent(event);
}

function elementIsOnScreen(element) {
    var rect = element.getBoundingClientRect();
    var viewHeight = Math.max(document.body.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}


window.onload = function() {
    makeBoxes(pageLength);
    getElements("square");
};
