
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const c = canvas.getContext("2d");

let drawingColor = "black";
let previousPosition = null;
let drawThicknes = 2;

// function onMouseDown(e) {
//     previousPosition = [ e.clientX , e.clientY];
//     c.strokeStyle = drawingColor;
//     c.lineWidth = drawThicknes; 
//     canvas.addEventListener("mousemove", onMouseMove);
//     canvas.addEventListener("mouseup", onMouseUp); 
// }

// function onMouseMove(e){ 
//     // for the first time inside this  
//     let currentPosition = [ e.clientX , e.clientY ];
//     // draw line from previous position to current position ;
//     c.beginPath();
//     c.moveTo(...previousPosition);
//     c.lineTo(...currentPosition);
//     c.stroke();
//     c.closePath();
//     previousPosition = currentPosition ;

//     // store element in stack 
//     undoredo();
// }

// function onMouseUp(e){ 
//     canvas.removeEventListener("mousemove", onMouseMove);
// }




const actionButtons = document.querySelectorAll(".middle-bar > .btn");
console.log(actionButtons);

const selectItem = {
    strokewidth: 2,
    strokestyle: "red"
};
const actions = {
    rectangle: false,
    daimond: false,
    circle: false,
    pencil: false,
    eraser: false,
    line: false
}
const selectItems = document.getElementsByClassName("selectItem");

function toggleMenu() {
    for (const item of selectItems) {
        item.classList.toggle("hide");
    }
}

function onInput(element) {
    const newValue = element.value;
    if (element.name === "strokewidth")
        selectItem[element.name] = parseInt(newValue);
    else
        selectItem[element.name] = newValue;

    console.log(selectItem);
}

function onActionClick(element) {
    const actionName = element.id;
    actionButtons.forEach(btn => {
        // for the remaining three options if active class present remove that clas.
        if (btn.classList.contains("active") && btn.id !== actionName) {
            btn.classList.remove("active");
        }
    })
    element.classList.toggle("active");

    actionButtons.forEach(btn => {
        const isActive = btn.classList.contains("active")
        // {freehand: "active", rectangle: '', circle: '', eraser: ''}
        actions[btn.id] = isActive;
    })
    console.log(actions);
}

// // save img code 

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


const card123 = document.querySelector(".card123");
function toggleMenu1() {
    card123.classList.toggle("hide");
}

// const excali123 = document.querySelector(".lapav");
// const changbutton = document.getElementsByClassName(".user-btn");
// function toggleMenu2() {
    
//     excali123.classList.toggle("hide");
//     changbutton.innerHTML ==="START";
    

// }

const excali123 = document.querySelector(".lapav");
const changbutton = document.querySelectorAll(".user-btn");

function toggleMenu2() {
    excali123.classList.toggle("hide");
    // Check if the text content of the first element with the class "user-btn" is "START"
    if (changbutton[0].textContent === "Home") {
        // If it's "START", change it to "STOP"
        changbutton[0].textContent = "Clean";
    } else {
        // If it's not "START", change it back to "START"
        changbutton[0].textContent = "Home";
    }
}

// Add a click event listener to the button
changbutton[0].addEventListener("click", toggleMenu2);




// clear canvas code - 1
function clearCanvas() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    history.splice(0, history.length);
}


function saveCanvasState() {
    historyIndex++;
    if (historyIndex < history.length) {
      history.length = historyIndex;
    }
    history.push(c.getImageData(0, 0, canvas.width, canvas.height));
  }
  
  function undo() {
    if (historyIndex > 0) {
      historyIndex--;
      c.putImageData(history[historyIndex], 0, 0);
    }
  }
  
  function redo() {
    if (historyIndex < history.length - 1) {
      historyIndex++;
      c.putImageData(history[historyIndex], 0, 0);
    }
  }
  
  canvas.addEventListener('mousedown', () => {
    saveCanvasState();
  });
  
  // Event listeners for undo and redo buttons
  document.getElementById('undoButton').addEventListener('click', undo);
  document.getElementById('redoButton').addEventListener('click', redo);
