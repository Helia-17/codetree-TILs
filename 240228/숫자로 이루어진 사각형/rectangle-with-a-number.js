const fs = require("fs");
let n = +fs.readFileSync(0).toString().trim()

function solution () {
    let num = 1
    for (i = 0; i < n; i++ ){
        let list = []
        for (j = 0; j < n; j++) {
            list.push(num)
            num = (num + 1) % 10 ? (num + 1) % 10 : 1
        }
        console.log(list.join(" "))
    }
}
solution()