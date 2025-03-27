// (!) 범위를 확인하면 선호 온도 이하에서 작업량이 더 높을 수 있음
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, c, g, h] = input[0].split(' ').map(Number);
const ta = [], tb = [];
let min = 1000
let max = 0

for (let i = 1; i <= n; i++) {
    const [taValue, tbValue] = input[i].split(' ').map(Number);
    if (min > taValue) min = taValue
    if (max < tbValue) max = tbValue
    ta.push(taValue);
    tb.push(tbValue);
}

let ans = 0
for (let j = min - 1; j <= max; j++) {
  let sum = 0
  for (let l = 0; l < n; l++) {
    if (ta[l] > j) sum += c
    else if (ta[l] <= j && j <= tb[l]) sum += g
    else if (tb[l] < j) sum += h
  }
  if (ans < sum) ans = sum
}

console.log(ans)
