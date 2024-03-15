const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let [n, k] = input[0].split(" ").map(Number)
let list = input.slice(1).map(Number)

function solution() {
    let max = 0
    for (let [idx, i] of list.entries()) {
        let cnt = 1
        for (let [idx2, j] of list.entries()) {
            if (idx === idx2) continue
            if (Math.abs(i  - j) < k) cnt += 1
        }
        if (cnt > max) max = cnt
    }
    console.log(max)
}
solution()