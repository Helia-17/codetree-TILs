/**
 * x, y 순서가 익숙하지만 row, cell 순서로 접근해야 하기 때문에 y, x로 생각해야 한다.
 */
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let [n, t] = input[0].split(" ").map(Number)
let orders = input[1]
let list = input.slice(2).map(row => row.split(" ").map(Number))
function solution() {
    // 중앙이 될 index 구하기
    let start = parseInt(n / 2) 
    // 시작 좌표
    let cur = [start, start]
    // 각 방향으로 이동 시 y, x에 더할 값 리스트
    let dirList = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    // dirList의 index, 북쪽을 바라보고 시작하므로 dirList[0] = [-1, 0]이 되도록 0으로 시작
    let dir = 0
    let sum = list[cur[0]][cur[1]]
    for (let order of orders) {
        switch (order) {
            case 'L':
                // 인덱스가 0~3 내에 위치하도록 4를 더해주고 4로 나눈 나머지를 구한다.
                dir = (dir - 1 + 4) % 4
                // [!] 사소하지만 switch문에 break를 잊지 말자.
                break
            case 'R':
                dir = (dir + 1 + 4) % 4
                break
            case 'F':
                let y = cur[0] + dirList[dir][0]
                let x = cur[1] + dirList[dir][1]
                if (x >= 0 && x < n && y >= 0 && y < n) {
                    cur = [y, x]
                    sum += list[cur[0]][cur[1]]
                }
                break
            default: 
                break
        }
        
    }
    console.log(sum)
}
solution()