const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = +input[0].split(" ").map(Number)
let list = input.splice(1).map(row => row.split(" ").map(Number))

function solution() {
    let min = 1600000000
    for (let exception of list) {
        let square = list.filter(point => point !== exception)
        let [minX, minY] = [40000, 40000]
        let [maxX, maxY] = [0, 0]
        for (let [x, y] of square) {
            if (x < minX) minX = x
            if (y < minY) minY = y
            if (x > maxX) maxX = x
            if (y > maxY) maxY = y
        }
        let area = (maxX - minX) * (maxY - minY)
        if (area < min) min = area
    }
    console.log(min)
}
solution()