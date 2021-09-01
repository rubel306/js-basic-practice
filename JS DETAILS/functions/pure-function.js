// function will return the same result if given the same argument
// it does not cause any side effect 


//this is called pure function 
function sqr(n){
    return n*n;
}
console.log(sqr(5));
console.log(sqr(8));
console.log(sqr(9));

//
var a = 23;
function value(){
    a = 200;
}
console.log(a);
value(); //it change the vale of variable a . so it won't be a pure function 

console.log(a);