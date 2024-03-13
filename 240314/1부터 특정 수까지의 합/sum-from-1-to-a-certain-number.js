const fs = require("fs");
let n = +fs.readFileSync(0).toString().trim()

function solution() {
    let cnt = 0
    for (let i = 1; i <= n; i++) {
        cnt += i
    }
    console.log(parseInt(cnt / 10))

}
solution()