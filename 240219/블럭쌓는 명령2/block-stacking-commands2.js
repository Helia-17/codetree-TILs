const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let [n, k] = input[0].split(" ").map(Number)
let blockList = input.slice(1).map(line => line.trim().split(" ").map(Number))
function solution() {
    let list = new Array(n).fill(0)
    // 각 명령을 순회, 명령 내에서 각 칸을 순회
    for (let block of blockList) {
        // [*] 구조분해 할당으로 앞 순서의 칸이 앞에 오도록 바꾸기 
        if (block[0] > block[1]) [block[0], block[1]] = [block[1], block[0]];
        let [x1, x2] = block
        // [!] n번째의 인덱스는 n-1이 되며, 끝의 칸도 칠해줘야 하므로 등호가 들어가야 한다. (혹은 i < x2로 표현 가능)
        for (let i = x1 -1 ; i <= x2-1 ; i++) {
            list[i] += 1
        }
    }
    let answer = Math.max(...list)
    console.log(answer)
}

solution()