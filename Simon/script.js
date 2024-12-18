
const gridItems = document.querySelectorAll("#gameGrid .grid-Item");
const gameGrid = document.getElementById("gameGrid");
// complete and working
function asignColour (){
    const colours = ["red","lime","blue","yellow","orangered","fuchsia","aqua","white","maroon","green","navy","olive","purple","teal","gray","crimson","mediumseagreen","dodgerblue","gold","tomato","darkorchid","darkturquoise","firebrick","turquoise","black"];
    gridButtons.forEach((item, i) => {
        item.style.backgroundColor = `${(colours[i])}`;
    });
}

// complete and Workinging
let pattern = [1,1];
let patternlen = 1;
function createPattern(){
    let nextNum = Math.floor(Math.random() * gridButtons.length + 1);
    console.log(`next number: ${nextNum}`);
    if((pattern.length) < patternlen){
        pattern.push(nextNum);
    }
    function runPattern(){
        pattern.forEach((num, index)=>{
            setTimeout(function() {
            gridButtons.forEach(button =>{
                buttonindex = gridButtons.indexOf(button);
                if (buttonindex+1 === num) {
                    button.style.opacity = 1;
                    setTimeout(() => {
                        button.style.opacity = 0.3;
                    }, 500);
                }
            })
        }, index * 1000);
    })

        
    }
    setTimeout(() => {
        runPattern()
    }, 500);
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
function animateSequnce(){

    userInput();
}

function userInput(){
    isCorrect = true;
    gridButtons.forEach((button) =>{
        button.addEventListener(`click`,(event)=> {
            const clickedItem = event.target;
            const index = gridButtons.indexOf(clickedItem);
            for (let i = 0; i < pattern.length; i++) {
                if (index+1 === pattern[i]){
                    console.log(`Button pressed: ${index+1} pattern num: ${pattern[i]} pattern Lenght: ${pattern.length}`)
                    console.log(`i = ${i}`)
                    patternRunning = true;
                    ++patternlen;
                    playGame();
                }
            }
        })
    })
}
function endGame(){
    userInputs.length = 0;
    pattern.length = 0;
    patternlen = 0;
    patternRunning = true
    playGame();
}
let patternRunning = true;
let playing = true;
    function playGame(){
        asignColour();

        if (patternRunning == false){
            gridButtons.forEach((button)=>{
                button.addEventListener(`mouseover`,()=>{
                    button.style.opacity = 0.5;
                })
                button.addEventListener(`mouseout`,()=>{
                    button.style.opacity = 0.3;
                })
            })
            userInput();
        }else{
            createPattern();
            setTimeout(() => {
                patternRunning = false;
                playGame();
            }, pattern.length * 1000);
        }
}
if (playing == true){
    playGame();
}

