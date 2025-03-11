const timeInput = document.querySelector("#timeInput");
const startButton = document.querySelector("#startButton");
const resetButton = document.querySelector("#resetButton");
const countDownDisplay = document.querySelector("#countDownDisplay");

let inputSeconds = 0;
let timer = null; // Stores the timer reference

function updateDisplay(message, isError = false) {
  countDownDisplay.textContent = message;
  countDownDisplay.classList.toggle("error", isError);
}

function resetTimer() {
  clearInterval(timer);
  startButton.textContent = "Start Countdown";
  updateDisplay(""); // Clears display
}

function startCountdown() {
  if (isNaN(inputSeconds) || inputSeconds <= 0) {
    updateDisplay("Please enter a valid number greater than 0", true);
    return;
  }

  updateDisplay(`Timer Remaining: ${inputSeconds} Seconds`);

  startButton.textContent = "Pause Countdown";
  timer = setInterval(() => {
    if (inputSeconds <= 0) {
      clearInterval(timer);
      updateDisplay("Timer Out!");
      startButton.textContent = "Start Countdown";
      return;
    }
    updateDisplay(`Timer Remaining: ${inputSeconds--} Seconds`);
  }, 1000);
}

// Reset countdown when input value changes
timeInput.addEventListener("input", () => {
  inputSeconds = parseInt(timeInput.value) || 0;
  resetTimer();
});

// start button events
startButton.addEventListener("click", () => {
  if (startButton.textContent.includes("Start")) {
    inputSeconds = parseInt(timeInput.value);
    startCountdown();
  } else if (startButton.textContent.includes("Pause")) {
    clearInterval(timer);
    startButton.textContent = "Resume Countdown";
  } else if (startButton.textContent.includes("Resume")) {
    startButton.textContent = "Pause Countdown";
    startCountdown();
  }
});

// Reset countdown when reset button clicked
resetButton.addEventListener("click", () => {
  timeInput.value = "";
  resetTimer();
});
