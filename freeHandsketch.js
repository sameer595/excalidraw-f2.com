// const pencil = document.getElementById("pencil");
let isPencilActive = false;// intially the pencil is inactive.

const colorPicker = document.getElementById("color-picker");
colorPicker.addEventListener("change", () => {
    drawingColor = colorPicker.value;
  
});

const thickness = document.getElementById("myRange");
thickness.addEventListener("change", () => {
    drawThicknes = thickness.value;

    // console.log(drawThicknes);
});


function onPencilClick() {
    pencil.classList.toggle("active")
    isPencilActive = !isPencilActive; // enabling the drawing 
    // isPencilActive = !false = true
    if (isPencilActive) {
        canvas.style.cursor = "crosshair";
        canvas.addEventListener("mousedown", onMouseDown);
    }
    else {
        canvas.style.cursor = "auto";
        canvas.removeEventListener("mousedown", onMouseDown)
    }
}

pencil.addEventListener("click", onPencilClick);














function undoredo(){
    undoStack.push(canvas.toDataURL()); // Store the current state in undo stack
    redoStack.length = 0; // Clear the redo stack
}



const undoStack = [];
const redoStack = [];

const undoButton = document.getElementById("undoButton");
const redoButton = document.getElementById("redoButton");

undoButton.addEventListener("click", undo);
redoButton.addEventListener("click", redo);

function undo() {
    if (undoStack.length > 1) {
      const lastState = undoStack.pop();
      redoStack.push(lastState);

      const img = new Image();
      img.src = undoStack[undoStack.length - 1];
      img.onload = function () {
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.drawImage(img, 0, 0);
      }
    }
  }

  function redo() {
    if (redoStack.length > 0) {
      const lastState = redoStack.pop();
      undoStack.push(lastState);

      const img = new Image();
      img.src = lastState;
      img.onload = function () {
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.drawImage(img, 0, 0);
      }
    }
  }