/* 
문제
  준식이는 빵을 좋아한다. 특히 성심당에서 파는 작은 메아리 와 크로플 을 좋아한다.
  어느 날, 준식이는 두 개의 빵 중에서 어느 쪽을 구매할지 고민하고 있었다. 준식이는 언제나 더 비싼 빵을 구매한다. 두 개의 빵 이름과 가격이 주어질 때, 준식이가 구매할 빵은 무엇일까?

입력
  첫째 줄에 첫 번째 빵 이름이 주어진다. 빵 이름은 길이 10이하의 알파벳 대소문자로 이루어져있다.
  둘째 줄에 첫 번째 빵 가격을 의미하는 정수 A(1 000 ≤ A ≤ 10 000)가 주어진다.
  셋째 줄에 두 번째 빵 이름이 주어진다. 빵 이름은 길이 10이하의 알파벳 대소문자로 이루어져있다.
  넷째 줄에 두 번째 빵 가격을 의미하는 정수 B(1 000 ≤ B ≤ 10 000)가 주어진다.
  두 빵의 가격이 같은 경우는 입력으로 주어지지 않는다.

출력
  두 개의 빵 중에서 더 비싼 빵 이름을 출력한다.

예제 입력 1
  TinyEcho
  4000
  Croffle
  3000

예제 출력 1
  TinyEcho
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let answer;


rl.on('line', function (line) {
    input.push(line.split(' '));
    
    if (input[1] > input[3]) {
        answer = input[0];
    } else {
        answer = input[2];
    }
}).on('close', function () {
    console.log(...answer);
    process.exit();
});