const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];
const xArr = [0, 1, 0, -1]
const yArr = [1, 0, -1, 0]
let dir = 0
let cur = [0, 0]
for (let com of commands) {
    if (com === 'L') dir = (dir  + 3) % 4
    if (com === 'R') dir = (dir + 1) % 4
    if (com === 'F') cur = [cur[0]+xArr[dir], cur[1]+yArr[dir]]
}
console.log(cur.join(" "))