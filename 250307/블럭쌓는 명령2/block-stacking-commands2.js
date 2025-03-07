const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));
const arr = new Array(n+1).fill(0)
for (let [a, b] of segments) {
  for (let i = a; i <= b; i++) {
    arr[i] += 1
  }
}
console.log(Math.max(...arr))