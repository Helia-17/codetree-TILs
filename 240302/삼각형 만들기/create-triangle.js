const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = +input[0].split(" ").map(Number)
let list = input.splice(1).map(row => row.split(" ").map(Number))

function solution() {
    let max = 0
    for (let [x1, y1] of list) {
        for (let [x2, y2] of list) {
             for (let [x3, y3] of list) {
                if (x1 === x2 && y1 === y3 && x2 !== x3 && y2 !== y3) {
                    let size = Math.abs(y2 - y1) * Math.abs(x3 - x1)
                    if (size > max) max = size
                }
            }
        }
    }

    console.log(max)
}
solution()