const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let [n, h, t] = input[0].split(" ").map(Number)
let list = input[1].split(" ").map(Number)

function solution() {
    let min = 20001
    for (let i = 0; i < n - t + 1; i++) {
        let cost = 0
        for (let j = i; j < i + t; j++) {
            cost += Math.abs(list[j] - h)
        }
        if (cost < min) min = cost
    }
    console.log(min)
}
solution()