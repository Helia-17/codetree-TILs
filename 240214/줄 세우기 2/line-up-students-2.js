const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = +input[0]
// [!] 각 학생의 정보를 Array 형태로 만든 뒤 마지막에 번호 추가 후, 조건대로 정렬
let list = input.slice(1).map((info, index) => [...info.split(" ").map(Number), index + 1]).sort((a, b) => {
    if (a[0] === b[0]) return a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0;
    return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0; 
})

function solution() {
    // [!] 각 학생의 정보를 String 형태로 형변환 후, 전체 리스트를 줄바꿈으로 연결하며 String으로 형변환
    console.log(list.map(info => info.join(" ")).join("\n"))
}

solution()