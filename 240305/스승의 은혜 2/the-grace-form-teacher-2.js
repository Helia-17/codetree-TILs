const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let [n, b] = input[0].split(" ").map(Number)
let list = input.splice(1).map(Number)
// [*] 작은 것부터 오도록 정렬
list.sort((a, b) => a - b)

function solution() {
    let total = 0
    let cnt = 0
    for (let p of list) {
        if (total < b) {
            // [!] 예산이므로 작거나 같은지 비교
            if (total + p <= b) {
                total += p
                cnt += 1
            // 예산이 모자랄 경우 반값 쿠폰을 적용하면 가능한지 확인
            } else if (total + parseInt(p/2) <= b) {
                total += parseInt(p/2)
                cnt += 1
                break
            } else {
                break
            }
        }
    }
    console.log(cnt)
}
solution()