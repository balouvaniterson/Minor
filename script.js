/* Keyboard */

var body = document.querySelector("body");

window.addEventListener("keydown", toggle);

function toggle(event) {
    if (event.keyCode === 66) {
        body.classList.toggle("blauw");
    }

    if (event.keyCode === 71) {
        body.classList.toggle("geel");
    }

    if (event.keyCode === 32) {
        body.classList.toggle("donker");
    }

    if (event.keyCode === 80) {
        body.classList.toggle("party");
    }
}

/* Audio */

var audio = document.getElementById("music");
audio.volume = 0.2;
