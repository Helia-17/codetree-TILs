// (!) 이중 배열 생성은 Array.from(arrayLike, mapFn)
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
let cnt = 0
const arr = Array.from(Array(201), ()=>Array(201))
for (let [x1, y1, x2, y2] of rects) {
  for (let i = x1 + 100; i < x2 + 100; i++) {
    for (let j = y1 + 100; j < y2 + 100; j++) {
      if (arr[i][j] === 1) {
        continue
      }
      cnt += 1 
      arr[i][j] = 1
    }
  }
}

console.log(cnt)