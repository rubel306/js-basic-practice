// let name = (param) => param + 10;
// console.log(name(10));

//traditional function 
// function add(a){
//     return a + 100; 
// }
// console.log(add(10));

// arrow function 
// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
    return a + 100;
}
// 2. Remove the body braces and word "return" -- the return is implied.
(a) => a + 100;
// 3. Remove the argument parentheses
a => a + 100;



////// another traditional function 
// Traditional Function
var a = 10;
var b = 20;
function add(a, b){
    return a + b + 100;
}


//similar arrow function 
// Arrow Function
(a, b) => a + b + 100;

//traditional function 

function muInfo(name, age){
    console.log(`My name is ${name} and his age is ${age}`);
}

//similar arrow function 

var myInfo = (name, age) =>{
    console.log(`My name is ${name} and my age is ${age}`)
}
myInfo('Rubel', 24);