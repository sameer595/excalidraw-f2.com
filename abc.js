// let intialPosition = null;

// // this arrays will hold the image objects after every mouse up.
// const history = [];
// let historyIndex = -1;

// function onMouseDown(e) {
//     if (!(actions.circle || actions.rectangle || actions.eraser || actions.pencil || actions.line || actions.daimond)) {
//         return;
//     }

//     console.log("inside");
//     intialPosition = { x: e.clientX, y: e.clientY };
//     startIndex = history.length - 1;
//     c.strokeStyle = selectItem.strokestyle;
//     c.lineWidth = selectItem.strokewidth;

//     canvas.addEventListener("mousemove", onMouseMove);
//     canvas.addEventListener("mouseup", onMouseUp);
// }

// function onMouseMove(e) {
//     const currentPosition = { x: e.clientX, y: e.clientY };
//     if (actions.pencil) {
//         drawFreeHand(currentPosition);
//     }
//     else if (actions.eraser) {
//         handleErase(currentPosition);
//     }
//     else if (actions.circle) {
//         resetToOriginalImage();
//         drawCircle(currentPosition);
//     }
//     else if (actions.rectangle) {
//         resetToOriginalImage();
//         drawRectangle(currentPosition);
//     }
//     else if (actions.line) {
//         resetToOriginalImage();
//         drawLine(currentPosition);
//     }
//     else if (actions.daimond) {
//         resetToOriginalImage();
//         drawDiamond(currentPosition);
//     }
// }

// function onMouseUp() {
//     // cleanup
//     history.push(c.getImageData(0, 0, canvas.width, canvas.height));
//     historyIndex++;
//     canvas.removeEventListener("mousemove", onMouseMove);
//     canvas.removeEventListener("mouseup", onMouseUp);
// }

// canvas.addEventListener("mousedown", onMouseDown);

// function resetToOriginalImage() {
//     if (startIndex !== -1) {
//         // we have some drawings before we start the rectangle drawing.
//         c.putImageData(history[startIndex], 0, 0);
//     }
//     else {
//         // if i do not have drawings before we start rectangle drawing.
//         c.clearRect(0, 0, canvas.width, canvas.height);
//     }
// }

// function drawFreeHand(currentPosition) {
//     c.beginPath();
//     c.moveTo(intialPosition.x, intialPosition.y);
//     c.lineTo(currentPosition.x, currentPosition.y);
//     c.lineCap = "round";
//     c.lineJoin = "round";
//     c.stroke();
//     c.closePath();
//     intialPosition = currentPosition;

// }

// function handleErase(currentPosition) {
//     c.clearRect(currentPosition.x, currentPosition.y, 10, 10);
// }

// function drawCircle(currentPosition) {
//     c.beginPath();
//     const radius = Math.sqrt(
//         (currentPosition.x - intialPosition.x) ** 2 +
//         (currentPosition.y - intialPosition.y) ** 2
//     );

//     c.arc(intialPosition.x, intialPosition.y, radius, 0, 2 * Math.PI, true);
//     c.stroke();



    
// }

// function drawRectangle(currentPosition) {
//     c.beginPath();
//     // draw rectangle
//     let width = currentPosition.x - intialPosition.x;
//     let height = currentPosition.y - intialPosition.y;
//     c.strokeRect(intialPosition.x, intialPosition.y, width, height);

 
// }

// function drawLine(currentPosition) {
//     c.beginPath();
//     c.moveTo(intialPosition.x, intialPosition.y);
//     c.lineTo(currentPosition.x, currentPosition.y);
//     c.stroke();
 
// }

// function drawDiamond(currentPosition) {
//     c.beginPath();
//     const x1 = (intialPosition.x + currentPosition.x) / 2;
//     const y1 = intialPosition.y;
//     const x2 = currentPosition.x;
//     const y2 = (intialPosition.y + currentPosition.y) / 2;
//     const x3 = x1;
//     const y3 = currentPosition.y;
//     const x4 = intialPosition.x;
//     const y4 = y2;

//     c.moveTo(x1, y1);
//     c.lineTo(x2, y2);
//     c.lineTo(x3, y3);
//     c.lineTo(x4, y4);
//     c.closePath();

//     c.stroke();
// }


// // backgroundColor set code 
// function changeCanvasBackgroundColor(element) {
//     canvas.style.backgroundColor = element.value;
// }



let initialPosition = { x: null, y: null };
const history = [];
let historyIndex = -1;

