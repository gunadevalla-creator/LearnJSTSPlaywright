# Learn JavaScript, TypeScript, and Playwright

This repository collects hands-on JavaScript learning examples and QA engineering materials. It includes prompt-engineering and test-planning references, plus a sample Java Selenium/TestNG framework.

## Repository contents

### `00_Chapter_Prompt_Eng`

Prompt-engineering references covering the RICE POT framework, problem statements, anti-hallucination guidance, and a reusable QA template. This chapter also contains a VWO login test plan and a sample Java Selenium/TestNG framework.

### `01_Chapter_JS_Basics`

Introductory JavaScript examples, including a Hello World program and basic math.

### `02_Chapter_JS_Keywords_Identifiers`

Examples and interview questions about the JavaScript engine, keywords, identifiers, naming rules, and comments.

### `03_Chapter_JS_Literals`

Examples covering JavaScript literals, `null` and `undefined`, numeric literal formats, numeric separators, `BigInt`, `Infinity`, and `NaN`.

### `04_Chapter_JS_Operators`

Examples introducing operators and operands, assignment, arithmetic, string concatenation, comparisons (including loose and strict equality and type coercion), and logical operations (`&&`, `||`, and `!`). Conditional and nested ternary examples demonstrate decision-making expressions, with additional comparison practice questions and `typeof` examples.

### `05_Chapter_JS_Incre_Decr_Op`

Examples covering pre- and post-increment and decrement, expressions that combine increment operators, and the nullish coalescing operator (`??`).

### `06_Chapter_JS_if_else_Condition`

Examples of `if`/`else` and nested conditions, multiple `if`/`else` branches, and the ternary conditional operator.

### `07_Chapter_Switch`

Examples using `switch` to handle status codes and grouped cases, along with switch-based exercises.

### `08_Chapter_UserInput`

Examples reading user input with `prompt-sync`, Node.js `readline`, and standard input using the `fs` module.

### `09_Chapter_For_Loops`

Starter chapter for examples on `for` loop iteration.

## Running the JavaScript examples

Install [Node.js](https://nodejs.org/), then run an example from the repository root:

```sh
node 01_Chapter_JS_Basics/01_Helloworld.js
```

For example, to run the logical operators lesson:

```sh
node 04_Chapter_JS_Operators/23_logical_Op.js
```

To run the nullish coalescing example:

```sh
node 05_Chapter_JS_Incre_Decr_Op/45_Nullish_Op.js
```

The user-input examples that use `prompt-sync` require installing the project dependencies first:

```sh
npm install
```

For example, run a switch lesson or read input from the terminal:

```sh
node 07_Chapter_Switch/50_Switch.js
node 08_Chapter_UserInput/60_Node_UserInput.js
node 08_Chapter_UserInput/62_FS_readFile.js
```

The input examples wait for terminal input; the standard-input example ends when the input stream is closed (Ctrl+D on macOS/Linux, or Ctrl+Z then Enter on Windows).

Each JavaScript file is a standalone learning example and can be run in the same way.

## Running the Selenium sample tests

The sample Maven project is in `00_Chapter_Prompt_Eng/Selenium_Framework`. With Java 17 and Maven installed, run:

```sh
cd 00_Chapter_Prompt_Eng/Selenium_Framework
mvn test
```
