// (!) 선분의 범위 (-100 ~ 100)에 주의
// (!) 끝점에서 닿는 경우는 겹치는 것으로 생각하지 않으므로 시작점에 + 1
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = input.slice(1).map(line => line.trim().split(' ').map(Number));
const arr = new Array(200+1).fill(0)
for (let [a, b] of segments) {
  for (let i = a + 100 + 1; i <= b + 100; i++) {
    arr[i] += 1
  }
}
console.log(Math.max(...arr))