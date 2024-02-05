const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [n, m] = input.map(Number);
getLCM(n, m);

function getGCD (n, m) {
    let lcm = 1
    // [!] n, m이 같은 경우, i < Math.min(n. m)이 아니라 i <= Math.min(n. m)이어야 한다.
    for (let i = 2; i <= Math.min(n, m); i++) {
        if (n % i === 0 && m % i === 0) {
            lcm = i
        }
    }
    return lcm
}

function getLCM (n, m) {
    let gcd = getGCD(n, m)
    console.log(Math.floor(n * m  / gcd))
}