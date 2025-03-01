// (!) 안겹치는 선분을 제거하는 것으로는 동일한 두개의 선분이 다른 선분으로부터 떨어져 있는 경우를 잡을 수 없음
// (!) 모두 서로서로 겹치는지가 아니라 모든 선분이 "한 점"에서 겹치는지를 체크해야
// (!) 조건문 바꿀때는 신중하게 체크할 것
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
let x1List = [], x2List = [];
for (let i = 1; i <= n; i++) {
    const [x1, x2] = input[i].split(' ').map(Number);
    x1List.push(x1);
    x2List.push(x2);
}
let minX1 = Math.min(...x1List)
let maxX2 = Math.max(...x2List)

let flag = false
for (let j = minX1; j < maxX2; j++) {
    let cnt = 0
    for (let l = 0; l < n; l++) {
        if (x1List[l] > j || j > x2List[l]) { // 안겹치는 선분
            cnt += 1
            if (cnt > 1) break
        }
    }
    if (cnt <= 1) {
        flag = true
        break
    }
}

console.log(flag? "Yes" : "No")