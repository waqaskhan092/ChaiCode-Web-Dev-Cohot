/**
 * Write your challenge solution here
 */

// Get input fields
const nameInput = document.getElementById("nameInput");
const jobInput = document.getElementById("jobInput");
const ageInput = document.getElementById("ageInput");
const bioInput = document.getElementById("bioInput");

// Get display fields
const nameDisplay = document.getElementById("nameDisplay");
const jobDisplay = document.getElementById("jobDisplay");
const ageDisplay = document.getElementById("ageDisplay");
const bioDisplay = document.getElementById("bioDisplay");

// Function to update preview card
function updatePreview(
  inputElement,
  displayElement,
  defaultValue = "Not provided"
) {
  displayElement.textContent = inputElement.value.trim() || defaultValue;
}

// Add event listeners for real-time update
nameInput.addEventListener("input", () =>
  updatePreview(nameInput, nameDisplay)
);
jobInput.addEventListener("input", () => updatePreview(jobInput, jobDisplay));
ageInput.addEventListener("input", () => updatePreview(ageInput, ageDisplay));
bioInput.addEventListener("input", () => updatePreview(bioInput, bioDisplay));
