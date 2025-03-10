const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
let cnt = 0
for (let i = 0; i < A.length; i++) {
    if (A[i] !== '(') continue
    for (let j = i; j < A.length; j++) {
        if (A[i] === '(' && A[j] === ')') cnt += 1
    }
}
console.log(cnt)