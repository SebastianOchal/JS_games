
const gridItems = document.querySelectorAll("#gameGrid .grid-Item");
const gameGrid = document.getElementById("gameGrid");

function asignColour (){
    const colours = ["red","lime","blue","yellow","orangered","fuchsia","aqua","white","maroon","green","navy","olive","purple","teal","gray","crimson","mediumseagreen","dodgerblue","gold","tomato","darkorchid","darkturquoise","firebrick","turquoise","black"];
    gridButtons.forEach((item, i) => {
        console.log(colours[i]);
        item.style.backgroundColor = `${(colours[i])}`;
    });
}
let currentSize = 2;
let gridButtons = Array.from(gridItems);
function gridSizeControler(){
    if (currentSize < 5){
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
                    asignColour();
                }
            }
            newButton();
        }
}
    
let sequence = []
let sequenceNum = 1;
function gameControler(){
    let nextNum = Math.floor(Math.random() * gridButtons.length + 1);
    console.log(nextNum);
    if((sequence.length) < sequenceNum){
        sequence.push(nextNum);
        console.log(sequence);
        ++sequenceNum;
        console.log(`sequence num ${sequenceNum}`);
    }
}
function userInput(){
    gridButtons.forEach((button) =>{
        button.addEventListener(`click`,(event)=> {
            const clickedItem = event.target;
            const index = gridButtons.indexOf(clickedItem);
            console.log(`button number: ${index}`);
        })
    })
    
    
}
userInput();
asignColour();