const loginPage = document.getElementById("login-page");
const overlay = document.getElementById("overlay");
const backButton = document.getElementById("back-button");
const exitButton = document.getElementById("exit-button");

// Function to show the overlay page
function showOverlay() {
  overlay.style.display = "block";
  loginPage.style.display = "none";
}

// Function to hide the overlay page
function hideOverlay() {
  overlay.style.display = "none";
  loginPage.style.display = "block";
}

// Event listener to show the overlay page initially
document.addEventListener("DOMContentLoaded", showOverlay);

// Event listener to show the overlay page when the "Login" button is clicked
document.getElementById("login-button").addEventListener("click", showOverlay);

// Event listener to hide the overlay page when the "Back to Login" button is clicked
backButton.addEventListener("click", hideOverlay);

// Event listener to hide the overlay page and return to the login page when the "Exit" button is clicked
exitButton.addEventListener("click", hideOverlay);

document.addEventListener("DOMContentLoaded", function () {
  const modeToggle = document.getElementById("modeToggle");
  const toggleButton = document.getElementById("toggleButton");

  toggleButton.addEventListener("click", function () {
    if (modeToggle.textContent === "Personal") {
      modeToggle.textContent = "Employer";
    } else {
      modeToggle.textContent = "Personal";
    }
  });
});
