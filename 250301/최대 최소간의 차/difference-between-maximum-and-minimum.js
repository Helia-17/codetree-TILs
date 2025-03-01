const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);
let minCos = Infinity
let min = Math.min(...arr)

while (min <= Math.max(...arr)) {
    let cos = 0
    for (let i=0; i<n; i++) {
        if (min <= arr[i] && min+k >= arr[i]) continue
        cos += Math.min(Math.abs(arr[i]-min), Math.abs(arr[i]-min-k))
    }
    if (minCos > cos) minCos = cos
    min += 1
}

console.log(minCos)