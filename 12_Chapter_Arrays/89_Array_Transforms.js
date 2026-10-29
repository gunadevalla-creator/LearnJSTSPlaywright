let scores = [63, 72, 81, 99, 54];

let grades = scores.map(s => s > 70 ? "Pass" : "fail");
console.log(grades);

// Filter
let passing = scores.filter(s => s >= 70);
console.log(passing);