// The break statement, without a label reference, can only be used to jump out of a loop or a switch.

for(let i = 1; i< 20; i++){
    if(i === 5){
        console.log(i);
        break;
    }
    console.log(i);
}