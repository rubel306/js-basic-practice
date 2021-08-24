//Problem 1. feet to inch  ==> conversion

// function feetToInch(feet){
//     const inch = feet * 12;
//     return inch; 
// }

// const myInch = feetToInch(5);
// console.log(myInch);

//========================================
//Problem 2: centimeter to meter ==> conversion 
// function centimeterToMeter(cm){
//     const meter = cm/100;
//     return meter; 
// }
// const myCM = centimeterToMeter(1500);
// console.log(myCM);


//=================================================
//Problem 3: page requirements for book ==> calculation 

// function pageRequirements(book1, book2, book3){
//     const book1Pages = 100;
//     const book2Pages = 200;
//     const book3Pages = 300;
//     const pagesForBook1 = book1 * book1Pages;
//     const pagesForBook2 = book2 * book2Pages;
//     const pagesForBook3 = book3 * book3Pages;
//     const totalPagesNeed = pagesForBook1 + pagesForBook2 + pagesForBook3;
//     return totalPagesNeed;
// }

// let myBooks = pageRequirements(0, 0, 3);
// console.log(myBooks);


//====================================
//Problem 4: Create friends array. Find out long names from this array and return this name. 

// const names = ["Rubel Hasan Bhuiya", "Alomgir", "Jahirul", "Abdul Mumin", "Abdur Rahim"];

// var friendName ='';
// function bestFriend(arr){
//     for(const name of names){
//         if( name.length > friendName.length ){
//             friendName= name;
//         }
//     }
//     return friendName;
// }

// const myBestFriend = bestFriend(names);
// console.log(myBestFriend);


//============================
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