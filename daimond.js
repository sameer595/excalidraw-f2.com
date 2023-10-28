
// // let startX, startY;
// let isDaimondActive = false;
// const diamonds = [];
// canvas.addEventListener('mousedown', (e) => {
//     startX = e.clientX - canvas.getBoundingClientRect().left;
//     startY = e.clientY - canvas.getBoundingClientRect().top;
//     canvas.addEventListener('mousemove', drawDiamond);
// });

// canvas.addEventListener('mouseup', () => {
//     canvas.removeEventListener('mousemove', drawDiamond);
// });

// function drawDiamond(e) {
//     const endX = e.clientX - canvas.getBoundingClientRect().left;
//     const endY = e.clientY - canvas.getBoundingClientRect().top;

//     const centerX = (startX + endX) / 2;
//     const centerY = (startY + endY) / 2;

//     c.clearRect(0, 0, canvas.width, canvas.height);

//     c.beginPath();
//     c.moveTo(centerX, startY);
//     c.lineTo(endX, centerY);
//     c.lineTo(centerX, endY);
//     c.lineTo(startX, centerY);
//     c.closePath();

//     c.strokeStyle = drawingColor;
//     c.lineWidth = drawThicknes; 
//     c.stroke();

// // store in rack
// undoredo();

// }

// // let isDaimondActive = false;

// const daimond = document.getElementById("daimond");
// function onDaimondClick() {
//     daimond.classList.toggle("active")
//     isDaimondActive = !isDaimondActive; // enabling the drawing 
//     isDaimondActive = !false == true

//     if (isDaimondActive) {
//         canvas.style.cursor = "crosshair";
//         // canvas.addEventListener("mousedown", onMouseDown);
//     }
//     else {
//         canvas.style.cursor = "auto";
//         // canvas.removeEventListener("mousedown", onMouseDown)
//     }
// }


// daimond.addEventListener("click", onDaimondClick);
