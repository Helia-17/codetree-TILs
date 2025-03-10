const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const MAX = Number.MAX_SAFE_INTEGER;
let min = MAX
for (let i=0; i<n; i++) {
  let sum = 0
  for (let j=0; j<n; j++) {
    sum += arr[j] * Math.abs(i - j)
  }
  if (sum < min) min = sum
}
console.log(min)