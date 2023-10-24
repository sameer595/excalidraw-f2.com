// code for eraser

// const canvas = document.getElementById("canvas");
// const c = canvas.getContext("2d");

// Flag to indicate whether the eraser is active
let isErasing = false;

canvas.addEventListener("mousedown", (e) => {
    isErasing = true;
    erase(e);
});

canvas.addEventListener("mousemove", (e) => {
    if (isErasing) {
        erase(e);
    }
});

canvas.addEventListener("mouseup", () => {
    isErasing = false;
});

function erase(e) {
    const x = e.clientX - canvas.getBoundingClientRect().left;
    const y = e.clientY - canvas.getBoundingClientRect().top;
    const eraserSize = 10; // Adjust the size of the eraser as needed

    // Clear a rectangular area using clearRect to simulate erasing
    c.clearRect(x - eraserSize / 2, y - eraserSize / 2, eraserSize, eraserSize);
}

const eraser = document.getElementById("eraser");

let iseraserActive = false;

function onEraserClick() {
    circleButton.classList.toggle("active");
    iseraserActive = !iseraserActive;
    if (iseraserActive) {
        canvas.style.cursor = "crosshair";
    } else {
        canvas.style.cursor = "auto";
    }
}

circleButton.addEventListener("click", onEraserClick);