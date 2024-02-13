const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = +input[0]
// [!] 2차원 배열의 두번째 항목 String을 비교해 정렬
let list = input.slice(1).map(day => day.split(" ")).sort((a, b) => {
    return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0; 
})

function solution() {
    // [*] 방법 A: for 문
    // for (let i = 0; i < n; i++) {
    //     if (list[i][2] === "Rain") {
    //         console.log(list[i].join(" "))
    //         break
    //     }
    // }

    // [*] 방법 B: find()
    let rainyDay = list.find(day => day[2] === "Rain")
    console.log(rainyDay.join(" "))
}

solution()