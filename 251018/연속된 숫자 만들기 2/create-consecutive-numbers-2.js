// 최대 두번 이동. 이미 연속(0) or 2개 연속(1) or 두 수가 2차이(1) or 그 외(2)
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].split(" ").map(Number);
const sorted = arr.slice().sort((a,b)=> a-b)
const sum = arr.reduce((acc, cur) => acc + cur, 0)
if (sorted[1] - sorted[0] === 1 && sorted[2] - sorted[1] === 1) console.log(0)
else if (sorted[1] - sorted[0] <= 2 || sorted[2] - sorted[1] <= 2) console.log(1)
else console.log(2)