const sizeButtons = document.querySelectorAll(".gridButtons");
let buttons = [];
let gridSize = 2;
let boardExists = true;

const grid = document.createElement("div");
document.body.appendChild(grid);
grid.classList.add("grid")
grid.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
grid.style.gridTemplateRows = `repeat(${gridSize}, auto)`;

const gridSizeButtons = Array.from(sizeButtons);
gridSizeButtons.forEach((button) =>{
    let clicked = gridSizeButtons.indexOf(button);
    button.addEventListener("click",()=>{
        gridSize = clicked+2;
        if(boardExists){
            deleteBoard();
            boardExists = false;
        }
        if(!boardExists){
            CreateBoard();
            boardExists = true;
        }
    })
})
function CreateBoard(){
    grid.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, auto)`;

    let buttonAmount = gridSize * gridSize;
    for (let i = 0; i < buttonAmount; i++) {
        const button = document.createElement("button");
        grid.appendChild(button);
        button.classList.add("button");
        buttons.push(button);
    }
    buttons.forEach(buttons =>{
        console.log(buttons);
    })
}
function deleteBoard(){
    const buttons = document.getElementsByClassName("button");
    const toDelete = Array.from(buttons);
    toDelete.forEach(button =>{
        button.remove();
    })
}
CreateBoard();

const start = document.querySelector("#start");
start.addEventListener("click", ()=>{
    if(!playing) play();
})
let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let playing = false;
let win;

const turnCounter = document.querySelector(".TurnCounter");
function play(){
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    good = true;

    for (let i = 0; i < 20; i++) {
        let addNum = Math.floor(Math.random() * 4); 
        order.push(addNum);
    }
    compTurn = true;

    intervalId = setInterval(gameTurn, 800);
}

function gameTurn(){
    playing = false;

    if (flash == turn){
        clearInterval(intervalId);
        playing = true;
        compTurn = false;
        clearFlash();
    }
    if (compTurn){
        clearFlash();
        setTimeout(()=>{
            buttons.forEach((button) =>{
                let buttonIndex = buttons.indexOf(button);
                if(order[flash] == buttonIndex){
                    button.style.opacity = 1;
                }
            });
            flash++;
        }, 200)
    }
}
function clearFlash(){
    buttons.forEach((button) =>{
        button.style.opacity = 0.3;
        button.style.backgroundColor = "lightblue";
    })
}
function flashAll(){
    buttons.forEach((button) =>{
        button.style.opacity = 1;
        if(good == false){
            button.style.backgroundColor = "Crimson";
        }else{
            button.style.backgroundColor = "Chartreuse";
        }
    })
}

buttons.forEach((button) =>{
    let buttonIndex = buttons.indexOf(button);
    button.addEventListener("click", (event)=>{
        if (playing){
            let buttonPressed = event.target;
            playerOrder.push(buttonIndex);
            buttonPressed.style.opacity = 1;
            check();
            if(!win){
                setTimeout(() => {
                    clearFlash();
                }, 300);
            }
        }
    })
})

function check(){
    if(playerOrder[playerOrder.length -1] !== order[playerOrder.length-1]) good = false;

    if (playerOrder.length == 20 && good){
        winGame();
    }

    if (good == false){
        flashAll();
        playing = false;
        turnCounter.innerHTML = "Lose";
    }

    if (turn == playerOrder.length && good && !win){
        turn++;
        flashAll();
        playerOrder = [];
        compTurn = true;
        flash = 0;
        intervalId = setInterval(gameTurn, 800);
        turnCounter.innerHTML = `${turn}`;
    }
}
function winGame(){
    flashAll();
    playing = false;
    win = true;
    turnCounter.innerHTML = "Win";
}
