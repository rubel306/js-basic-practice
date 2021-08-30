//class with start with class keyword 
// always have to add constructor() method
//constructor method will call automatically 

// class Car {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

// }
class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        let date = new Date();
        return date.getFullYear() - this.year;
    }

}

const myCar = new Car('Prado', 2024);
const myCar2 = new Car('Toyota', 2012);
const myCar3 = new Car('BMW', 2012);
// console.log("My Car Name is: " + myCar.name + " and my car age is: " + myCar.year);
console.log("My car name is: "+ myCar2.name + " and age is " + myCar2.age());


