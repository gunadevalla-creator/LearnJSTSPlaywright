# Learn JavaScript, TypeScript, and Playwright

This repository collects hands-on learning examples and QA engineering materials. It currently includes JavaScript fundamentals, prompt-engineering and test-planning references, and a sample Selenium/TestNG framework.

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

Reserved for JavaScript operator lessons.

## Running the JavaScript examples

Install [Node.js](https://nodejs.org/), then run an example from the repository root:

```sh
node 01_Chapter_JS_Basics/01_Helloworld.js
```

Each JavaScript file is a standalone learning example and can be run in the same way.

## Running the Selenium sample tests

The sample Maven project is in `00_Chapter_Prompt_Eng/Selenium_Framework`. With Java 17 and Maven installed, run:

```sh
cd 00_Chapter_Prompt_Eng/Selenium_Framework
mvn test
```
