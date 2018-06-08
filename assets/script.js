var counter = 0;

function animateElement(animationClass, element) {
    setTimeout(function() {
        element.classList.add(animationClass);
        setTimeout(function() {
            element.classList.remove(animationClass);
            counter--;
        }, 1000);
    }, counter * 1000);
    counter++;
}

function animateBubble(element) {
    return animateElement('animate-bubble', element);
}

function animateCapture(element) {
    return animateElement('animate-capture', element);
}

document.getElementById("form1").addEventListener("click", function(){
    animateCapture(this);
}, true);

document.getElementById("div1").addEventListener("click", function(){
    animateCapture(this);
}, true);

document.getElementById("p1").addEventListener("click", function(){
    animateCapture(this);
}, true);

document.getElementById("p1").addEventListener("click", function(){
    animateBubble(this);
});

document.getElementById("div1").addEventListener("click", function(){
    animateBubble(this);
});

document.getElementById("form1").addEventListener("click", function(){
    animateBubble(this);
});
