// Create a function called logUser. This function will accept a string argument and return a message that says “stringArgument has logged in for the day”. Console.log your results to verify the message.console.log(logUser(“ken2cool”)) // “ken2cool has logged in for the day.”	Bonus:
// I. Refactor your message to use template strings.
//     Ii. Add validation to make sure the argument passed to the function is a string datatype only.
function logUser(x) {
    if (isNaN(x)) {
        return console.log( `${x} has logged in for the day!`);
    } else {
        return console.log(`That is not a valid input.`);
    }
}
console.log(logUser("kay-lee"));