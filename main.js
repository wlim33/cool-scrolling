var totalBoxes = 100;

function makeBoxes(numberOfBoxes) {
    var goldenRatioConjugate =  0.618033988749895;
    var h = Math.random();

    for (var i = 0; i < numberOfBoxes; i++) {
        var newBlock = document.createElement("div");
        newBlock.className = "square";
        var rgb = hsvToRgb(h, 0.5, 0.95);
        var rgbString = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
        h = (h + goldenRatioConjugate) % 1;
        newBlock.style.backgroundColor = rgbString;

        document.body.appendChild(newBlock);
    }

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