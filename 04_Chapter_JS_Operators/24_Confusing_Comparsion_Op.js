// Rule of thumb:
//   ==   → loose equality  (does type coercion, surprising)
//   ===  → strict equality (no coercion, what you usually want)

// ---------- 1. Empty string vs 0 vs "0"  (transitivity broken) ----------

console.log("" == 0);   //true, "" coerced to Number → 0

// Logic: One side is a number, so convert "" to a number.
// "" becomes 0. Is 0 == 0? Yes.


console.log("0" == 0);  //true, "0" coerced to Number → 0

// Logic: One side is a number, so convert "0" to a number.
// "0" becomes 0. Is 0 == 0? Yes.

console.log("" == "0"); // // false, both strings, compared as string only

//If you compare a String to a Number, JavaScript triggers coercion.
// But if you compare a String to a String, it stays in "string mode."



// === fixes it
console.log("" === 0);       // false
console.log("0" === 0);      // false
console.log("" === "0");     // false
