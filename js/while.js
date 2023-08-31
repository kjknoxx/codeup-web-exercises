let num = 1
while (num < 65536){
    num*=2
    console.log(num);
}

let totalCones=getRandomInt(50,100);
let wantToBuy;

do {
    wantToBuy = getRandomInt(1,5);
    if(wantToBuy <= totalCones){
        console.log(`A customer wants to buy ${wantToBuy}. You now have ${totalCones}`)
        totalCones -= wantToBuy;
    }else {
        console.log(`A cusomter tries to buy ${wantToBuy} cones, but you only have  ${totalCones} left.`)
    }
    console.log(`You have ${totalCones} remaining`)
    if (totalCones === 0){
        console.log("You have sold all the cones!")
    }
}while(totalCones > 0)