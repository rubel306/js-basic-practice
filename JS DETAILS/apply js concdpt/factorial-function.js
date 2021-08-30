function factorial(factoNumber){
    var facto = 1; 
    for(var i = 1; i <= factoNumber; i++ ){
        facto *=i; 
    }
    return facto; 
}

console.log(factorial(4));