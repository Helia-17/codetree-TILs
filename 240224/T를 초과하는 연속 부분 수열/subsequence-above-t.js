const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let [n, t] = input[0].split(" ").map(Number)
let list = input[1].split(" ").map(Number)
function solution() {
    let max = 0
    let cnt = 0
    for (let num of list) {
        if (num > t) {
            cnt += 1
        } else {
            if (cnt > max) max = cnt
            cnt = 0
        }
        if (cnt > max) max = cnt
    }
    console.log(max)
}

solution()