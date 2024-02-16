const fs = require("fs");
let [n, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

function solution() {
    let stack = []

    // 진수보다 정수 값이 작아질 때까지 계속 나눈다
    while (n >= b) {
        // 나머지를 리스트의 제일 앞에 삽입
        stack.unshift(n % b)
        // n은 몫이 된다
        n = parseInt(n / b)
    }
    // 마지막 남은 진수보다 작은 정수 값도 리스트의 제일 앞에 삽입
    stack.unshift(n)
    
    console.log(stack.join(""))
}

solution()