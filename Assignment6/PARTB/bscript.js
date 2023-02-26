var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;

var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");

var interval;

function timer() {
    msec++;
    if(msec >= 100) {
    sec++;
    msec = 00;
}
    else if(sec >= 60) {
        min++;
        sec = 00;
    }
    else if(min >= 60) {
        hour++;
        min = 00;
    }
    hourHeading.innerHTML = hour < 10 ? '0' + hour : hour;
    minHeading.innerHTML = min < 10 ? '0' + min : min;
    secHeading.innerHTML = sec < 10 ? '0' + sec : sec;
}


async function start() {
    // const result = await resolveAfter2Seconds();
    interval = setInterval(timer, 10);
    await disableStartBtn();
}


function stop() {
    clearInterval(interval);
    enableStartBtn();
}

function reset() {
    hour = 00;
    min = 00;
    sec = 00;
    hourHeading.innerHTML =  '0' + hour;
    minHeading.innerHTML =  '0'+ min;
    secHeading.innerHTML = '0' + sec;
    stop();
}

function disableStartBtn() {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(document.getElementById("startBtn").disabled = true) ;
        }, 1000);
      });

}

function enableStartBtn() {
    document.getElementById("startBtn").disabled = false;
}