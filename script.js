let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

function formatTime(ms) {
  const date = new Date(ms);
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
  return `${minutes}:${seconds}:${milliseconds.slice(0, 2)}`;
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
  }, 10);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  display.textContent = '00:00:00';
  elapsedTime = 0;
  laps.innerHTML = '';
}

function recordLap() {
  const lapTime = document.createElement('li');
  lapTime.textContent = formatTime(elapsedTime);
  laps.appendChild(lapTime);
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', recordLap);
