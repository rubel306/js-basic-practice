function math(a, b, func){
    const c = a+b;
    const d = a-b;
    var res = func(c,d);
    return res;
}

function sum(a, b){
    return a + b;
}
function sub(a,b){
    return a - b;
}
function mul(a,b){
    return a * b; 
}

let add = math(5, 8, sum);
console.log(add);

let subValue = math(10, 5, sub);
console.log(subValue);

let mulValue = math(10, 5, mul);
console.log(mulValue);

//another way to multiply 
const anotheWay = math(50, 10, function(c, d){
    return c * d;
})
console.log(anotheWay);