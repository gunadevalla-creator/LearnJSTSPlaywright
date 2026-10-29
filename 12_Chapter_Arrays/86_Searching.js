let results = ["pass", "fail", "pass", "error", "fail"];

let index_1 = results.indexOf("fail");
console.log(index_1);

let index_2 = results.indexOf("skip");
console.log(index_2);

// lastIndexOf — searches from the end
let lastindex_1 = results.lastIndexOf("fail");
console.log(lastindex_1);

// includes — returns boolean
let verify = results.includes("error"); // true
console.log(verify);