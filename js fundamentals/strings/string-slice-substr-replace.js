const fruits = 'Apple, Orange, Banana, BlackBerry';
const orange = fruits.slice(7, 13); //7 theke porjonto 
const BananaByNegativeValue  = fruits.slice(-18, -12);
// console.log( BananaByNegativeValue);

const str = "Bangladesh is beautiful country";
const sbstr = str.substr(0,10); // koto theke start hobe and koyta character nibe. 
// console.log(sbstr);

let myFav = 'My favorite color is green and green is awesome color'; //only work with first match
let newColor = myFav.replace('green', 'blue');
// console.log(newColor);
//replace case sensitive  
let checkCase = myFav.replace('Green', 'black'); // G uppercase dewar karone match hoy nai. 
// console.log(checkCase);
let checkCaseWithFlag = myFav.replace(/Green/i, 'black'); // akta flag dewar  jonno kaj kortese  
// console.log(checkCaseWithFlag);

let replaceAllMatch = myFav.replace(/green/g , 'yellow'); //global match 
// console.log(replaceAllMatch);
