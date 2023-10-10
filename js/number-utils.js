// number-utils.js

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Export the getRandomNumber function
module.exports = getRandomNumber;
