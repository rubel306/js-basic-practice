function sum(){
    const a = 20;
    const b = 30;

     return function(){
        //aikhane a, b holo closure karon a, b onno akta function scope theke ashese. 
        console.log(a, b);
    }
}
