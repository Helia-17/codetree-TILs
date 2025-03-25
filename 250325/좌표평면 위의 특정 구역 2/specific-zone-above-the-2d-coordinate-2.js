const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const points = input.slice(0, n).map(line => line.split(' ').map(Number));
let minWidth = Infinity
for (let i=0; i<n; i++) {
  let max = [0, 0]
  let min = [40000, 40000]
  for (let j=0; j<n; j++) {
    if (j === i) continue
    if (max[0] < points[j][0]) max[0] = points[j][0]
    if (max[1] < points[j][1]) max[1] = points[j][1] 
    if (min[0] > points[j][0]) min[0] = points[j][0]
    if (min[1] > points[j][1]) min[1] = points[j][1]
  }
  let width = (max[0] - min[0]) * (max[1] - min[1])
  if (minWidth > width) minWidth = width
}
console.log(minWidth)