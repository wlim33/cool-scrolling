var totalBoxes = 100;
var saturation = 0.5;
var value = 0.95;
var goldenRatio = 1.61803398875;

var windowY  = window.pageYOffset || document.documentElement.scrollTop;



function makeBoxes(numberOfBoxes) {
    var hue = Math.random();

    for (var i = 0; i < numberOfBoxes; i++) {
        hue = (addBox(hue) + 1 / goldenRatio) % 1;
    }
}

function addBox(hue) {
    var newBlock = document.createElement("div");
    newBlock.className = "square";
    var rgb = hsvToRgb(hue, saturation, value);
    newBlock.style.backgroundColor = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";

    addPos(newBlock); //to see when the box is on screen

    document.getElementById("center").appendChild(newBlock);

    return hue;
}

//function elementIsOnscreen(element) {}


function addPos(element) {
    element.innerHTML = getPos(element);
}

//NEED TO FIX
function getPos(element) {
    var yPos = 0;
    while (element) {
        if (element.tagName == "BODY") {
            var y = element.scrollTop || document.documentElement.scrollTop;
            yPos = yPos + (element.offsetTop - y + el.clientTop);
        } else {
            yPos = yPos + (element.offsetTop - element.scrollTop + element.clientTop);
        }

        element = element.offsetParent;
    }
    return yPos;
}

function hsvToRgb(h, s, v) {
    var r, g, b;
    var h0 = h * 6;
    var i = Math.floor(h0);
    var f = h0 - i
    var p = v * (1 - s)
    var q = v * (1 - f * s)
    var t = v * (1 - (1 - f) * s)
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


window.onload = makeBoxes(totalBoxes);







