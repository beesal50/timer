
const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const hrs = document.querySelector(".hrs");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");

let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;


function timer(){
    seconds++;

    // For seconds
    secs.innerHTML = seconds;
    if (seconds < 10){
        secs.innerHTML = "0" + seconds;
    }

    // For minutes
    if (seconds === 60){
        minutes++;
        seconds = 0;
        mins.innerHTML = minutes;
        if (minutes < 10){
            mins.innerHTML = "0" + minutes;
        }
    }

    // For hours
    if (minutes === 60){
        hours++;
        minutes = 0;
        hrs.innerHTML = hours;
        if (hours < 10){
            hrs.innerHTML = "0" + hours;
        }
        
    }
}
function start(){
    intervalId = setInterval(timer,0);
}
function stop(){
    clearInterval(intervalId);

}
function reset(){
    hrs.innerHTML = "00";
    mins.innerHTML = "00";
    secs.innerHTML = "00";
    seconds = 0;
    minutes = 0;
    hours = 0;
    


}

startEl.addEventListener('click',start);
stopEl.addEventListener('click',stop);
resetEl.addEventListener('click', reset);

