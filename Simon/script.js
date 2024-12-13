
const gridItems = document.querySelectorAll("#gameGrid .grid-Item");
const gameGrid = document.getElementById("gameGrid");
function asignColour (){
    const colours = ["red","yellow","green","blue"];
    gridItems.forEach((item, i) => {
        console.log(colours[i]);
        item.style.backgroundColor = `${(colours[i])}`;
    });
}
let currentSize = 2;
let gridButtons = Array.from(gridItems);
function gridSizeControler(){
    gameGrid.style.gridTemplateColumns = `repeat(${currentSize+ 1}, 1fr)`;
    gameGrid.style.gridTemplateRows = `repeat(${currentSize+ 1}, 1fr)`;
    ++currentSize;
    console.log(currentSize);
    
    function newButton(){
        gridSize = currentSize * currentSize;
        console.log(gridSize);
        while((gridButtons.length) != gridSize){
            const button = document.createElement("button");
            gameGrid.appendChild(button);
            button.classList.add("grid-Item");
            gridButtons.push(button);
        }
        
        gridButtons.forEach((item,index) => {
            console.log(`Grid item${index + 1}: ${item.textContent}`);
            item.style.backgroundColor = `lightcoral`;
        })
    }
    newButton();
}
function gameControler(){
}
gameGrid.onclick = gridSizeControler;
