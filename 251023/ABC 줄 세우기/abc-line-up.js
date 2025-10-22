// 성능 개선 - sort와 indexOf 대신 charCodeAt 사용 - 사용하지 않아도 무방
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ")
let cnt = 0
for (let i=0; i < n; i++) {
    for (let j=0; j < n-i-1; j++) {
        if (arr[j].charCodeAt() > arr[j+1].charCodeAt()) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            cnt += 1
        }
    }
}

console.log(cnt)