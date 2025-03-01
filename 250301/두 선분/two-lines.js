// x1, x2가 x3, x4에 포함되면서 더 짧은 선분일 경우도 있으니 네개 다 확인해야 함
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [x1, x2, x3, x4] = input[0].split(' ').map(Number);

function check() {
    if (x1 <= x3 && x3 <= x2) return true
    if (x1 <= x4 && x4 <= x2) return true
    if (x3 <= x1 && x1 <= x4) return true
    if (x3 <= x2 && x2 <= x4) return true
    return false
}
console.log(check()? 'intersecting' : 'nonintersecting')