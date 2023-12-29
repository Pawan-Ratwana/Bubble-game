
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
let timer = 60;
function runTimer() {
    let innerTimer = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        } else {
            clearInterval(innerTimer);
        }
    }, 1000);
}

// used when someone hit the bubble then change the valve of hit button
function getNewHit() {
    let rn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = rn
}
let score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

makeBubble();
runTimer()
getNewHit();
increaseScore()