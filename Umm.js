/*
문제
  Umm 문자열이란 알파벳 대문자 U 뒤에 알파벳 소문자 m 이 2개 이상 연속하는 문자열이다.
  예를 들어 다음과 같은 문자열이 Umm 문자열이다.
  Umm
  Ummm
  Ummmm

  그러나 다음과 같은 문자열은 Umm 문자열이 아니다.
  U
  Um
  mm
  UmmmU
  UmmUmm

  첫 번째 문자열은 U 뒤에 m 이 없기 때문에 Umm 문자열이 아니다.
  두 번째 문자열을 U 뒤에 m 이 2개 이상 연속하지 않았기 때문에 Umm 문자열이 아니다.
  세 번째 문자열은 U 가 없기 때문에 Umm 문자열이 아니다.
  네 번째 문자열은 U 뒤에 m 이 두 번 이상 연속했지만, 알파벳 대문자 U 가 이어서 등장했기 때문에 Umm 문자열이 아니다.
  다섯 번째 문자열은 Umm 과 Umm 각각은 Umm 문자열이 맞지만, 이를 이어 붙인 UmmUmm 은 Umm 문자열이 아니다.

  성빈이는 임의의 문자열에서 연속한 일부분을 떼어서 관찰하는게 취미다. 예를 들어 "swacademy" 라는 문자열이 주어졌을 때 
  성빈이는 2번째 문자 'w' 부터 5 번째 문자 'a' 까지 연속한 일부분을 떼어서 "waca" 라는 문자열을 관찰할 수 있다.
  성빈이는 어느 날 알파벳 대문자 U 와 알파벳 소문자 m 만으로 이루어진 문자열 S 를 발견했다. 
  이 문자열에서 A 번째 문자부터 B 번째 문자까지 연속한 부분을 떼어서 관찰했을 때, 그 문자열이 Umm 문자열인지 알아보자.


입력
  첫째 줄에 테스트 케이스의 개수 T가 주어진다.
  각 테스트 케이스의 첫째 줄에 문자열 S 의 길이 N (1 ≤ N ≤ 8) 이 주어진다.
  둘째 줄에 알파벳 대문자 U 와 알파벳 소문자 m 으로만 이루어진 문자열 S 가 주어진다.
  셋째 줄에 정수 A, B (1 ≤ A ≤ B ≤ N) 가 주어진다.

출력
  각 테스트 케이스마다 문자열 S 의 A 번째 문자부터 B 번째 문자까지 연속한 부분을 떼어서 관찰했을 때, 
  그 문자열이 Umm 문자열이라면 YES 를, 그렇지 않다면 NO 을 출력한다. 모두 대문자로 출력해야 하는 것에 유의한다.

예제 입력 1
  6
  4
  UmmU
  1 3
  3
  mmU
  1 3
  7
  UmmmUmm
  1 4
  1
  U
  1 1
  5
  mmUmm
  3 5
  6
  UmmUmm
  1 6

예제 출력 1
  YES
  NO
  YES
  NO
  YES
  NO
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let strings = [];
let startToEnd = [];
let check_Umm = [];
let answer = [];

rl.on("line", function (line) {
  input.push(line.split(" "));
}).on("close", function () {
  for (let i = 2; i < input.length; i += 3) {
    strings.push(...input[i]);
  }

  for (let i = 3; i < input.length; i += 3) {
    startToEnd.push(input[i]);
  }

  for (let i = 0; i < strings.length; i++) {
    let str = strings[i].slice(startToEnd[i][0] - 1, startToEnd[i][1]);
    check_Umm.push(str);
  }

  for (let i = 0; i < check_Umm.length; i++) {
    if (check_Umm[i].slice(0, 3) !== "Umm") {
      answer.push("NO");
    } else {
      let Umm = [...check_Umm[i]].splice(3);
      if (Umm.indexOf("U") === -1) {
        answer.push("YES");
      } else {
        answer.push("NO");
      }
    }
  }
  answer = answer.join("\n");
  console.log(answer);
});
