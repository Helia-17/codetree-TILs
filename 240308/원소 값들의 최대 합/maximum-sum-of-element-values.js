const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let [n, m] = input[0].split(" ").map(Number)
let list = input[1].split(" ").map(Number)

function solution() {
    let max = 0
    for (let p of list) {
        let cur = p
        let total = 0
        for (let i = 0; i < m; i++) {
            total += cur
            // 다음 원소값 지정
            cur = list[cur - 1]
        }
        if (total > max) max = total
    }
    console.log(max)
}
solution()