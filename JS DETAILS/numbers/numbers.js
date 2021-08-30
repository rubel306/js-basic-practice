// let num = 34;
// let num2 = 53;
// let result = num + num2;

// let num3 = '20';
// let num4 = 10;
// console.log(num3+num4); // 2010 // string + number = string. 

// let num5 = 34;
// let num6 = '23';
// console.log(num5 + num6); // 3423 // number + sting = sting. + operator use for concatantion string 

// let x = 20;
// let y = 40;
// let z = "This is sting " + x + y; //output: this is stirng  2040
// console.log(z);

// let xyz = x + y +z;
// console.log(xyz); //60 thi is... // duita variable age jug hye gese. then string concatanation hoyese


//math operation with numeric string

let x = '100';
let y = 10;
let z = x / y;
console.log(z); // 10 // js interpreter try kore string ke matha convert kore operation ti korte. 

// we can do -, *, / with numeric string 

let a = '10';
let b = '20';
let c = a*b;
console.log(c); //200 // avaScript will try to convert strings to numbers in all numeric operations: 

//Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

let ab = 'Apple';
let bc = '5';
let zz = ab * bc;
console.log(zz); //NaN // not a valid number. 