//this function will return true if the number is positive or will return false if the number is negative
function isPositive (x){
    if (x > -1) {
        return true
    } else {
        return false
    }
}
//log to check
console.log(isPositive(7));

//object to text next function
totalPets([
    {name: 'Fernando Mendoza', pets: 1},
    {name: 'Douglas Hirsh', pets: 8},
    {name: 'Kenneth Howell', pets: 2}
])
//this function will count the total number of 'pets' in an object.
function totalPets (x) {

}

//this function will take in a string with commas that has an address and turn that into an object with their location.
function convertLocationToObject () {

}
//These calls will test the function
convertLocationToObject("Austin, Texas");
convertLocationToObject("Auburn, New York");

//this function will remove odd numbers from an array
function removeOdds() {

}

removeOdds([2, 4, 6]); // [2, 4, 6]
removeOdds([7, 3, 2]); // [2]
removeOdds([1, 11, 111]); // []

function countXs (x) {

}

countXs("All my exes live in Texas");
countXs("Hello world");
countXs("X-rays have a limited amount of radiation to them");
