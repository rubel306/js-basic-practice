/***************** 
 * First class function 
***************************************/

// function can be store in a variable 
// function can be store in an Array
// function can be store in Object
// we can create function as we need 


//store a function in a variable 
var add =   function add(a, b){
    return a+b;
}
console.log(add(5,3));

let arr= []; 
arr.push(add); //push a function into an array.
console.log(arr[0](5, 5));

let obj = {
    sum: add //added funciton into object 
}

console.log(obj.sum(5, 20));

//create new function with setTimeout

setTimeout(function(){
    console.log("This is set time out function");
}, 1000);