// function myName(name){
//     console.log(name);

// }

// myName("Rubel Hasan");
// myName("Rubel");


// //another example 
// var my ={
//     name:'Rubel',
//     age:35,
//     email:'7rubelhasan306@gmail.com'
// }
// function aboutMe(data, callback){
//     console.log(data.name);
//     if(data.age >= 18){
//         callback(data.age); 
//     }else{
//         console.log("You are under 18")
//     }
    
// }

// aboutMe(my, function(age){
//     console.log("Age from callback: ", age)
// })


var a = 10;
var b = 20;

function numbers(a, b, callback){
    var c = a+b;
    var d = a-b; 
    callback(c,d);
}

numbers(30, 20, function(a, b){
    console.log(a+b);
});

numbers(40, 30, function(a, b){``
    console.log(a - b )
})