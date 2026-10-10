// ============================================================
// Topic: All Number Types in JavaScript
/*
  In JavaScript, numbers are ALWAYS of type "number" (except BigInt).
  There is no separate int, float, double, etc.
*/

// --------------------------------------------------------
// 1. INTEGER LITERALS
// --------------------------------------------------------

// Decimal (Base 10) - most common
let decimal = 42;
console.log("Decimal:", decimal); // 42

// Binary (Base 2)
let binary = 0b101010; // 0b prefix indicates binary
console.log("Binary:", binary); // 42

// Octal (Base 8)
let octal = 0o52; // 0o prefix indicates octal
console.log("Octal:", octal); // 42

// Hexadecimal (Base 16)
let hexadecimal = 0x2A; // 0x prefix indicates hexadecimal
console.log("Hexadecimal:", hexadecimal); // 42

// --------------------------------------------------------
// 2. FLOATING-POINT LITERALS
// --------------------------------------------------------

let float1 = 3.14;
let float2 = -0.45;
let float3 = .5; // Leading zero is optional, but avoid it for clarity
let float4 = 5.; // Trailing zero is optional, but avoid it for clarity

console.log("Floating-point numbers:", float1);
console.log("Floating-point numbers:", float2);
console.log("Floating-point numbers:", float3);
console.log("Floating-point numbers:", float4);


// --------------------------------------------------------
// 3. Exponential notation
// --------------------------------------------------------


let exp1 = 1.5e3;   // 1.5 * 10^3 = 1500
let exp2 = 1.5e-3;  // 1.5 * 10^-3 = 0.0015
let exp3 = 2E10;    // 2 * 10^10 = 20000000000

console.log("Exponential 1.5e3:", exp1);   // 1500
console.log("Exponential 1.5e-3:", exp2);  // 0.0015
console.log("Exponential 2E10:", exp3);    // 20000000000