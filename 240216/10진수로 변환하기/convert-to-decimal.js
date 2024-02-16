const fs = require("fs");
let input = fs.readFileSync(0).toString().trim()

function solution() {
    let answer = 0
    for (let digit of input) {
        // 이전의 값에 2를 곱하고 현재 자리의 이진수를 더한다.
        answer = answer * 2 + Number(digit)
    }
    console.log(answer)
}

solution()