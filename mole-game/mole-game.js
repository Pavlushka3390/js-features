let gameStatus = document.querySelector('.status');
let points = +gameStatus.querySelector('#dead').textContent;
let miss = +gameStatus.querySelector('#lost').textContent;
let holes = document.querySelectorAll(".hole");


function clickHandler(event) {
    if(event.target.classList.contains("hole_has-mole")) {
        ++points;
        gameStatus.querySelector('#dead').textContent = points;
    } else {
        ++miss;
        gameStatus.querySelector('#lost').textContent = miss;
    }

    checkGameStatus();
}

function zeroStatus() {
    miss = 0;
    points = 0;
    gameStatus.querySelector('#lost').textContent = 0;
    gameStatus.querySelector('#dead').textContent = 0;
}

function checkGameStatus() {   
    if(points >= 10) {
        alert("Победа!!");
        zeroStatus();
        return;
    }

    if(miss >= 5) {
        alert("Поражение((");
        zeroStatus();
        return;
    }   
}

function main() {
    for(let hole of holes) {
        hole.onclick = clickHandler;
    }

    setInterval(() => {tickTimer()}, 1000);
}


main();