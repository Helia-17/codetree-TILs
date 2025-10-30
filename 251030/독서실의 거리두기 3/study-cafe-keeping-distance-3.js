//[!] 최소 거리 구하기
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seats = input[1].split("").map(Number);

const dis = input[1].split(1).slice(1, -1).map(v => v.length)
const max = Math.max(...dis)
const updated = dis.map(v => (v === max) ? Math.ceil(max/2) : v)
console.log(Math.min(...updated))