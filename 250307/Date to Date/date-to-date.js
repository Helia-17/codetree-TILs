const fs = require("fs");
const [am, ad, bm, bd] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
const arr = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const a = arr.slice(0, am+1).reduce((acc, cur)=>acc+cur,0) + ad
const b = arr.slice(0, bm+1).reduce((acc, cur)=>acc+cur,0) + bd

console.log(b - a)