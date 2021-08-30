var names = ['Rubel', 'Nurul', 'Mijan', 'Fahim', 'Mustofa'];

console.log(names);
names.push('Emon');
names.push('Sojoy');
names.pop(); // remove items form last 
console.log(names);

//shift() // remove item from first position
//unshift() //add item at first
names.unshift("sujon"); // add new items at the begaining 
console.log(names)
names.shift();
console.log(names)