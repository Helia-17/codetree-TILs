const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = +input[0]
// 구간이 -100부터 100까지므로 offset 100을 더해준다.
let lineList = input.slice(1).map(line => line.trim().split(" ").map(n => Number(n)+100))
function solution() {
    let list = new Array(200).fill(0)
    // 각 선분을 순회, 선분 내에서 각 구간을 순회
    for (let [x1, x2] of lineList) {
        for (let i = x1; i < x2; i++) {
            list[i] += 1
        }
    }

    // [!] 가장 많이 겹치는 구간에서 몇 개의 선분이 겹치는 지이므로 최댓값을 찾는다.
    let answer = Math.max(...list)
    console.log(answer)
}

solution()