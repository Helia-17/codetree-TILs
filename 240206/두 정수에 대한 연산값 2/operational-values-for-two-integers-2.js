const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [a, b] = input.map(Number);

function solution(a, b) {
    let x;
    let y;
    if (a < b) {
        x = a + 10;
        y = b * 2;
    } else {
        x = a * 2;
        y = b + 10;
    }
    return [x, y]
}

let [ x, y ] = solution(a, b)

console.log([x, y].join(" "))