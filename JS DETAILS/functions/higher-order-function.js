/**********************
 * HIGHER ORDER FUNCTION 
 * We can pass function as an arguments 
 * We can return functions from another function 
 ************************ */
function add(a, b){
    return a+b;
}

function times(a, b, func){
    const c = a+b;
    const d = a-b;

    function innerTimes(){
        const m = func(a,b);
        return c * d * m;
    }
    return innerTimes;
}

var multi = times(15, 6, add);
console.log(multi());