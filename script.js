let mouseDown = false;

let width = 16;
let height = 16;

let gridSquare = document.createElement("div");
let mainContainer = document.querySelector(".main-container");

let gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");

gridContainer.style.backgroundColor = "gray";
gridContainer.style.display = "grid";
gridContainer.style.gridTemplateColumns = `repeat(${width}, auto)`;
gridContainer.style.gridTemplateRows = `repeat(${height}, auto)`;

gridSquare.style.backgroundColor = "black";
gridSquare.style.width = "15px";

mainContainer.appendChild(gridContainer);

let totalPixle = width * height;

function toggleMouse() {
    mouseDown = !mouseDown;
}

function colorSquare(e, target) {
    if(e.type === "mousedown"){
        toggleMouse(true);
    }

    // if(e.type === "mouseup"){
    //     toggleMouse(false);
    // }

    if(mouseDown)
    {
        e.stopPropagation();
        console.log(e.target);
        e.target.style.backgroundColor = "white"
    }

}

function createGrid(){

}

function changePixelSize(){

}

function createGridAndPixles(){
    for (let i = 0; i < totalPixle; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.addEventListener("mousedown", colorSquare);
        gridSquare.addEventListener("mouseover", colorSquare);
        gridSquare.addEventListener("mouseup", colorSquare);

        gridSquare.style.backgroundColor = "black";
        gridSquare.style.width = "100%";
        gridContainer.appendChild(gridSquare);
    }
}

createGridAndPixles();






