const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let [n, k] = input[0].split(" ").map(Number)
let list = input.slice(1).map(Number)

function solution() {
    let max = 0
    for (let [idx, i] of list.entries()) {
        let arr = [i]
        for (let [idx2, j] of list.entries()) {
            let testArr = [...arr, j]
            let b = Math.max(...testArr)
            let s = Math.min(...testArr)
            if (idx === idx2) continue
            if (b - s <= k) {
                arr.push(j)
            }
        }
        if (arr.length > max) max = arr.length
    }
    console.log(max)
}
solution()