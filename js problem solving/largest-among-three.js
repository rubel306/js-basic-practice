function findLargest(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }else if(num2 > num1 && num2 > num3){
        return num2;
    }else{
        return num3;
    }
}

const largerNumber = findLargest(55550, 2585, 80);
console.log(largerNumber);