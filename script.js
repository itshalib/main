const correctPassword = "correct_password_123";  // The correct password (for challenge)
let attempts = 0;  // Counter for password attempts

// Elements from the DOM
const passwordForm = document.getElementById('passwordForm');
const passwordInput = document.getElementById('passwordInput');
const flagContainer = document.getElementById('flagContainer');
const attemptsText = document.getElementById('attempts');

// Event listener for password form submission
passwordForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const enteredPassword = passwordInput.value.trim();
    attempts++;  // Increment attempt counter

    // Update attempts display
    attemptsText.textContent = `Attempts: ${attempts}`;

    // Check if the entered password matches the correct one
    if (enteredPassword === correctPassword) {
        flagContainer.classList.remove('hidden');  // Show the flag container
        alert("Congratulations! You've cracked the password.");
    } else {
        alert("Incorrect password. Try again!");
    }

    // Clear input field after each attempt
    passwordInput.value = '';
});
