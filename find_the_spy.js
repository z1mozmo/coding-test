/*
문제
  준식이는 수열 A[1], A[2], ..., A[N] (N ≥ 3) 을 가지고 있다.
  이 수열에서 단 한 개의 수를 제외하고 나머지 수는 모두 같다.
  그 수는 수열에서 몇 번째에 위치할까?

입력
  첫째 줄에 테스트 케이스의 개수 T 가 주어진다.
  각 테스트 케이스의 첫째 줄에 수열의 길이 N (3 ≤ N ≤ 100)이 주어진다.
  둘째 줄에 A[1], A[2], ..., A[N]이 주어진다. 수열의 i번째 원소는 정수 A[i] (1 ≤ A[i] ≤ 100)이다.
  주어지는 수열에서 단 한 개의 수를 제외하고 나머지 수는 모두 같다.

출력
  각 테스트 케이스마다 문제의 정답이 수열에서 몇 번째에 위치하는지 출력한다.

예제 입력
  6
  4
  11 13 11 11
  5
  1 4 4 4 4
  10
  3 3 3 3 10 3 3 3 3 3
  3
  20 20 10
  3
  5 6 6
  3
  7 7 6

예제 출력
  2
  1
  5
  3
  1
  3
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let [arrs, answer] = [[], []];
let arr;

rl.on("line", function (line) {
  input.push(line.split(" "));
}).on("close", function () {
  for (let i = 2; i < input.length; i += 2) {
    arrs.push(input[i]);
  }

  for (let i = 0; i < arrs.length; i++) {
    arr = arrs[i];
    let pop1 = arr[arr.length - 1];
    let pop2 = arr[arr.length - 2];

    if (pop1 != pop2) {
      arr.slice(-3, -2) == pop1
        ? answer.push(arr.indexOf(pop2))
        : answer.push(arr.indexOf(pop1));
    } else if (pop1 == pop2) {
      answer.push(arr.findIndex((num) => num != pop1));
    }
  }
  answer = answer.map((num) => num + 1);
  console.log(answer.join("\n"));
});
