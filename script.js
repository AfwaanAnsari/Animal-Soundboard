var soundButtons = document.querySelectorAll(".sound");

for (var i = 0; i < soundButtons.length; i++) {
    soundButtons[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key.toUpperCase());
    buttonAnimation(event.key.toUpperCase());
});

function makeSound(key) {
    switch (key) {
        case "A":
            var ape = new Audio("sounds/ape.mp3");
            ape.play();
            break;

        case "B":
            var buffalo = new Audio("sounds/buffalo.mp3");
            buffalo.play();
            break;

        case "C":
            var cat = new Audio("sounds/cat.mp3");
            cat.play();
            break;

        case "D":
            var duck = new Audio("sounds/duck.mp3");
            duck.play();
            break;

        case "E":
            var elephant = new Audio("sounds/elephant.mp3");
            elephant.play();
            break;

        case "F":
            var frog = new Audio("sounds/frog.mp3");
            frog.play();
            break;

        case "G":
            var goat = new Audio("sounds/goat.mp3");
            goat.play();
            break;

        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey.toLowerCase());

    if (activeButton) {
        activeButton.classList.add("pressed");

        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
