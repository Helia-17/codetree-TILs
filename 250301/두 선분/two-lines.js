// x1, x2가 x3, x4에 포함되면서 더 짧은 선분일 경우도 있으니 네개 다 확인해야 함
// (!) 겹치는 조건이 아니라 떨어지는 조건 보기
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [x1, x2, x3, x4] = input[0].split(' ').map(Number);

let flag = true
if (x2 < x3 || x4 < x1) flag = false
console.log(flag? 'intersecting' : 'nonintersecting')