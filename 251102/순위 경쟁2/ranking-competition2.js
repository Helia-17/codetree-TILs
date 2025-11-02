// [!] input은 문자열이니 숫자로 바꾸기
// [!] 처음에는 둘 다 0 점이므로 둘 다 1등으로 가정
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const changes = input.slice(1).map(line => line.split(" ")).map(([a,b]) => ([a,Number(b)]))
let cnt = 0 
let win = 'AB'
const points = {A: 0, B: 0}

for (let [user, value] of changes) {
    let curWin = null
    points[user] += value
    if (points.A > points.B) {
        curWin = 'A'
    } else if (points.A === points.B) {
        curWin = 'AB'
    } else {
        curWin = 'B'
    }

    if (win !== curWin) {
        cnt += 1
        win = curWin
    }
}

console.log(cnt)