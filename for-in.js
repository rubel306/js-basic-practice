//for in array works with index 
// work with objects 

let names = [234, 52, 234, 1,33, 124, 54];
for(let name in names){
    console.log(name); //it returns index
    console.log(names[name]); //it returns value based in name index
}