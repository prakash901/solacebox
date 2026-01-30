const wrapper = document.querySelector(".breath-wrapper");
const text = document.getElementById("breathText");
const btn = document.getElementById("toggleBtn");

let breathing = false;
let inhale = true;
let interval;

btn.addEventListener("click", () => {
  breathing = !breathing;

  if (breathing) {
    btn.textContent = "Stop";
    inhale = true;
    text.textContent = "Breathe in";
    wrapper.classList.add("breathing-active");

    interval = setInterval(() => {
      text.style.opacity = 0.5;

      setTimeout(() => {
        text.textContent = inhale ? "Breathe out" : "Breathe in";
        text.style.opacity = 1;
        inhale = !inhale;
      }, 400);
    }, 5000);

  } else {
    btn.textContent = "Start";
    text.textContent = "Ready?";
    wrapper.classList.remove("breathing-active");
    clearInterval(interval);
  }
});
