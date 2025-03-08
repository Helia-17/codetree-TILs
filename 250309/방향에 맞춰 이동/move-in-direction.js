const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const moves = input.slice(1).map(move => move.split(" ")).map(([a,b]) => [a, Number(b)]);
const arr = {
    N: [0, 1],
    S: [0, -1],
    E: [1, 0],
    W: [-1, 0]
}
let x = 0
let y = 0

for (let [dir, num] of moves) {
    x += arr[dir][0] * num
    y += arr[dir][1] * num
}

console.log(x + " " + y)