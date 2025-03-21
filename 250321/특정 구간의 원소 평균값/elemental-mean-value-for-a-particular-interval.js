const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);
let cnt = 0
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    let total = 0
    let array = []
    for (let l = i; l <= j; l++) {
      total += arr[l]
      array.push(arr[l])
    }
    const avg = total / (j - i + 1)
    if (array.includes(avg)) cnt += 1
  }
}
console.log(cnt)