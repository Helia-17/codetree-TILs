function solution() {
    let fs = require('fs')
    let input = fs.readFileSync(0).toString().split('\n')

    let [n, m] = input[0].split(" ").map(Number)
    let list = input[1].split(" ").map(Number)
    let aList = input.slice(2).map((a) => a.split(" ").map(b => Number(b) - 1))
        for(let i = 0; i < m; i++){
            let [a, b] = aList[i]
            // [!] 숫자쌍의 합이 아니라 숫자쌍 a1부터 a2"까지"의 합
            let answer = list.slice(a,b+1).reduce((acc, cur) => acc + cur, 0);
            console.log(answer)         
        }
}

solution()