let userScore = 0;
let PCscore = 0;
let options = ["rock", "paper", "scissors"];
let instructions = document.querySelector("#instructions");
let userScoreContainer = document.querySelector("#score-user");
let PCScoreContainer = document.querySelector("#score-CPU");
let message = document.querySelector("#message");
let option = document.querySelector("#option");
let scoreChangeContainer = document.querySelector("#score-change");
let userSelectionContainer = document.querySelector("#user-selection");
let PCselectionContainer = document.querySelector("#CPU-selection");
let restartButton = document.querySelector("#restart");
let weaponButtons = document.querySelectorAll(".weapon");



weaponButtons.forEach(button => {
    button.addEventListener("click", startTurn);
});

restartButton.addEventListener("click", restart);

function startTurn(e){

    message.classList.remove("disabled");

    let PcSelection = Math.floor(Math.random()*3);
    let newSelection = options[PcSelection];

    let userSelection = e.currentTarget.id;
    
    switch (userSelection){
        case "rock":
            if (newSelection==="rock"){
                userSelectionContainer.innerText="piedra 🧱";
                PCselectionContainer.innerText="piedra 🧱";
                scoreChangeContainer.innerText="Han empatado, No hay punto";
            }
            else if(newSelection==="paper"){
                userSelectionContainer.innerText="piedra 🧱";
                PCselectionContainer.innerText="papel 📋";
                scoreChangeContainer.innerText="La computadora ganó un punto";
                PCscore+=1;
            }
            else if(newSelection==="scissors"){
                userSelectionContainer.innerText="piedra 🧱";
                PCselectionContainer.innerText="tijera ✂";
                scoreChangeContainer.innerText="Ganaste un punto :)";
                userScore+=1;
            }
        break;

        case "paper":
            if (newSelection==="rock"){
                userSelectionContainer.innerText="papel 📋";
                PCselectionContainer.innerText="piedra 🧱";
                scoreChangeContainer.innerText="Ganaste un punto :)";
                userScore+=1;
            }
            else if(newSelection==="paper"){
                userSelectionContainer.innerText="papel 📋";
                PCselectionContainer.innerText="papel 📋";
                scoreChangeContainer.innerText="Han empatado, No hay punto";
            }
            else if(newSelection==="scissors"){
                userSelectionContainer.innerText="papel 📋";
                PCselectionContainer.innerText="tijera ✂";
                scoreChangeContainer.innerText="La computadora ganó un punto";
                PCscore+=1;
            }
        break;

        case "scissors":
            if (newSelection==="rock"){
                userSelectionContainer.innerText="tijera ✂";
                PCselectionContainer.innerText="piedra 🧱";
                scoreChangeContainer.innerText="La computadora ganó un punto";
                PCscore+=1;
            }
            else if(newSelection==="paper"){
                userSelectionContainer.innerText="tijera ✂";
                PCselectionContainer.innerText="papel 📋";
                scoreChangeContainer.innerText="Ganaste un punto :)";
                userScore+=1;
            }
            else if(newSelection==="scissors"){
                userSelectionContainer.innerText="tijera ✂";
                PCselectionContainer.innerText="tijera ✂";
            }
        break;
    }
    userScoreContainer.innerText=userScore;
    PCScoreContainer.innerText=PCscore;

    if (PCscore===5||userScore===5){
        option.classList.add("disabled");
        restartButton.classList.remove("disabled");
        if(PCscore>userScore){
            instructions.innerText="Gana la computadora"
        }
        else{
            instructions.innerText="Ganaste el juego"
        }
        }
}

function restart(e){
    userScore=0;
    PCscore=0;

    userScoreContainer.innerText=userScore;
    PCScoreContainer.innerText=PCscore;
    instructions.innerText="El primero en llegar a 5 puntos, gana"

    option.classList.remove("disabled");
    restartButton.classList.add("disabled");
    message.classList.add("disabled");
}