const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = +input[0]
let squareList = input.slice(1).map(square => square.trim().split(" ").map(n => Number(n)+100))
function solution() {
    let list = Array.from(Array(200), () => Array(200).fill(0))
    // [*]index도 함께 얻기 위해 squareList.entries()를 순회
    for (let [index, [x1, y1, x2, y2]] of squareList.entries()) {           
        for (let x = x1; x < x2; x++) {
            for (let y = y1; y < y2; y++)
            // 홀수 인덱스 = 파란색일때만 1로 체크, 짝수 인덱스 = 빨간색이면 0으로 복원
            list[x][y] = index % 2 === 1 ? 1 : 0
        }
    }
    let answer = 0
    for (let row of list) {
        for (let cell of row) {
            if (cell === 1) answer += 1
        }
    }
    console.log(answer)
}

solution()