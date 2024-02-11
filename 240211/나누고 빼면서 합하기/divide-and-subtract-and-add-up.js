const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let [n, m] = input[0].split(" ").map(Number)
let list = input[1].split(" ").map(Number)
let answer = 0

function solution() {
    answer += list[m-1]
    if (m === 1) return
    if (m % 2 === 1) m -= 1
    else m /= 2
    
    solution()
}

solution()
console.log(answer)