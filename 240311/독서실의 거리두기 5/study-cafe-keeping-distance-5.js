const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = input[0].split(" ").map(Number)
let list = input[1]

function solution() {
    let min = 20
    let cnt = 0
    for (let seat of list) {
        if (seat === '1') {
            if (cnt !== 0 && cnt + 1 < min) min = cnt + 1
            cnt = 0
        } else {
            cnt += 1

        }
    }
    console.log(min)
}
solution()