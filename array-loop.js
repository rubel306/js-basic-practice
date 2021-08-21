var arr = [2,4, 6,7, 7, 7, 7,7,33, 77,8,33,4,5,55];

// for(let i =0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// var i = 0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }

//traverse each elements from array . 
// //for and of 
// for(const element of arr){
//     console.log(element);
// }


// var names = ['Rubel', 'Hasan', 'Layek', 'Sharmin', 'Begum', 'Sultana'];
// for(let name of names){
//     console.log(name);
// }

// var arr2 = [10, 20, 30, 40, 50];
// for(let item of arr2){
//     item+=10;
//     console.log(item);
// }

var myName = "Rubel Hasan";
for(const later of myName){
    console.log(later);
}

var newArray = Array.from(myName);
console.log(newArray);