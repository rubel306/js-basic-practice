function findSmalest(num1, num2, num3){
    if(num1 < num2 && num1 < num3){
        return num1;
    }else if(num2 < num1 && num2 < num3){
        return num2;
    }else{
        return num3;
    }
}

const smaller = findSmalest(5, 500, 80);
console.log(smaller);
