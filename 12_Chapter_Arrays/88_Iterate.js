let tests = ["pass", "fail", "skip"];

for (let i = 0; i < tests.length; i++) {
    const element = tests[i];
    console.log(element);
}

console.log("---------------Below For of-------------------")


for (const n of tests) {
    console.log(n);
    
}

console.log("---------------Below For each-------------------")


tests.forEach((m, i) => {
    console.log(`${i} : ${m}`);
});

// entries() — index + value

for (let [i, test] of tests.entries()) {
    console.log(i, test);
}


let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}
