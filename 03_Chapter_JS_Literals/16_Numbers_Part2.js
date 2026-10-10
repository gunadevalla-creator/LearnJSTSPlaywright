// --------------------------------------------------------
// 4. NUMERIC SEPARATORS (ES2021+)
// --------------------------------------------------------


let million = 1_000_000;
console.log("Million with numeric separator:", million); // 1000000

let binarySep = 0b1010_0001;
console.log("Binary with numeric separator:", binarySep); // 161

let octalSep = 0o12_34;
console.log("Octal with numeric separator:", octalSep); // 668

let hexSep = 0xFF_FF;
console.log("Hexadecimal with numeric separator:", hexSep); // 65535



// --------------------------------------------------------
// 5. BIGINT - For arbitrarily large integers
// --------------------------------------------------------

let big = 123456789012345678901234567890n;      // BigInt variable can be declared with 'n' at the end
let big2 = BigInt("123456789012345678901234567890");        // BigInt variable can also be created using the BigInt() constructor with a string representation of the number
let bigFromNum = BigInt(42);

console.log("BigInt literal:", big); // 123456789012345678901234567890n
console.log("BigInt from string:", big2); // 123456789012345678901234567890n
console.log("BigInt from number:", bigFromNum); // 42n

console.log("Data type of BigInt is:", typeof big); // "bigint"
