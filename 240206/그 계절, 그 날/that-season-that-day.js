const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [y, m, d] = input.map(Number);

function isLeapYear(y) {
    if (y % 4 !== 0) return false
    if (y % 100 === 0 && y % 400 !== 0) return false
    return true
}

function getSeason(m) {
    const seasons = ['Spring', 'Summer', 'Fall', 'Winter']
    const months = [, 3, 3, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3 ]
    
    return seasons[months[m]]
}

function solution(y, m, d) {
    const days = [, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1]
    // [!] 윤년이 아니면 2월은 28일까지
    if (m === 2 && !isLeapYear(y) && d > 28 || m === 2 && d > 29) {
        return -1
    }
    if (days[m] === 0 && d > 30) return -1
    else {
        return getSeason(m)
    }
}

console.log(solution(y, m, d))