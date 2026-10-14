// Nested Ternary
// Multiple Conditions
// age = 26
// age > 18 -> Go Goa, age > 25 -> Drink

let age = 26;

let is_guna_enjoy = (age > 18) ? (age > 23 ? "Goa & Drink" : "No Drink, Only Goa") : "No";

console.log(`Guna Can enjoy, ${is_guna_enjoy}`);

/* let is_guna_enjoy = ( age > 18) ? (age > 25 ? "Goa & Drink" : "No Drink,ONly Goa") : "No Goa";
console.log(`Guna can Enjoy ${is_guna_enjoy}`); */
