// greeting-control.js

// Import the getRandomGreeting function from greeting-logic.js
const getRandomGreeting = require('./greeting-logic');

// DOM elements
const form = document.getElementById('greeting-form');
const nameInput = document.getElementById('name');
const greetingContainer = document.getElementById('greeting-container');

// Event listener for form submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const userName = nameInput.value;
    const randomGreeting = getRandomGreeting();

    // Display the greeting with the user's name
    greetingContainer.textContent = `${randomGreeting}, ${userName}!`;

    // Clear the input field
    nameInput.value = '';
});
