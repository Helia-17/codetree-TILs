//[!] 최소 거리 구하기 => 올림(ceil)이 아니라 내림(floor)
//[!] 0개수 +1이 거리 
// 컴퓨터를 이용하여 문제 해결
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seats = input[1].split("").map(Number);

function findMinOrMax (type) {
    let [maxDis, maxX, maxY] = [-1, -1, -1]
    let [minDis, minX, minY] = [1001, 1001, 1001]
    let [dis, x, y] = [0, 0, -1]

    for (let i = 0; i < n; i++) {
        if (i !== 0 && seats[i] === 1) {
            y = i
            if (type === 'max' && maxDis < dis) {
                maxDis = dis
                maxX = x
                maxY = i
            }
            if (type === 'min' && minDis > dis) {
                minDis = dis
                minX = x
                minY = i
            }
            dis = 1
            x = i
            y = -1
        } else {
            dis += 1
        }
    }
    if (type === 'max') return [maxDis, maxX, maxY]
    if (type === 'min') return [minDis, minX, minY]
}

const [maxDis, maxX, maxY] = findMinOrMax('max')
seats[Math.floor((maxX + maxY) / 2)] = 1
const [minDis, minX, minY] = findMinOrMax('min')
console.log(minDis)

