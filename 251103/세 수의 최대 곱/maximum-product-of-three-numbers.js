// +(+++, --+), 0, -(++-, ---)
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const plus = []
let zero = false
const minus = []
for (let v of arr) {
    if (v < 0) minus.push(v)
    else if (v === 0) zero = true
    else plus.push(v)
}

plus.sort((a,b) => b-a)
minus.sort((a,b) => a-b)

let maxPlus = -1001
const plusCandidate = []
if (plus.length >= 3) plusCandidate.push(plus[0]*plus[1]*plus[2])
if (plus.length >= 1 && minus.length >= 2 ) plusCandidate.push(plus[0]*minus[0]*minus[1])
maxPlus = Math.max(maxPlus, ...plusCandidate)

let minMinus = -1001
const minusCandidate = []
const len = minus.length
if (minus.length >= 3) minusCandidate.push(minus[len-1]*minus[len-2]*minus[len-3])
if (minus.length >= 1 && plus.length >= 2 ) minusCandidate.push(plus[len-1]*plus[len-2]*minus[len-1])
minMinus = Math.max(minMinus, ...minusCandidate)

if (zero) console.log(Math.max(maxPlus, minMinus, 0))
else console.log(Math.max(maxPlus, minMinus))