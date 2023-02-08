let mouseDown = false;

let width = 16;
let height = 16;

let gridContainer = document.createElement("div");
let gridSquare = document.createElement("div");
let mainContainer = document.querySelector(".main-container");


gridContainer.classList.add("grid-container");


gridContainer.style.backgroundColor = "gray";
gridContainer.style.display = "grid";
gridContainer.style.gridTemplateColumns = `repeat(${width}, auto)`;
gridContainer.style.gridTemplateRows = `repeat(${height}, auto)`;

gridSquare.style.backgroundColor = "black";
// gridSquare.style.border = "solid 1px red";
gridSquare.style.width = "15px";


mainContainer.appendChild(gridContainer);


let totalPixle = width * height;

function toggleMouse() {
    mouseDown = !mouseDown;
}

function colorSquare(e, target) {

    if(e.type === "mousedown"){
        toggleMouse();
    }

    if(mouseDown)
    {
        e.stopPropagation();
        console.log(e.target);
        e.target.style.backgroundColor = "white"
    }

}

for (let i = 0; i < totalPixle; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.addEventListener("mousedown", colorSquare);
    gridSquare.addEventListener("mouseover", colorSquare);
    gridSquare.style.backgroundColor = "black";
    gridSquare.style.width = "100%";
    gridContainer.appendChild(gridSquare);
}







