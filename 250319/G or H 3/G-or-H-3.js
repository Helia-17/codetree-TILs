// (!) max가 k보다 작을 경우를 고려해야 함
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const people = Array(10001).fill(0);
let max = 0
for (let i = 1; i <= n; i++) {
  const [x, c] = input[i].split(' ');
  const point = c === 'G'? 1 : 2
  const num = Number(x)
  if (num > max) max = num
  people[num] = point;
}
let ans = 0
for (let j = 1; j < Math.max(max, max - k + 2); j++) {
    let total = 0
    for (let l = j; l < j+k+1; l++) {
        total += people[l]
    }
    if (total > ans) ans = total
}

console.log(ans)