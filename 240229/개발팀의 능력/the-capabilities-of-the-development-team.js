const fs = require("fs");
let input = fs.readFileSync(0).toString().trim()
let list = input.split(" ").map(Number)

function solution() {
    let min = 2001
    let flag = true
    let team1, team2, team3 = 0
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            team1 = list[i] + list[j]
            // 다시 j이외의 index를 돌면서 i가 아닌 경우에 세번째 팀의 팀원으로 채택
            for (let l = (j + 1) % 5; l !== j; l = (l + 1) % 5) {
                if (l === i )continue
                team3 = list[l]
                team2 = list.reduce((acc, cur) => acc + cur, 0) - team1 - team3
                // 능력치가 같은 경우 넘어간다
                if (team1 === team2 || team1 === team3 || team2 === team3) continue
                // 한번이라도 팀 조합이 완성되면 flag를 끈다. 
                flag = false
                let diff = Math.max(team1, team2, team3) - Math.min(team1, team2, team3)
                if (diff < min) min = diff
            }
        }
    }
    // flag가 false로 바뀌지 않았다면 모든 팀의 능력치를 서로 다르게 만들 수 있는 경우가 없었다는 것
    if (flag) min = -1
    console.log(min)
}
solution()