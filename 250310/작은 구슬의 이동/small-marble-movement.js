// 반대로 뒤집는 방법 1. 0<->3, 1<->2, => 3 - curDir
// 반대로 뒤집는 방법 2. 0<->2, 1<->3, => (curDir + 2) % 4
// (!) 방향을 바꾸는 데에 1만큼 시간이 소요됨에 주의
// (!) 문제에선 최좌상단이 1,1이고, 배열은 0,0이므로 초기에 맞춰주거나 배열에서 맞춰줘야 함

// (1) 배열의 기본 인식에 더 부합
// r = Number(r) - 1;
// c = Number(c) - 1;
// const isColEnd = [0, 2].includes(curDir) && [0, n-1].includes(r)
// const isRowEnd = [1, 3].includes(curDir) && [0, n-1].includes(c)

// (2) 문제 상황에 더 부합, 코드가 간단
// r = Number(r);
// c = Number(c);
// const isColEnd = [0, 2].includes(curDir) && [1, n].includes(r)
// const isRowEnd = [1, 3].includes(curDir) && [1, n].includes(c)

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, t] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ");
r = Number(r);
c = Number(c);

const arr = [[-1, 0], [0, 1], [1, 0], [0, -1]]
const dir = {
    U: 0,
    R: 1,
    D: 2,
    L: 3
}
let curDir = dir[d]

// 최종 자리의 방향은 몰라도 되고 2n은 왔다갔다 해서 결국 제자리이므로 소거 처리
let a = parseInt(t / n)
let b = t % n
if (a % 2 === 1) {
    b += n
}
for (let i = 0; i < b; i++) {
    const isColEnd = [0, 2].includes(curDir) && [1, n].includes(r)
    const isRowEnd = [1, 3].includes(curDir) && [1, n].includes(c)
    if (isColEnd || isRowEnd) {
        curDir = (curDir + 2) % 4
        i += 1
    }
    r += arr[curDir][0]
    c += arr[curDir][1]

}

console.log(r + " " + c)
