// Problem 5: will stop the loop if the array has any negative number and returns all the positive number before the negative number. 

var nums = [2, 3,56, 234, 63, 22, 232, 25, -1, 434, 5632, 63];

function onlyPositive(arr){
    var newArr = [];
    for(const num of nums){
        if(num < 0){
            break;
        }
        newArr.push(num);
    }
    return newArr;
}

const values = onlyPositive(nums);
console.log(values);