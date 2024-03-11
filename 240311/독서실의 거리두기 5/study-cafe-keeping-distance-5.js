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
        for (let [idx, seat] of list.entries()) {
            if (idx === i || seat === 1) {
                if (idx !== 0 && cnt + 1 < min) min = cnt + 1
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