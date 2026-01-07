const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const blocks = input.slice(1, n + 1).map(Number);

// Please Write your code here.
let sum = blocks.reduce((prev,acc)=>prev+acc ,0)
const res = parseInt(sum / n)
let ans = 0
blocks.forEach(block => {
    if (block>res) {
        ans += block - res
    }
})
console.log(ans)