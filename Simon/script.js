
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
function addSequnceNum(){
    let nextNum = Math.floor(Math.random() * gridButtons.length + 1);
    console.log(nextNum);
    if((sequence.length) < sequenceNum){
        sequence.push(nextNum);
        console.log(sequence);
        console.log(`sequence num ${sequenceNum}`);
        animateSequnce();
    }
}
function animateSequnce(){
    sequence.forEach(num => {
        console.log(`loop num: ${num}`)
        gridButtons.forEach(button =>{
            let index = gridButtons.indexOf(button);
            console.log(`button number: ${index}`);
            console.log(`index: ${index+1} num: ${num}`)
            if(index+1 === num){
                button.style.opacity = 1;
                setTimeout(function() {
                    button.style.opacity = 0.5;
                }, 1000);
            };
        });
    });
    userInput();
}
let userInputs = []
function userInput(){
    gridButtons.forEach((button) =>{
        button.addEventListener(`click`,(event)=> {
            const clickedItem = event.target;
            const index = gridButtons.indexOf(clickedItem);
            userInputs.push(index);
            userInputs.forEach((input,i) =>{
                console.log(`Input: ${input+1} sequence: ${sequence[i]}`)
                if ((input+1) !== sequence[i]) {
                    console.log("FALSE");
                }else{
                    console.log("TRUE");
                }
            })
        })
    })
    
    
}
let playing = true;
function playGame(){
    asignColour();
    addSequnceNum();

}
if (playing == true){
    playGame();
}