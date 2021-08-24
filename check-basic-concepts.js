// var name = "Rubel Hasan";
// var number1 = 150;
// var number2 = 150;
// let isValid = true;
// var sum = 0;
// simple Math operation 
// console.log("Summation of two numbers: ", number1 + number2);
// console.log("Subtraction of two numbers: ", number1 - number2);
// console.log("Multiplication of two numbers: ", number1 * number2);
// console.log("Division of two numbers: ", number1 / number2);
// console.log("Reminder: ", number1 % number2);


//comparison
// var num1 = 10;
// var num2 = 30;
// if(num1 > num2){
//     console.log("Number one is greater than num2");
// } else if(num1 < num2){
//     console.log("Number one is less than number one. ");
// } else if(num1 == num2){
//     console.log("Both are equal");
// }


// print 7 to 19 odd number using for loop 

// for (let i = 7; i<=19; i+=2){
//     console.log(i);
// }


// Print 7 to 19 odd number using while loop 
// 
// let i = 7; 
// while(i<=19){
//     console.log(i);
//     i+=2;
// }


// var arr = [10, 25, 15, 25, 45, 25, 45,75, 85, 75 , 65, 895, 85];
// arr[3] = 1000;
// arr.push(5000, 700, 900, 500, 800,600,400);
// arr.pop();
// console.log(arr.indexOf(45));
// if(arr.indexOf(1) != -1){
//     console.log("Item is present");
// }else{
//     console.log("Item not present in this array");
// }

// for(const number of arr){
//     if(number > 80){
//         console.log(number);
//     }
    
// }

// function with three para meters and multiply numbers and return result

// function multiply(num1, num2, num3){
//     return num1 * num2 * num3;
// }
// const result = multiply(5, 5, 5);
// console.log(result);

var Person = {
    name: "Rubel ",
    age: 25,
    Address: {
        city: "Sylhet",
        homeTown: "Sunamganj",
        word:1
    },
    skils: 'Diploma'
}

Person.age = 26;

console.log(Person.age);
//show all object properties 
for(const props in Person){
    console.log(`${props}: ${Person[props]}`);
}