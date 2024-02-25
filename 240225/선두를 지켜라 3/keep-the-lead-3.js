const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let [n, m] = input[0].split(" ").map(Number)
let moveList = input.slice(1).map(move => move.split(" ").map(Number))
let list = Array.from(Array(n * 1000 + 1), () => Array(2).fill(0))

function solution() {
    // 각 시간마다 이동한 거리 기록하기
    let curT = 0
    let curV = 0
    // n, m 따로 for문을 순회하지 않는대신 index와 i의 역할을 헷갈리지 않아야 함
    for (let [index, [v, t]] of moveList.entries()) {
        if (index === n) {
            curT = 0
            curV = 0
        }
        // [!] 그 시간에 이동한 거리가 아닌 누적 거리를 구해 선두를 판별해야 함에 주의
        for (let i = curT; i < curT + t; i++) {
            if (index < n) list[i][0] = curV + v
            else list[i][1] = curV + v
            curV += v
        }
        curT += t
        
    }

    let cnt = 0
    let win = ''
    for (let [a, b] of list) {
        if (a === 0 && b === 0) break
        if (a > b && win !== 'a') {
            cnt += 1
            win = 'a'
        }
        if (a===b && win !== 'ab') {
            cnt += 1
            win = 'ab'
        }
        if (a < b && win !== 'b') {
            cnt += 1
            win = 'b'
        }
    }
    console.log(cnt)
}

solution()