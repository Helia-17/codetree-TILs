const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let [n, b] = input[0].split(" ").map(Number)
let list = input.splice(1).map(row => row.split(" ").map(Number))
// 선물과 배송비의 합이 적은 순으로 다시 정렬
list.sort((a, b) =>  a[0] + a[1] - b[0] - b[1])
function solution() {
    let max = 0
    for (let [disP, disS] of list) {
        let total = parseInt(disP/2) + disS
        let cnt = 1
        for (let [p, s] of list) {
            // [!] [p, s] === [disP, disS]로 하면 안됨
            if (p === disP && s === disS) continue
            if (total < b) {
                if (total + p + s <= b) {
                    total = total + p + s
                    cnt += 1
                } else {
                    break
                }
            }
        }
        if (cnt > max) max = cnt
    }

    console.log(max)
}
solution()