const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = input[0].split(" ").map(Number)
let [startA, startB] = input[1].split(" ").map(Number)
let list = input.slice(2).map(row => row.split(" ").map(Number))

function solution() {
    let min = 10000
    let x = 0
    for (let i = startA; i < startB; i++) {
        if (i % 2 !== 0) continue
        x = parseInt(i / 2)
        let flag = true
        let total = i * 2
        for (let [a, b] of list) {
            if (a <= total && total <= b) {
                total = total * 2
            }
            else {
                flag = false
                continue
            }
        }
        if (flag && x < min) {
            min = x
        }
    }
    console.log(min)
}
solution()