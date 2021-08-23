var names = ['Rubel', "Rumen", "Ruhul", "Rohim", "Rahman", "Rajon", "Rayhan", "Rubel", "Rayhan", "Ruhul", "Rohim"];

function removeDuplicte(names){
    var uniqueNames = [];
    for(const element of names){
        if(uniqueNames.indexOf(element) == -1){
            uniqueNames.push(element);
        }
    }
    return uniqueNames;
}
console.log(names);
console.log(removeDuplicte(names));
