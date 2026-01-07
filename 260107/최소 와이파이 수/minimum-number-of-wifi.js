const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);
let cnt = m
let ans = 0
let flag = false
for (let i = 1; i<n; i++) {
    if (arr[i] === 1) flag = true
    if (flag) cnt -= 1
    if (cnt === 0) {
        ans += 1
        i +=  m + 1
        cnt = m
        flag = false
    }
}
if (cnt !== m) ans += 1
console.log(ans)