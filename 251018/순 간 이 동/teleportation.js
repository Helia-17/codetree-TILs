// A->B or A->x->y->B or A->y->x->B
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b, x, y] = input[0].split(' ').map(Number);

const arr = []
arr.push(Math.abs(b-a))
arr.push(Math.abs(x-a) + Math.abs(b-y))
arr.push(Math.abs(y-a) + Math.abs(b-x))
console.log(Math.min(...arr))