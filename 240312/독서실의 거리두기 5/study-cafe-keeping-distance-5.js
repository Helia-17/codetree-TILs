const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = input[0].split(" ").map(Number)
let list = input[1].split("").map(Number)

function solution() {
    let max = 0
    for (let i = 0; i < n; i++) {
        let cnt = 0
        let min = 20
        if (list[i] === 1) continue
        let flag = false
        for (let [idx, seat] of list.entries()) {
            // idx가 i일 경우 이 자리에 한 명의 인원을 배치했다고  가정
            if (idx === i || seat === 1) {
                // [!] 아직 1이 나오기 전의 0은 세지 않기 위해 첫 1이 나오면 flag를 세움
                if (!flag) flag = true
                else {
                    if (cnt + 1 < min) min = cnt + 1
                }
                cnt = 0
            } else {
                cnt += 1
            }
        }
        if (min > max) max = min
    }
    console.log(max)
}
solution()