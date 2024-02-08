const fs = require("fs");
let n = +fs.readFileSync(0).toString().trim()

function solution(m) {
    if (m > n) return
    let stars = []
    for(let i = 1; i <= m; i++) {
	    stars.push('*')
    }
    console.log(stars.join(""))
    solution(m+1)
}

solution(1)