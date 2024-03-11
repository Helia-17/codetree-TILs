const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = input[0].split(" ").map(Number)
let list = input[1]

function solution() {
    let max = 0
    for (let i = 0; i < n; i++) {
        let cnt = 0
        let min = 20
        if (list[i] === '1') continue
        for (let seat of list) {
            if (seat === '1') {
                if (cnt !== 0 && cnt < min) min = cnt
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