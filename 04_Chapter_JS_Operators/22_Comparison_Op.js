// Compasion Operator (will always result in the boolean, true or false)

// = - Assignment Operator

// == -> losse comparsion  (it compares only type)
// === -> strict comparsion (it compares both type and content)

//pizza == pizza; (type)

//dominopizza === pizzahutpizza; (type and content)

let a = 5;
let b = 5;

console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

// ==	--> Loose Equality	--> Checks value only (ignores data type)
// ===	--> Strict Equality	--> Checks value AND data type

console.log(5 == "5");  //Checks value only (ignores data type)

console.log(5 === "5"); //Checks value & data type

console.log(5 == "7");

console.log(5 === 5);

// ! --> not a character

// !=	--> Loose Inequality --> 	Checks if values are different (ignores type)
// !==	--> Strict Inequality --> 	Checks if values OR types are different

console.log(5 != "5");  //False, Checks if values are different, ignore type

console.log(5 !== "5"); //True, Checks if values OR types are different

console.log(5 != 7);    //True, Checks if values are different, ignores type

console.log(5 !== 7);   ///True, Checks if values OR types are different

console.log(5 !== 5);   //False, type & value are same

// There is no comparison in the JS like !===
