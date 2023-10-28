
// let isRectangleActive = false;

// canvas.addEventListener("mousedown", (e) => {
//     isDrawing = true;
//     startX = e.clientX - canvas.getBoundingClientRect().left;
//     startY = e.clientY - canvas.getBoundingClientRect().top;
//     c.strokeStyle = drawingColor;
//     if (isDrawing) return;
//     // isDrawing = true;
//     // startX = e.clientX - canvas.getBoundingClientRect().left;
//     // startY = e.clientY - canvas.getBoundingClientRect().top;
   
   
// });

// canvas.addEventListener("mousemove", (e) => {
//     if (!isDrawing || !isRectangleActive) return;

//     const currentX = e.clientX - canvas.getBoundingClientRect().left;
//     const currentY = e.clientY - canvas.getBoundingClientRect().top;

//     c.clearRect(0, 0, canvas.width, canvas.height);

//     const width = currentX - startX;
//     const height = currentY - startY;

//     c.lineWidth=drawThicknes;
//     c.strokeRect(startX, startY, width, height);


//     // store in rack
//     undoredo();
 
// });



// const rect = document.getElementById("rectangle");
// function onRectangleClick() {
//     rect.classList.toggle("active")
//     isRectangleActive = !isRectangleActive; // enabling the drawing 
//     // isPencilActive = !false = true
//     if (isRectangleActive) {
//         canvas.style.cursor = "crosshair";
//         canvas.addEventListener("mousedown", onMouseDown);
//     }
//     else {
//         canvas.style.cursor = "auto";
//         canvas.removeEventListener("mousedown", onMouseDown)
//     }
// }


// rect.addEventListener("click", onRectangleClick);




 