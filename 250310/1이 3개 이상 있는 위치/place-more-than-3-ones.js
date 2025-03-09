const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));
let ans = 0
const arr = [[0, -1], [1, 0], [0, 1], [-1, 0]]

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        let cnt = 0
        for (let l = 0; l < 4; l++) {
            let nx = i + arr[l][0]
            let ny = j + arr[l][1]
            if (![nx, ny].includes(-1) && ![nx, ny].includes(n) && grid[nx][ny] === 1) cnt += 1
        }
        if (cnt >= 3) ans += 1
    }
}

console.log(ans)

