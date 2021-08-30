//find highest and lowest number from this array 
const nums = [234, 52, 53, 634, 64, 23, 63];
const sortNums = nums.sort(function(a, b){return a-b});
const lowest = sortNums[0];
const highest = sortNums[sortNums.length -1];
console.log(lowest);
console.log(highest);
