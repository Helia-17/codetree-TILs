const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const movements = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
const arr = new Array(11).fill(-1)
let cnt = 0
for (let [idx, dir] of movements) {
  if (arr[idx] === -1) arr[idx] = dir
  else if (arr[idx] !== dir) {
    arr[idx] = dir
    cnt += 1
  }
}
console.log(cnt)