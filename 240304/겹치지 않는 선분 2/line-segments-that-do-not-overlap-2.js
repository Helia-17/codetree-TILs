const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = +input[0].split(" ").map(Number)
let list = input.splice(1).map(row => row.split(" ").map(Number))
let cntList = new Array(n).fill(0)
function solution() {
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let [a1, a2] = list[i]
            let [b1, b2] = list[j]
            if ((a1 < b1 && b2 < a2) || (b1 < a1 && a2 < b2)) {
                // 한 선분이 여러개와 겹쳐있을 수 있으므로 개수를 카운트하기보다 선분이 겹치는지 아닌지를 체크한 뒤, 마지막에 겹치지 않는 선분 개수를 센다.
                cntList[i] = 1
                cntList[j] = 1
            }
        }
    }
    let answer = cntList.filter(n => n === 0).length
    console.log(answer)
}
solution()