// // code for circle
let isDrawing = false;
let startX, startY;

canvas.addEventListener("mousedown", (e) => {
    if (!iscircleActive) return;
    isDrawing = true;
    startX = e.clientX - canvas.getBoundingClientRect().left;
    startY = e.clientY - canvas.getBoundingClientRect().top;
    c.strokeStyle = drawingColor;
});

canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing || !iscircleActive) return;

    const endX = e.clientX - canvas.getBoundingClientRect().left;
    const endY = e.clientY - canvas.getBoundingClientRect().top;
    const radius = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);

    c.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(startX, startY, radius);
});

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
});

function drawCircle(x, y, radius) {
    c.beginPath();
    c.arc(x, y, radius, 0, 2 * Math.PI);
    c.stroke();
    c.closePath();
    undoredo();
}

const circleButton = document.getElementById("circleButton");

let iscircleActive = false;

function onCircleClick() {
    circleButton.classList.toggle("active");
    iscircleActive = !iscircleActive;
    if (iscircleActive) {
        canvas.style.cursor = "crosshair";
    } else {
        canvas.style.cursor = "auto";
    }
}

circleButton.addEventListener("click", onCircleClick);

