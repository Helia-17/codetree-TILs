const fs = require("fs");
let [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

function solution () {
    for (i = 0; i < n; i++ ){
        let str = ''
        for (j = 0; j < m; j++) {
            str += '1'
        }
        console.log(str)
    }
}
solution()