let rNumber;
let timer = 60;
let score = 0;
// function which make the bubble 
function makeBubble() {
    let cluster = ""
    for (let i = 1; i <= 126; i++) {
        const rn = Math.floor(Math.random() * 10);
        cluster += `<div class="bubble">${rn}</div>`
    }

    document.querySelector("#pbtm").innerHTML = cluster
}

// to set run the timer

function runTimer() {
    let innerTimer = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        } else {
            clearInterval(innerTimer);
            document.querySelector("#pbtm").innerHTML = (`<h2>Game Over</h2>`);
        }
    }, 1000);
}

// used when someone hit the bubble then change the valve of hit button
function getNewHit() {
    rNumber = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = rNumber
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", (details) => {
    let clickedNumber = Number(details.target.textContent);
    if (clickedNumber === rNumber) {
        increaseScore();
        makeBubble();
        getNewHit()
    } else {
        makeBubble();
    }
})

makeBubble();
runTimer()
getNewHit();
