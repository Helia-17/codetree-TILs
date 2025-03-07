// (!) 숫자로 변환 잊지 말자
const fs = require("fs");
const [ah, am, bh, bm] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
console.log(bh * 60 + bm - ah * 60 - am)