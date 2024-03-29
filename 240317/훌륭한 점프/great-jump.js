const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let [n, k] = input[0].split(" ").map(Number)
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
    let min = 100
    // [!] 첫번째 돌은 항상 포함되어야 한다
    for (let i = 1; i <= k; i++) {
        // 최대 거리가 i이내 일 때 (i <= k), 첫번째 돌을 제외하고 사용할 수 있는 돌의 개수는 n - i개다.
        let use = n - i
        let stoneList = getCombinations(list.slice(1), use)
        if (stoneList.length === 0) continue
        for (let stones of stoneList) {
            // [!] 적혀있던 숫자들 중 "최댓값이 최소가 되도록"
            // [!] 조합에 첫번째 돌을 항상 추가
            let max = Math.max(...stones, list[0])
            if (max < min) min = max   
        }
    }
    console.log(min)
}
solution()