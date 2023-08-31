let userNum;
let valid = false;
do{
    userNum = parseInt(prompt("Please enter a number between 1 and 49"))
    if (!isEven()){
        alert("That number is not odd. Please try again.")
        continue;
    }
    if(userNum < 1 || userNum > 49){
        alert("That number is out of range")
        continue;
    }
    if(!isFinite(userNum)){
        alert("That is not a number");
        continue;
    }
    break;
}while(true);

console.log(userNum);
for (let i=1;i<50;i++){
    if(i%2 ===0){
        continue;
    }
    if(userNum===i){
        console.log(`A wild ${userNum} has appeared! RUN!`)
        continue;
    }
    console.log(`Here is an odd number: ${i}`);
}