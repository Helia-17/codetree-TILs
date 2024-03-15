const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let [n, k] = input[0].split(" ").map(Number)
let list = input.slice(1).map(Number)
// [!] 최소값을 알기 위해 오름차순으로 정렬
list.sort((a,b) => a-b)

function solution() {
    let max = 0
    for (let [idx, i] of list.entries()) {
        let cnt = 1
        for (let [idx2, j] of list.entries()) {
            if (idx === idx2) continue
            // [!] 최솟값을 i로 정했으므로 그보다 작은 경우는 보지 않고, 최솟값보다 큰 j의 경우의 차만 확인
            if (j - i >= 0 && j - i <= k) {
                cnt += 1
            }
        }
        if (cnt > max) max = cnt
    }
    console.log(max)
}
solution()