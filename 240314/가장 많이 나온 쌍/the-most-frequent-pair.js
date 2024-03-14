const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let [n, m] = input[0].split(" ").map(Number)
let list = input.slice(1).map(row => row.split(" ").map(Number))

function solution() {
    let max = 0
    for (let [idx, row] of list.entries()) {
        let cnt = 1
        for (let [i, row2] of list.entries()) {
            if (idx === i) continue
            row.sort((a, b) => a - b)
            row2.sort((a, b) => a - b)
            // [!] 배열의 내용을 비교하기 위해서는 배열의 요소를 하나씩 비교해야 합
            if (row[0] === row2[0] && row[1] === row2[1]) cnt += 1
        }
        if (cnt > max) max = cnt
    }
    console.log(max)
}
solution()