const str = "This is our beautiful country called Bangladesh"
const strPosition = str.indexOf('country');
console.log(strPosition); // jodi index na pawa jay taile -1 return korbe. 

const strSearch = str.search('beautiful'); //will return index position. 
console.log(strSearch);

//includes()// string er modde ai value ta ase kina seta true/false maddome jana jabe. takle true na takle false return korbe 

const strIncludes = str.includes('our');
console.log(strIncludes);


//math() // regular expression use kore match items gula dekha jabe. 
let text = "The rain in SPAIN stays mainly in the plain";
const textMatch = text.match(/ain/g)    // Returns an array [ain,ain,ain]
console.log(textMatch);


//startsWith(); // akta string ai word diye shuru hoyese kina dekhte ai method use kora hy. 

let strStartWith = str.startsWith('This'); //return true
console.log(strStartWith);

//endsWith(); // akta string ai word diye shuru hoyese kina dekhte ai method use kora hy. 

let strEndsWith = str.startsWith('Bangladesh'); //return true
console.log(strEndsWith);
