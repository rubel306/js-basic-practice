// Problem 4: Create friends array. Find out long names from this array and return //// this name. 

const names = ["Rubel Hasan Bhuiya", "Alomgir", "Jahirul", "Abdul Mumin", "Abdur Rahim"];

var friendName ='';
function bestFriend(arr){
    for(const name of names){
        if( name.length > friendName.length ){
            friendName= name;
        }
    }
    return friendName;
}

const myBestFriend = bestFriend(names);
console.log(myBestFriend);