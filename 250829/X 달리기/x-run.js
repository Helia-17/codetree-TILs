// 1m/s부터 최고속력까지의 합 * 2 - 최고속력이 X보다 작아야 해당 최고속력만큼 속도를 낸 뒤에 1m/s로 도착할 수 있음
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let x = Number(input[0]);
let i = 1;
let max = 1
let s = 0
let maxSum = 0 // 1~최고속력~1 까지 달린 거리

// 최고속력 구하기
while (i < x) {
    if (x - i <= 0) break
    let sum = 0
    for (let j = 1; j <= i; j++) {
        sum += j
    }
    sum = sum * 2 - i
    if (sum > x) break
    else {
        max = i
        s = i * 2 - 1
        i += 1
        maxSum = sum
    }
}

x -= maxSum

// 최고속력이 3일때, 3,1 또는 2,2으로 달리는 것 중 어떤 쪽이 추가되어도 상관없으므로 전자로 로직 구현
while (x > 0) {
    if (x - max < 0) {
        max -= 1
    } else if ( x - max === 0) {
        s += 1
        x -= max
    }
}

console.log(s)


// 구현 방식 고민
// 3m (1,1,1) / 4m (1,2,1) / 5m (1,2,1,1) / 9m (1,2,3,2,1) / 10m (1,2,3,2,1,1)
// 속도유지 없이 최고속력까지 올렸다가 1까지 내릴 때 가능한 최고속력을 먼저 구하고, 거리가 남을 경우의 추가 로직 구현