function onMouseDown(e) {
    if (!(actions.circle || actions.rectangle || actions.eraser || actions.pencil || actions.line || actions.daimond)) {
        return;
    }

    initialPosition = getMousePosition(e);
    startIndex = history.length - 1;
    c.strokeStyle = selectItem.strokestyle;
    c.lineWidth = selectItem.strokewidth;

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
}

function onTouchStart(e) {
    if (!(actions.circle || actions.rectangle || actions.eraser || actions.pencil || actions.line || actions.daimond)) {
        return;
    }

    e.preventDefault(); // Prevent the default touch event behavior
    initialPosition = getTouchPosition(e);
    startIndex = history.length - 1;
    c.strokeStyle = selectItem.strokestyle;
    c.lineWidth = selectItem.strokewidth;

    canvas.addEventListener("touchmove", onTouchMove);
    canvas.addEventListener("touchend", onTouchEnd);
}

function getMousePosition(e) {
    return { x: e.clientX, y: e.clientY };
}

function getTouchPosition(e) {
    const touch = e.touches[0];
    return { x: touch.clientX, y: touch.clientY };
}

function onMouseMove(e) {
    const currentPosition = getMousePosition(e);
    handleDrawing(currentPosition);
}

function onTouchMove(e) {
    const currentPosition = getTouchPosition(e);
    handleDrawing(currentPosition);
}

function handleDrawing(currentPosition) {
    if (actions.pencil) {
        drawFreeHand(currentPosition);
    } else if (actions.eraser) {
        handleErase(currentPosition);
    } else if (actions.circle) {
        resetToOriginalImage();
        drawCircle(currentPosition);
    } else if (actions.rectangle) {
        resetToOriginalImage();
        drawRectangle(currentPosition);
    } else if (actions.line) {
        resetToOriginalImage();
        drawLine(currentPosition);
    } else if (actions.daimond) {
        resetToOriginalImage();
        drawDiamond(currentPosition);
    }
}

function onMouseUp() {
    history.push(c.getImageData(0, 0, canvas.width, canvas.height));
    historyIndex++;
    canvas.removeEventListener("mousemove", onMouseMove);
    canvas.removeEventListener("mouseup", onMouseUp);
}

function onTouchEnd() {
    history.push(c.getImageData(0, 0, canvas.width, canvas.height));
    historyIndex++;
    canvas.removeEventListener("touchmove", onTouchMove);
    canvas.removeEventListener("touchend", onTouchEnd);
}

canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("touchstart", onTouchStart);

function resetToOriginalImage() {
    if (startIndex !== -1) {
        c.putImageData(history[startIndex], 0, 0);
    } else {
        c.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function drawFreeHand(currentPosition) {
    c.beginPath();
    c.moveTo(initialPosition.x, initialPosition.y);
    c.lineTo(currentPosition.x, currentPosition.y);
    c.lineCap = "round";
    c.lineJoin = "round";
    c.stroke();
    initialPosition = currentPosition;
}

function handleErase(currentPosition) {
    c.clearRect(currentPosition.x, currentPosition.y, 10, 10);
}

function drawCircle(currentPosition) {
    c.beginPath();
    const radius = Math.sqrt(
        (currentPosition.x - initialPosition.x) ** 2 +
        (currentPosition.y - initialPosition.y) ** 2
    );

    c.arc(initialPosition.x, initialPosition.y, radius, 0, 2 * Math.PI, true);
    c.stroke();
}

function drawRectangle(currentPosition) {
    c.beginPath();
    // draw rectangle
    let width = currentPosition.x - initialPosition.x;
    let height = currentPosition.y - initialPosition.y;
    c.strokeRect(initialPosition.x, initialPosition.y, width, height);
}

function drawLine(currentPosition) {
    c.beginPath();
    c.moveTo(initialPosition.x, initialPosition.y);
    c.lineTo(currentPosition.x, currentPosition.y);
    c.stroke();
}

function drawDiamond(currentPosition) {
    c.beginPath();
    const x1 = (initialPosition.x + currentPosition.x) / 2;
    const y1 = initialPosition.y;
    const x2 = currentPosition.x;
    const y2 = (initialPosition.y + currentPosition.y) / 2;
    const x3 = x1;
    const y3 = currentPosition.y;
    const x4 = initialPosition.x;
    const y4 = y2;

    c.moveTo(x1, y1);
    c.lineTo(x2, y2);
    c.lineTo(x3, y3);
    c.lineTo(x4, y4);
    c.closePath();
    c.stroke();
}

// Background color set code
function changeCanvasBackgroundColor(element) {
    canvas.style.backgroundColor = element.value;
}
