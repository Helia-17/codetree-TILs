const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ")
const sorted = arr.slice().sort()
let cnt = 0
for (let i=0; i < n; i++) {
    const idx = arr.indexOf(sorted[i])
    let bubble = idx - i
    if (bubble === 0) continue
    for (let j=0; j < bubble; j++) {
        cnt += 1;
        // ASI 미동작하므로 윗줄에 세미콜론 필요
        [arr[idx - j], arr[idx - j - 1]] = [arr[idx - j - 1], arr[idx - j]]
    }
}
console.log(cnt)