// Converting Strings to Numbers
// Converting Numbers to Strings
// Converting Dates to Numbers
// Converting Numbers to Dates
// Converting Booleans to Numbers
// Converting Numbers to Booleans

//Empty strings convert to 0.
// Anything else converts to NaN (Not a Number).


/***************** 
 * String to Number
 * *******************/
let a = "3.1414";
// let aNum = Number(a);
let aNum = +a; //The unary + operator can be used to convert a variable to a number:
console.log(typeof aNum);


/***************** 
 * Number to String
 * *******************/
let int = 345;
let intStr = String(int);
const intStr2 = int.toString();

console.log(typeof intStr2);



/***************** 
 * Booleans to Numbers
 * The global method Number() can also convert booleans to numbers.
 * *******************/
 Number(false)     // returns 0
 Number(true)      // returns 1

 /***************** 
 *  Booleans to Strings
 * The global method Number() can also convert booleans to numbers.
 * *******************/

  String(false)      // returns "false"
  String(true)       // returns "true"
  
//   The Boolean method toString() does the same.

false.toString()   // returns "false"
true.toString()    // returns "true"