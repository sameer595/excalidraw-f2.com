const pencil = document.getElementById("pencil");
let isPencilActive = false ;// intially the pencil is inactive.

const colorPicker = document.getElementById("color-picker");


colorPicker.addEventListener("change", () => {
    drawingColor = colorPicker.value ;
    console.log(drawingColor);
});

function onPencilClick() {
    pencil.classList.toggle("active")
    isPencilActive = !isPencilActive ; // enabling the drawing 
    // isPencilActive = !false = true
    if(isPencilActive) {
        canvas.style.cursor = "crosshair";
        canvas.addEventListener("mousedown", onMouseDown); 
    }
    else {
        canvas.style.cursor = "auto";
        canvas.removeEventListener("mousedown", onMouseDown)
    }
}

pencil.addEventListener("click", onPencilClick) ;



// code for circle
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

// code for eraser

// let isDrawing = false;
        let isErasing = false;
        // let startX, startY;
        // let drawingColor = "#000000"; // Default drawing color

canvas.addEventListener("mousemove", (e) => {
    if (isErasing) {
        erase(e);
    } else if (isDrawing ) {
        const endX = e.clientX - canvas.getBoundingClientRect().left;
        const endY = e.clientY - canvas.getBoundingClientRect().top;
    //     if (isPencilActive) {
    //         drawLine(startX, startY, endX, endY);
    //     }
    //     if (iscircleActive) {
    //         const radius = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
    //         clearCanvas();
    //         drawCircle(startX, startY, radius);
    //     }
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
            // iscircleActive = false;
            // isPencilActive = false;
            canvas.style.cursor = isErasing ? "crosshair" : "auto";
        });





