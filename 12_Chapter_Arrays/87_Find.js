let nums = [10, 27, 36, 45];

let find = nums.find(temp => temp > 20);
console.log(find);

// findIndex
let index = nums.findIndex(n => n > 27);
console.log(index);

let last = nums.findLast(n => n > 18);
console.log(last);

let lastindex = nums.findLastIndex(n => n > 18);
console.log(lastindex);
