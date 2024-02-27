const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let [n, s] = input[0].split(" ").map(Number)
let list = input[1].split(" ").map(Number)

// [*]조합 구하기
const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, selectNumber - 1); 
      // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((el) => [fixed, ...el]); 
      //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); 
      // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
}

function solution() {
    // [!] 최소값을 구할 때는 Math.min(...Array) 이와 같이 Array를 spread syntax로 넣어줘야 함에 유의

    // 방법 A: 각 조합의 합계를 구해 s에서 뺀 절댓값 중 가장 최소를 찾는다는 방법으로 하면 시간초과
    // let best = Math.min(...getCombinations(list, n-2).map(com => Math.abs(s - com.reduce((acc, cur) => acc + cur, 0))))
    // 방법 B: 빼야 할 2개의 조합만 구해 S에서 전체 합을 빼고 빼야 할 두개의 값을 더해준다.
    let sum = list.reduce((acc, cur) => acc + cur, 0)
    let best = Math.min(...getCombinations(list, 2).map(com => Math.abs(s - sum + com[0] + com[1])))
    console.log(best)
}
solution()