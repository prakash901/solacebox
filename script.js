const wrapper = document.getElementById("breathWrapper");
const text = document.getElementById("breathText");
const btn = document.getElementById("toggleBtn");

let running = false;
let phase = "inhale";
let timer;

btn.addEventListener("click", () => {
  running = !running;

  if (running) {
    btn.textContent = "Stop";
    startBreathing();
  } else {
    stopBreathing();
  }
});

function startBreathing() {
  phase = "inhale";
  wrapper.classList.remove("exhale");
  wrapper.classList.add("inhale");
  text.textContent = "Breathe in";

  timer = setInterval(() => {
    if (phase === "inhale") {
      phase = "exhale";
      wrapper.classList.remove("inhale");
      wrapper.classList.add("exhale");
      text.textContent = "Breathe out";
    } else {
      phase = "inhale";
      wrapper.classList.remove("exhale");
      wrapper.classList.add("inhale");
      text.textContent = "Breathe in";
    }
  }, 4000);
}

function stopBreathing() {
  clearInterval(timer);
  wrapper.classList.remove("inhale", "exhale");
  text.textContent = "Ready?";
  btn.textContent = "Start";
}
