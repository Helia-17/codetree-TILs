const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [n, m] = input.map(Number);
getGCD(n, m);

function getGCD (n, m) {
    let lcm = 1
    for (let i = 2; i < Math.min(n, m); i++) {
        if (n % i === 0 && m % i === 0) {
            lcm = i
        }
    }
    console.log(lcm)
}