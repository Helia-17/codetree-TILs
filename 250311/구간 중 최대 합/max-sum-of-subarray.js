const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
let max = 0

// (!) k가 1일 경우 모든 항목 탐색해야 함 -> i < n이 되어야 하므로 n - k + 1
for (let i = 0; i < n-k+1; i++) {
    let total = 0
    for (let j = i; j < i+k; j++) {
        total += arr[j]
    }
    if (total > max) max = total
}
console.log(max)