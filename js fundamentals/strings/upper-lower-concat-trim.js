let myFav = 'My favorite color is green and green is awesome color';
let textUppercase = myFav.toUpperCase();
console.log(textUppercase);

let textLowerCase = myFav.toLowerCase();
console.log(textLowerCase);

//concat method (); 
let concat = textUppercase.concat(' and  ', textLowerCase);
console.log(concat);

//use trim() method 

let trimWords =  "              Hello      ";
let Trim = trimWords.trim(); //trim() method remove all white spaces
console.log(Trim);


// JavaScript String Padding

//padStart () // ai method akta string er age kisu text addkore dibe. koy length add korbe bole daya jay first paramter diye, and second paramter holo ki diye fill korbe. 
let text = "5";
let textWithPadding = text.padStart(4, 0); //padStart ()
console.log(textWithPadding); //0005

// padEnd() // first paramter hobe koy length hobe and 2 hobe ki diye oi length fill korbe. 

let textTwo = '5';
let textTwoWithPaddingEnd = textTwo.padEnd(4, 0);
console.log(textTwoWithPaddingEnd); //5000

// Extracting String Characters
const myName = "Rubel Hasan";
console.log(myName.charAt(0));//R //0 index a kun character ase aita dekhabe. 
//character er code dkhete hole. 
//charCodeAt();
console.log(myName.charCodeAt(0)); // 82

//another way to access first later. 
console.log(myName[0]); //R , myName variable theke first index later dekhabe. 


//convert string to array. 

let strings = "Hello worlds";
let stringToArray = strings.split(''); //split character // space diye korle duita alada korbe space diye. 
console.log(stringToArray); 