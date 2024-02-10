// 유클리드 호제법 사용

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = +input[0]
let list = input[1].split(" ").map(Number)

// [!] 유클리드 호제법을 사용해 최대공약수 구하기
function gcd(a, b) {
    if (!b) {
        return a
    }
    return gcd(b, a % b)
}

// [!] 두 수를 곱한 뒤 최대공약수로 나눠주는 방법으로 최소공배수 구하기
function lcm(a, b) {
    return (a*b / gcd(a,b))
}



function solution() {
    // [!] 누산을 위해 reduce를 사용
    let answer = list.reduce(function (a,b){
        let min = Math.min(a,b)
        let max = Math.max(a,b)
        return lcm(min, max)
    })
    return answer
}


console.log(solution())