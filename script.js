let mouseDown = false;

let width = 16;
let height = 16;

let mainContainer = document.querySelector(".main-container");

let resizeButton = document.querySelector(".size-container button");
let heightInput = document.querySelector(".height");
let widthInput = document.querySelector(".width");

resizeButton.addEventListener("click", changeGridSize);


let totalPixle = width * height;

function toggleMouse() {
    mouseDown = !mouseDown;
}

function colorSquare(e, target) {
    if(e.type === "mousedown"){
        toggleMouse(true);
    }

    if(mouseDown)
    {
        e.stopPropagation();
        console.log(e.target);
        e.target.style.backgroundColor = "black"
    }

}

function changeGridSize(e){
    
    
    if(typeof +heightInput.value == "number" && +heightInput.value > 0 && typeof +widthInput.value == "number" && +widthInput.value > 0)
    {
        if(+heightInput.value >= 100 || +widthInput.value >= 100){
            alert("Please choose a pixle number between 1-99");
            widthInput.value = "";
            heightInput.value = "" ;
            return;
        }

        width = +widthInput.value;
        height = +heightInput.value;
        let deleteGridElement = document.querySelector(".grid-container");
        deleteGridElement.remove();
        createGridAndPixles();
    } 
}


function createGridAndPixles(){
    let gridContainer = document.createElement("div");

    totalPixle = width * height;
    for (let i = 0; i < totalPixle; i++) {
        let gridSquare = document.createElement("div");
        gridContainer.classList.add("grid-container");
        gridContainer.style.backgroundColor = "white";
        gridContainer.style.display = "grid";
        gridContainer.style.gridTemplateColumns = `repeat(${width}, auto)`;
        gridContainer.style.gridTemplateRows = `repeat(${height}, auto)`;
        
        mainContainer.appendChild(gridContainer);

        gridSquare.addEventListener("mousedown", colorSquare);
        gridSquare.addEventListener("mouseover", colorSquare);
        gridSquare.addEventListener("mouseup", colorSquare);

        gridSquare.style.backgroundColor = "lightgray";
        gridSquare.style.width = "100%";
        gridContainer.appendChild(gridSquare);
    }
}

createGridAndPixles();






