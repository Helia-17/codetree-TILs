// (!) 선분의 범위 (-100 ~ 100)에 주의
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = input.slice(1).map(line => line.trim().split(' ').map(Number));
const arr = new Array(200+1).fill(0)
for (let [a, b] of segments) {
  for (let i = a + 100; i <= b + 100; i++) {
    arr[i] += 1
  }
}
console.log(Math.max(...arr))