window.onscroll = function() {getElements("square");};



function getElements(className) {
    var boxes = document.getElementsByClassName(className);

    for (var i = 0; i < boxes.length; i++) {
        checkVisible(boxes[i]);
    }
}

function checkVisible(element) {
    if (isVisible(element)) {
        appearingAnimation(element);
    } else {
        disappearingAnimation(element);
    }

}

function isVisible(element) {
    var screenTop = Math.round(document.body.scrollTop);
    var screenBottom = screenTop + window.innerHeight;

    var elementTop = getElementY(element);
    var elementBottom = elementTop + Math.round(element.getBoundingClientRect().height);
    var elementTopFifth = elementTop + Math.round(element.getBoundingClientRect().height * 0.25);
    var elementBottomFifth = elementTop + Math.round(element.getBoundingClientRect().height * 0.75);
    return !(elementBottomFifth < screenTop || elementTopFifth > screenBottom);
}

function getElementY(element) {
    var box = element.getBoundingClientRect();
    var body = document.body;
    var scrollTop = window.pageYOffset || body.scrollTop;
    var clientTop = body.clientTop || 0;
    var top = box.top + scrollTop - clientTop;
    return Math.round(top);
}


function appearingAnimation(element) {
    element.style.opacity = 1.0;
}

function disappearingAnimation(element) {
    element.style.opacity = 0.0;
}