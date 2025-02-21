/**
 * Write your challenge solution here
 */

const mainHeading = document.getElementById("mainHeading");

document.querySelectorAll(".color-buttons button").forEach((button) => {
  button.addEventListener("click", () => {
    mainHeading.className = "";

    if (button.id !== "resetButton") {
      mainHeading.classList.add(button.id);
    }
  });
});
