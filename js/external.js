//parts 1-2 in exercises
alert("Welcome to the website!");
let userInput= prompt("What's your favorite color?");
alert (userInput + " is a very nice color!");

// exercise 3 part 1
let littleMermaid = 3
let brotherBear = 5
let herMovie = 1

let priceOfMovies = (littleMermaid * 3) + (brotherBear * 3) + (herMovie *3);
alert("The total price of renting your movies is: " +priceOfMovies);

//exercise 3 part 2
let google = 400
let amazon = 380
let facebook = 350
let payment = (facebook * 10) + (amazon * 4) + (google * 6);
alert("You earned "+payment+" from Facebook, Amazon, and Google combined");

//exercise 3 part 3
let classFull = confirm("Is the class full?");
let scheduleConflict = confirm("Does the class schedule not conflict with your current schedule?");
let enrolled = classFull && scheduleConflict
alert("Are you enrolled? "+enrolled);

//exercise 3 part 4
let itemCount = confirm("Do you have more than 2 items?");
let offerExpired = confirm("Is your offer valid?");
let premCheck = confirm("Are you a premium member?");
let canOffer = (itemCount || premCheck) && offerExpired;
alert(canOffer +" I can offer you a discount!");