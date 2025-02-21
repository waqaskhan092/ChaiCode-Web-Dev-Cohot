/**
 * Write your challenge solution here
 */

const toggleBtn = document.getElementById("toggleButton");
const bulb = document.getElementById("bulb");
const statusText = document.getElementById("status");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  bulb.classList.toggle("off");
  statusText.textContent = statusText.textContent.includes("Off")
    ? "Status: On"
    : "Status: Off";
});
