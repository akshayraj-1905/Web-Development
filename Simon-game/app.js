let gameSeq = [];
let userSeq = [];
let btns = ["red", "purple", "green", "yellow"];

let started = false;
let level = 0;
let highScore = 0;

let h2 = document.querySelector("h2");

let startBtn = document.querySelector(".start-btn");

startBtn.addEventListener("click", function() {
    if(started == false) {
        started = true;
        console.log("Game Started");

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(function() {
        btn.classList.remove("gameFlash");
    }, 300);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 300);
}

function cheakAns(idx){
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout( levelUp, 1000);
        }
    } else {
        h2.innerText = `GAME OVER!! ------- HighScore: ${highScore}`;
        startBtn.innerText = "Restart";
        document.querySelector("body").classList.add("gameOver");
        setTimeout(function() {
            document.querySelector("body").classList.remove("gameOver");
        }, 200);
        reset();
    }
}

function levelUp() {
    userSeq = [];
    level++;
    if(level > highScore) {
        highScore = level;
    }
    h2.innerText = `Level ${level} --------- HighScore: ${highScore}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);;
    gameFlash(randBtn);
    console.log(randIdx);
}

function btnPressed(){
    if (!started) return;   
    userFlash(this);
    let userColor = this.getAttribute("id");
    userSeq.push(userColor);
    cheakAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns) {
    btn.addEventListener("click", btnPressed);
}

function reset () {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}