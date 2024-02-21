/** 
 *  1 R, 1 L의 경우 현재 타일의 색상만 바꾸기 때문에 항상 번갈아 L, R이 나온다는 보장이 없다.
 *  따라서 흰색과 검은색으로 칠해지는 횟수를 따로 구해야 한다.
 *  또한 구간 문제가 아니므로 기본 for문을 사용한다.
 * */ 

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = +input[0]
let orderList = input.slice(1).map(order => order.trim().split(" "))
function solution() {
    // 한쪽으로만 100개씩 1000번 갈 경우를 고려해 길이 설정
    // [!] 2차원 배열을 이렇게 생성하지 않고 fill([0, 0, 0])을 한다면 값이 다같이 증가하게 됨.
    let list = Array.from(Array(200001), () => Array(3).fill(0))
    let cur = 100000
    // 각 명령을 순회, 명령 내에서 각 영역을 순회
    for (let [x, d] of orderList) {
        x = Number(x)
        if (d === "L"){
            for (let i = 0; i < x; i++) {
                if (list[cur - i][3] !== "G") {
                    list[cur - i][0] += 1
                    list[cur - i][3] = list[cur - i][0] >= 2 && list[cur - i][1] >= 2 ? "G" : "W"
                }
            }
            cur -= x - 1
        } else {
            for (let j = 0; j < x ; j++) {
                if (list[cur + j][3] !== "G") {
                    list[cur + j][1] += 1
                    list[cur + j][3] = list[cur + j][0] >= 2 && list[cur + j][1] >= 2 ? "G" : "B"
                }
            }
            cur += x - 1
        }
    }

    let white = list.filter(p => p[3] === 'W').length
    let black = list.filter(p => p[3] === 'B').length
    let grey = list.filter(p => p[3] === 'G').length
    console.log([white, black, grey].join(" "))
}

solution()