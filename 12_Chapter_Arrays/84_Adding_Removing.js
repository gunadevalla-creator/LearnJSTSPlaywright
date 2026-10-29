let arr = [1,2,3,4];

console.log(arr.length);

// Add in the End

arr.push(5);
console.log(arr);

//Remove in the End

arr.pop();
console.log(arr);

//Add
arr.push(5,6);
console.log(arr);

//Add in the front
arr.unshift(0);
console.log(arr);

//Remove in the front
arr.shift(5);
console.log(arr);

//Splice
arr.splice(2,2);
console.log(arr);

arr.splice(2,0,99);
console.log(arr);

arr.splice(1,2,11,22);
console.log(arr);
