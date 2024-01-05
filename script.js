const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const square3 = document.getElementById("square3");
const square4 = document.getElementById("square4");

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

