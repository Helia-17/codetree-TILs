const fs = require("fs");
let input = fs.readFileSync(0).toString().trim()
let [x, y] = input.split(" ").map(Number)

function solution() {
    let cnt = 0
    for (let i = x; i <= y; i ++) {
        let str = String(i)
        let flag = true
        for (let j = 0; j < parseInt(str.length / 2); j ++) {
            if (str[j] !== str[str.length - 1 - j]) { 
                flag = false
                break
            }
        }
        if (flag) cnt ++
    }
    console.log(cnt)
}
solution()