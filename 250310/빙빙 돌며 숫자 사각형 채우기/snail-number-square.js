// (!) 벽이 아니더라도 방문했으면 90도 틀어야
// (!) 벽과 방문했던 곳을 확인하는 기준이 현재인지, 다음 스텝인지 확실히 구별해야 함 => 다음 스텝
// 다음 스텝을 진행 후 방문했던 곳인지 확인하면 90% 틀더라도 돌릴 수가 없으므로 진행하기 전에 확인 필요
// 벽은 현재 위치가 배열 안인지 볼 수도 있지만 다음 위치가 배열 밖인지를 볼 수도 있으므로 같은 기준으로 확인하려면 후자가 나음
// (!) 조건 바꿀때 명제 확인하기
// let isWall = [0, n-1].includes(r) && [0, n-1].includes(c) => &&였지만
// let isWall = [-1, n].includes(nr) || [-1, n].includes(nc) => ||임
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = Array.from(Array(n), () => Array(m).fill(0))
const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]
let curDir = 0
let [r, c] = [0, 0]
for (let i = 1; i <= n * m; i++) {
    arr[r][c] = i
    nr = r + dir[curDir][0]
    nc = c + dir[curDir][1]
    let isWall = [-1, n].includes(nr) || [-1, n].includes(nc)
    if (isWall || arr[nr][nc] !== 0) curDir = (curDir + 1) % 4
    r += dir[curDir][0]
    c += dir[curDir][1]
}

for (let i = 0; i < n; i++) {
    let print = "";
    for (let j = 0; j < n; j++) {
        print += `${arr[i][j]} `;
    }
    console.log(print);
}