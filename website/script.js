function generateNumber() {
    // Generate a random number between 1 and 100
    var random = Math.floor(Math.random() * 20) + 1;
    document.getElementById('randomNumber').textContent = random;
}

// Optionally, generate a number when the page loads
generateNumber();
