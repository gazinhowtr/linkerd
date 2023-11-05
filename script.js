// script.js

const title = document.getElementById('colorful-title');
const rainbowColors = ["red", "orange", "yellow", "green", "indigo", "violet"];
let colorIndex = 0;

function changeTitleColor() {
    title.style.color = rainbowColors[colorIndex];
    colorIndex = (colorIndex + 1) % rainbowColors.length;
}

setInterval(changeTitleColor, 500); // Change color every 500 milliseconds (0.5 seconds)
