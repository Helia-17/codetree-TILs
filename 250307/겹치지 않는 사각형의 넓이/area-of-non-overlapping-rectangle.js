// (!) 이중 배열 생성은 Array.from(arrayLike, mapFn)
// (!) 변수는 for문의 개수만큼 필요 i, j, l..
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rects = input.map(line => line.split(' ').map(Number));
let cnt = 0
const arr = Array.from(Array(201), ()=>Array(201))

for (let i = rects.length - 1; i >= 0; i--) {
  let [x1, y1, x2, y2] = rects[i]
  for (let j = x1 + 100; j < x2 + 100; j++) {
    for (let l = y1 + 100; l < y2 + 100; l++) {
      if (arr[j][l] === 1) {
        continue
      }
      if (i !== rects.length - 1) cnt += 1 
      arr[j][l] = 1
    }
  }
}

console.log(cnt)