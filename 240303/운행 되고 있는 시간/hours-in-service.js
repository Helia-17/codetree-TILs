const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = +input[0].split(" ").map(Number)
let list = input.splice(1).map(row => row.split(" ").map(Number))

function solution() {
    let max = 0
    for (let [firedS, firedE] of list) {
        let arr = new Array(1000).fill(0)
        for (let [s, e] of list) {
            if (firedS === s && firedE === e) continue
            for (let t = s; t < e; t++) {
                arr[t] = 1
            }
        }
        let time = arr.filter(t => t === 1).length
        if (time > max) max = time
    }
    console.log(max)
}
solution()