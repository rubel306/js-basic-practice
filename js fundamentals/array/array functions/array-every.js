// array.every() // akta callbak function call hobe and parameter hisabe nibe element, index and array. And it returns true/false 

var arr = [3, 65, 36,5, 6, 39, 48, 35, 35, 37];
const isBellowFifty = (values) => values < 50;

console.log(arr.every(isBellowFifty)); // it returens true or false

if(arr.every(isBellowFifty) == true){
    console.log("All values are under fifty. you may ready to go!!!");
}else{
    console.log("sorry ! You enter more than 50 value. ")
}