const TIMEOUT = 5000;

let clicks = 0;

const timer = document.getElementById("timer");
const button = document.getElementById("button");
const counter = document.getElementById("counter");

button.onclick = start;

function start() {
  const startTime = Date.now();
  timer.textContent = formatTime(TIMEOUT);

  button.onclick = () => (counter.textContent = clicks++);

  const interval = setInterval(() => {
    const delta = Date.now() - startTime;
    timer.textContent = formatTime(TIMEOUT - delta);
  }, 100);

  setTimeout(() => {
    button.onclick = null;
    timer.textContent = "Finish";
    clearInterval(interval);
  }, TIMEOUT);
}

function formatTime(ms) {
  return Number.parseFloat(ms / 1000).toFixed(2);
}
