// (!) 이중 배열 생성은 Array.from(arrayLike, mapFn)
// (!) 변수는 for문의 개수만큼 필요 i, j, l..
// (!) 제한 조건의 변수 범위가 이전 문제와 다름
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rects = input.map(line => line.split(' ').map(Number));
let cnt = 0
const arr = Array.from(Array(2001), ()=>Array(2001))

for (let i = rects.length - 1; i >= 0; i--) {
  let [x1, y1, x2, y2] = rects[i]
  for (let j = x1 + 1000; j < x2 + 1000; j++) {
    for (let l = y1 + 1000; l < y2 + 1000; l++) {
      if (arr[j][l] === 1) {
        continue
      }
      if (i !== rects.length - 1) cnt += 1 
      arr[j][l] = 1
    }
  }
}

console.log(cnt)