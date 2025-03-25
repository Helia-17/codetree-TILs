const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);
let max = 0
for (i=x; i<y; i++) {
  let sum = String(x).split('').map(Number).reduce((acc, cur) => acc + cur, 0)
  if (max < sum) max = sum
}
console.log(max)