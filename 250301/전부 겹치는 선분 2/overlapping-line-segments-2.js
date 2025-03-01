const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
let x1List = [], x2List = [];
for (let i = 1; i <= n; i++) {
    const [x1, x2] = input[i].split(' ').map(Number);
    x1List.push(x1);
    x2List.push(x2);
}
let cnt = 0
for (let j = 0; j < n; j++) {
    let inter = false
    for (let l = 0; l < n; l++) {
        if (j === l) continue
        if (x1List[j] <= x2List[l] || x2List[j] >= x1List[l]) {
            inter = true
            break
        }
    }
    if (!inter) flag += 1
}

console.log(cnt > 1 ? "No" : "Yes")