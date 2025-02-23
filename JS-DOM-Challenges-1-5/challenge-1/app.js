/**
 * Write your challenge solution here
 */

const toggleBtn = document.getElementById("toggleButton");
const bulb = document.getElementById("bulb");
const statusText = document.getElementById("status");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  bulb.classList.toggle("off");

  if (statusText.textContent.includes("Off")) {
    statusText.textContent = "Status: On";
    toggleBtn.textContent = "Turn Off";
  } else {
    statusText.textContent = "Status: Off";
    toggleBtn.textContent = "Turn On";
  }
});

