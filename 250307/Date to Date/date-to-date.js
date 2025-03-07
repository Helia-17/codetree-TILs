// (!) 당월 (am, bm) 은 합산하는 것이 아니라 ad, bd만 계산해야 한다
// 따라서 slice시 당월 미포함이므로 end+1이아니라 end
const fs = require("fs");
const [am, ad, bm, bd] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
const arr = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const a = arr.slice(0, am).reduce((acc, cur)=>acc+cur,0) + ad
const b = arr.slice(0, bm).reduce((acc, cur)=>acc+cur,0) + bd

console.log(b - a)