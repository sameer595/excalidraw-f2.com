// code for eraser

let isErasing = false;
canvas.addEventListener("mousemove", (e) => {
    if (isErasing) {
        erase(e);
    } else if (isDrawing) {
        const endX = e.clientX - canvas.getBoundingClientRect().left;
        const endY = e.clientY - canvas.getBoundingClientRect().top;
    }
});


function erase(e) {
    const x = e.clientX - canvas.getBoundingClientRect().left;
    const y = e.clientY - canvas.getBoundingClientRect().top;
    const eraserSize = 20; // Adjust the eraser size as needed
    c.clearRect(x - eraserSize / 2, y - eraserSize / 2, eraserSize, eraserSize);
}

const eraserButton = document.getElementById("eraserButton");

eraserButton.addEventListener("click", () => {
    eraserButton.classList.toggle("active");
    isErasing = !isErasing;
    canvas.style.cursor = isErasing ? "crosshair" : "auto";
});

