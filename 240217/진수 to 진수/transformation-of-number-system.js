const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let [a, b] = input[0].split(" ").map(Number)
let n = input[1]

function solution() {
    // 1. a진수를 10진수로 바꾼다.
    let ten = 0
    for (let digit of n) {
        // 이전의 값에 a를 곱하고 현재 자리의 이진수를 더한다.
        ten = ten * a + Number(digit)
    }

    // 2. 10진수를 b진수로 바꾼다.
    let stack = []
    
    // 진수보다 정수 값이 작아질 때까지 계속 나눈다
    while (ten >= b) {
        // 나머지를 리스트의 제일 앞에 삽입
        stack.unshift(ten % b)
        // n은 몫이 된다
        ten = parseInt(ten / b)
    }
    // 마지막 남은 진수보다 작은 정수 값도 리스트의 제일 앞에 삽입
    stack.unshift(ten)
    
    console.log(stack.join(""))
}

solution()