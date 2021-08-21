function findInterest(principal,rate = 5, year){
    const totalInterest = (principal * rate * year) / 100;
    return totalInterest;
}

const interest5K = findInterest(100, 6, 1);
console.log(interest5K);