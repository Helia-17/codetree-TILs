// 같은 x선과 y선에서도 안겹치는 경우를 생각해보기 -> 선분 문제로 치환 가능
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x1, y1, x2, y2] = input[0].split(' ').map(Number);
const [a1, b1, a2, b2] = input[1].split(' ').map(Number);

console.log(x2 < a1 || a2 < x1 || b2 < y1 || y2 < b1 ? 'nonoverlapping' : 'overlapping')
// Please Write your code here.