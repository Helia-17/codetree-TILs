/** 
 * 시작점을 기준으로 구간을 체크해야 하기 때문에,
 * 0에서 왼쪽으로 다섯칸 갈 경우 -5, -4, -3, -2, -1, 0 중 -5, -4, -3, -2, -1를 체크
 * 즉 시작점인 0은 제외하고 끝점인 -5는 포함해야 한다.
 * 0에서 오른쪽으로 다섯칸 갈 경우 0, 1, 2, 3, 4, 5 중 0, 1, 2, 3, 4를 체크
 * 즉 시작점인 0은 포함하고 끝점인 5는 제외해야 한다. 
 * */ 

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = +input[0]
let orderList = input.slice(1).map(order => order.trim().split(" "))
function solution() {
    // 한쪽으로만 10개씩 100번 갈 경우를 고려해 길이 설정
    let list = new Array(2001).fill(0)
    let cur = 1000
    // 각 명령을 순회, 명령 내에서 각 영역을 순회
    for (let [x, d] of orderList) {
        x = Number(x)
        let last = ""
        // 구간을 시작점을 기준으로 체크한다.
        if (d === "L"){
            // 시작점을 제외하기 위해 한칸 뺀 뒤 시작하며, 끝점을 체크하기 위해 i가 x와 같을때도 체크한다.
            for (let i = 1; i <= x; i++) {
                list[cur - i] += 1
            }
            cur -= x
        } else {
            // 시작점을 포함하기 위해 0부터 시작하며, 끝점을 체크하지 않는다.
            for (let j = 0; j < x; j++) {
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