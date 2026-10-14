let temp = 25;

let feel = (temp >= 40) ? "Very Hot" :
                (temp >= 30) ? "Hot" :
                    (temp >= 20) ? "Warm" : "Cool"

console.log(`Climate is ${feel}`);