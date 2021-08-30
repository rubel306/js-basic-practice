// var arr = ['Apple', 'Banana', 'Orange', 'Dates', 'Pinaple', 'Guaba'];

// //array length 
// var arrLength = arr.length;
// // console.log(arrLength); 

// // index and value from the array 
// arr.forEach(function(value, index){
//     console.log("Value: "+ value + " and index is: " + index);
// })

const numbers = [234, 234, 5234, 653, 634];
sum = 0;
const NewArr = numbers.forEach(function(value, index, arr){
    console.log("Value: " + value + " Index : " + index );
    console.log(sum += value);
})