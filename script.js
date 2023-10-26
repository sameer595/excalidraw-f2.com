
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const card123 = document.querySelector(".card123");

    menuBtn.addEventListener("click", function () {
        if (card123.style.display === "none" || card123.style.display === "") {
            card123.style.display = "block"; // Show the card123 element
        } 
        else {
            card123.style.display = "none"; // Hide the card123 element
        }
    });
});   
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight ;


const c = canvas.getContext("2d");

let drawingColor = "red";
let previousPosition = null ;
let drawThicknes = 2;

function onMouseDown(e) {
    previousPosition = [ e.clientX , e.clientY];
    c.strokeStyle = drawingColor;
    c.lineWidth = drawThicknes; 
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp); 
}

function onMouseMove(e){ 
    // for the first time inside this  
    let currentPosition = [ e.clientX , e.clientY ];
    // draw line from previous position to current position ;
    c.beginPath();
    c.moveTo(...previousPosition);
    c.lineTo(...currentPosition);
    c.stroke();
    c.closePath();
    previousPosition = currentPosition ;

    // store element in stack 
    undoredo();
}

function onMouseUp(e){ 
    canvas.removeEventListener("mousemove", onMouseMove);
}
   



const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", saveCanvasImage);

function saveCanvasImage() {
  const dataURL = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = dataURL;
  a.download = "canvas_drawing.png";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}