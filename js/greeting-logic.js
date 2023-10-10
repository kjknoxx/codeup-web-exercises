// greeting-logic.js

// Import the getRandomNumber function from number-utils.js
const getRandomNumber = require('./number-utils');

// Array of greetings
const greetings = [
    "Hello",
    "Hi",
    "Hey there",
    "Greetings",
    "Salutations",
    "Howdy",
    "Yo",
    "Bonjour",
    "Hola",
    "Ciao",
    "Namaste",
    "G'day",
    "What's up",
    "Sup",
    "How's it going",
    "Nice to meet you",
    "Welcome",
    "Hey",
    "How are you",
    "Pleased to meet you"
];

// Function to get a random greeting
function getRandomGreeting() {
    const randomIndex = getRandomNumber(0, greetings.length - 1);
    return greetings[randomIndex];
}

// Export the getRandomGreeting function
module.exports = getRandomGreeting;
