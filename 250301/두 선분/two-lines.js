const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [x1, x2, x3, x4] = input[0].split(' ').map(Number);
let flag = false
if (x1 <= x3 && x3 <= x2) flag = true
if (x1 <= x4 && x4 <= x2) flag = true
console.log(flag? 'intersecting' : 'nonintersecting')