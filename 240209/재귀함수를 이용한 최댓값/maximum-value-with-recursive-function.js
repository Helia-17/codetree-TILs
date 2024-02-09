const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = +input[0]
let list = input[1].split(" ").map(Number)
let answer = -1

function solution(m) {
    if (m === n) return
    if (list[m] > answer) answer = list[m]
    solution(m+1)
}

solution(0)
console.log(answer)