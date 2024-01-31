const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const square3 = document.getElementById("square3");
const square4 = document.getElementById("square4");
const square5 = document.getElementById("square5");
const square6 = document.getElementById("square6");
const square7 = document.getElementById("square7");
const square8 = document.getElementById("square8");
const square9 = document.getElementById("square9");
const square10 = document.getElementById("square10");

function randomPosition() {
    return Math.floor(Math.random() * 90) + 1;
}

function randomBezier() {
    const points = [];
    for (let i = 0; i < 4; i++) {
        points.push(Math.random());
    }
    return `cubic-bezier(${points.join(", ")})`;
}

function drift(square) {
    const x = randomPosition() + "vw";
    const y = randomPosition() + "vh";
    const bezier = randomBezier();

    square.style.transitionTimingFunction = bezier;
    square.style.transform = `translate(${x}, ${y})`;

    setTimeout(() => {
        drift(square);
    }, 4000);
}

drift(square1);
drift(square2);
drift(square3);
drift(square4);
drift(square5);
drift(square6);
drift(square7);
drift(square8);
drift(square9);
drift(square10);

