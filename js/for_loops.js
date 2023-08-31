//this function will take a number and show a multiplication table for that number.
function showMultiplicationTable (x) {
    for (let i=0; i < 11; i++) {
        //this will log in the console for every time that i is below 11 what X is times by.
        console.log(`${x} x ${i} = ${x*i}`)
    }
}
// //calling the function
showMultiplicationTable(10);


for (let i=0; i < 10; i++) {
    let num=getRandomInt(20,200)
    console.log(`${num} is ${isEven(num)}`);
}


for (let row=1; row <=9; row++){
    let str = '';
    for (let j=0; j <  row; j++){
        str+=row;
    }
    console.log(str);
}

for (let i=100; i>=5;i=i-5){
    console.log(i);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function isEven(num){
    if(num % 2 === 0){
        return 'even';
    }
    return 'odd';
}