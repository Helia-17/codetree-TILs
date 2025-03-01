// (!)최솟값을 가정
// (!)마지막까지 도달가능해야만 의미가 있음
// (!) prev가 -1이면 처음부터 break 될 수도 있음
// (!) 제일 처음과 끝은 무조건 밟아야 하므로 건너뛰면 안됨

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
// sorted는 node 20부터 사용 가능. 현재 node 18
const sortedArr = [...arr].sort((a,b) => a-b); // 오름차순으로 정렬
let ans = 101
for (let i = 0; i < n; i++) {
    let minMax = sortedArr[i]
    
    if (arr[0] > minMax || arr[n-1] > minMax) continue // 시간 줄이기

    let flag = false
    let prev = 0
    for (let j = 0; j < n; j++){ 
        if (j - prev > k) {
            break
        }
        if (arr[j] <= minMax) {
            prev = j
            if (j === n-1) flag = true
        }
    }
    if (flag) {
        ans = minMax
        break
    }
}
console.log(ans)