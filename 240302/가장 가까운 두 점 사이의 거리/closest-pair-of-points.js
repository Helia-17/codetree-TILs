const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = +input[0].split(" ").map(Number)
let list = input.splice(1).map(row => row.split(" ").map(Number))

function solution() {
    let min = 2000000
    for (let [x1, y1] of list) {
        for (let [x2, y2] of list) {
            if (x1 === x2 && y1 === y2) continue
            let dis = Math.abs(x1 - x2)**2 + Math.abs(y1 - y2)**2
            if (dis < min) min = dis
        }
    }
    console.log(min)
}
solution()