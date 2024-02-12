const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = +input[0]
let list = input[1].split(" ").map(Number)
let answer = []

function solution() {
    for (let i = 0; i < n; i++) {
        // [!] 0부터 시작한다면 짝수일 때 출력해야 하는 것이 된다.
        if (i % 2 === 0) {
            // [!] arr.sort()는 문자열로 변환 후 정렬하므로 단순히 사용하면 숫자 비교에 적합하지 않음 
            let sortedList = list.slice(0, i + 1).sort((a, b) => a - b)
            answer.push(sortedList[Math.round(i/2)])
        }
    }
}

solution()
console.log(answer.join(" "))