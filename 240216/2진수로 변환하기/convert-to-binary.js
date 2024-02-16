const fs = require("fs");
let input = +fs.readFileSync(0).toString().trim()
function solution() {
    let stack = []
    // [*] 방법 A: 반복문과 Array.pop() 사용
    // 수행 시간 244ms, 메모리 16MB
    // while (input >= 2) {
    //     stack.push(input % 2)
    //     input = parseInt(input / 2)
    // }
    // stack.push(input)

    // let digit = ''
    
    // while (stack.length !== 0) {
    //     digit += String(stack.pop())
    // }

    // [*] 방법 B: Array.unshift() 사용
    // 수행 시간 332ms, 메모리 14MB
    while (input >= 2) {
        stack.unshift(input % 2)
        input = parseInt(input / 2)
    }
    stack.unshift(input)

    let digit = stack.join("")

    console.log(digit)
}

solution()