const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const [a, b, c] = input[1].trim().split(' ').map(Number);

let cnt = 0
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    for (let l = 1; l <= n; l++) {
      if (Math.abs(a-i) <= 2 || Math.abs(b-j) <= 2 || Math.abs(c-l) <= 2) {
        cnt += 1
      }
    }
  }
}
console.log(cnt)