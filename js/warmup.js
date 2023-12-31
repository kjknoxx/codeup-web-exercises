//August 15, 2023
// Create a function called logUser. This function will accept a string argument and return a message that says “stringArgument has logged in for the day”. Console.log your results to verify the message.console.log(logUser(“ken2cool”)) // “ken2cool has logged in for the day.”	Bonus:
// I. Refactor your message to use template strings.
//     Ii. Add validation to make sure the argument passed to the function is a string datatype only.
function logUser(x) {
    if (typeof(x)!== `string`) {
        return console.log( `That is not a valid input`);
    } else {
        return console.log(`${x} has logged in for the day!`);
    }
}
//August 16, 2023
// Create an object literal with the following properties: a string property called “username” and a string property called “email” with string values representing the property name to them.    Assign your object literal into a variable called “userObject”. Console.log the objects properties to verify your values are assigned into the object

// properly.console.log(userObject.username) // “ken2cool”
// console.log(userObject.email) // “ken2cool@yahoo.com”

// Bonus:
// I. Refactor your logUser function to use your userObject’s property of username vs. an hardcoded string literal argument - update the string return from logUser to also include the userObject.email property e.g.: “ken2cool with email ken2cool@yahoo.com has logged in for the day.”

// Ii. Refactor your userObject to have a userRoles property that is an array of strings listing the user’s roles - e.g “admin”, “moderator”, “buyer”, “seller” and other hypothetical roles a user could have on a website

// Iii. Refactor your user object to have a nested userProfile object property - this nested property should have a userProfileUrl property with a string value mocking a link to an image. The other property should be a userLocation property with a string value mocking a CityName, StateName location the user could be from. Finally, add a property called numLikes with a number value indicating the users received ‘likes’ in our hypothetical application.


let userObject = [
    {
    email: "ken2cool@yahoo.com",
    username: "ken2cool",
        //refactor 2
    admin: "",
    moderator: "",
    buyer: "",
    seller: "",
        //refactor 3
        userProfile: {
        userProfileUrl:"",
        userLocation: {
            cityName: "",
            stateName: "",
        }
        },
        numLikes: 34
    }
    ];

console.log(userObject.username);
console.log(userObject.email);

//refactor 1
console.log(`${userObject.username} with the email of ${userObject.email} has logged in for the day.`);
