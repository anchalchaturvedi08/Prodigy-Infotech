let startTime;
let timer;
let running = false;
let elapsedTime = 0;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

startBtn.addEventListener('click', () => {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 1000);
        running = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
        resetBtn.disabled = false;
    }
});

stopBtn.addEventListener('click', () => {
    if (running) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        running = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    elapsedTime = 0;
    updateTime();
    running = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
});

function updateTime() {
    elapsedTime = Date.now() - startTime;
    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
    return num < 10 ? `0${num}` : num;
}
