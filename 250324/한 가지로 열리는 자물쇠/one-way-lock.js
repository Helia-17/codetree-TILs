// (!) cnt 0에서부터 세기 또는 모든 조합에서 열리지 않는 경우만 빼기
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const [a, b, c] = input[1].trim().split(' ').map(Number);

let cnt = n * n * n
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    for (let l = 1; l <= n; l++) {
      if (Math.abs(a-i) > 2 && Math.abs(b-j) > 2 && Math.abs(c-l) > 2) {
        cnt -= 1
      }
    }
  }
}
console.log(cnt)