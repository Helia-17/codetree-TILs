/** 
 * [!] 다음과 같은 경우를 생각하지 못해 발생하는 엣지케이스들이 있었다.
 * 변수끼리 비교할 때 둘이 같은 경우
 * 변수 A와 B 중 항상 B가 크리라고 가정했지만 그렇지 않을 경우
 */

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let [m1, d1, m2, d2] = input[0].split(" ").map(Number)
let a = input[1]
const monthList = [, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const dayList = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function solution() {
    let cnt = 0
    let startDay = 'Mon'
    for (let i = m1; i <= m2; i++) {
        // 1. 이번 달 남은 일수 구하기
        // 해당 달에 몇일 중 A요일을 구해야 하는지 일수를 구한다.
        let days =  monthList[i]

        // 주어진 m1월 d1일부터 A요일이 몇번인지를 구해야 하므로 d1일 전날까지를 제외시킨다.
        // [!] m1과 m2가 같을 수도 있다.
        if (i === m1 && i === m2) days = d2 - d1
        else if (i === m1) days -= d1 - 1
        else if (i === m2) days = d2

        // 2. 이 달의 A요일 등장 횟수 구하기
        // 예를 들어 A요일이 금요일이라면, 시작일인 월요일부터 목요일까지의 4일은 필요가 없다. 따라서 시작일에서 가장 가까운 요일만큼 일수를 차감한다.
        // [!] 이번주 토요일에서 다음주 월요일이든, 이번주 월요일에서 이번주 토요일이든 양수의 값이 차감되어야 하므로 시작일과 다음 A요일값의 차를 양수의 값이 되게 구한다.
        let startDayIdx = dayList.findIndex(day => day === startDay)
        let findDayIdx = dayList.findIndex(day => day === a)
        // [!] 현재 요일이 마침 구해야 하는 요일이라면 추가적인 조치를 할 필요가 없다.
        if (startDayIdx !== findDayIdx) {
            let minus = findDayIdx > startDayIdx ? findDayIdx - startDayIdx : 7 - startDayIdx + findDayIdx
            // [!] 현재 요일과 구해야하는 요일과의 간격보다 주어진 날짜가 더 짧다면 이번 달에 해당 요일은 없다.
            if (days < minus) continue
            days -= minus
        }

        // [!] 첫 날을 빼고 7로 나눴을 때 몫만큼의 A요일이 다시 돌아오므로, 그 몫에 첫 A요일까지 1을 더한 값을 최종 값에 더한다.
        let dayAgain = parseInt(((days - 1)/7))
        cnt += dayAgain + 1

        // 3. 다음달 시작일 구하기
        // [!] 7을 나눴을 때 나머지만큼의 날이 남았으므로, 다음 달 1일의 요일은 A요일로부터 나머지 + 1번째 다음 요일이다.
        // [!] 인덱스를 초과할 수 있으니 7로 한번 더 나눈 나머지를 구한다.
        let startIdx = (dayList.findIndex(day => day === a) + (days - 1) % 7 + 1) % 7
        startDay = dayList[startIdx]
    }
    console.log(cnt)
}

solution()