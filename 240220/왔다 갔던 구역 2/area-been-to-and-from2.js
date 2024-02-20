const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = +input[0]
let orderList = input.slice(1).map(order => order.trim().split(" "))
function solution() {
    let list = new Array(2001).fill(0)
    let cur = 1000
    // 각 명령을 순회, 명령 내에서 각 영역을 순회
    for (let [x, d] of orderList) {
        x = Number(x)
        let last = ""
        // 구간을 시작점을 기준으로 체크한다.
        if (d === "L"){
            // 같은 방향으로 한번 더 갈때는 시작점에 1을 더하지 않는다
            // 왼쪽으로 이동할 경우 끝점이 아닌 시작점부터 체크하기 위해 -1을 해준다.
            if (last !== "L") list[cur-1] += 1
            // -1을 위에서 했으니 -2부터 시작하도록 조정한다.
            for (let i = 2; i <= x; i++) {
                list[cur - i] += 1
            }
            cur -= x
        } else {
            // 같은 방향으로 한번 더 갈때는 시작점에 1을 더하지 않는다
            if (last !== "R") list[cur] += 1
            for (let j = 1; j < x; j++) {
                list[cur + j] += 1
            }
            cur += x
        }
        // 마지막 갔던 방향을 기억
        last = d
    }

    let answer = list.filter(p => p >= 2).length
    console.log(answer)
}

solution()