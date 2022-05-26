var state = 'quiz';



startButton.onclick = function () {
    displayBox.classList.add("activeDisplayBox");
}

quitButton.onclick = function () {
    displayBox.classList.remove("activeDisplayBox");
}

function init() {
    displayState();
}







init();
