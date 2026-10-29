let browser = ["Safari", "Chrome", "Opera", "Firefox"];

browser.pop();
console.log(browser);

let remove = browser.shift();
console.log(remove);

console.log(browser);

console.log("=====================================================");

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);

    if (browser[i] === "Opera") {
        console.log("Opera is Present");

    }

}