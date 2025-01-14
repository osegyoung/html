//condition3.js
// 2개의 숫자를 입력.
//2개 모두 짝수이면 -> 모두 짝수.
// 1개 짝수 -> 하나는 짝수 입니다.
// 0개 -> 짝수는 없습니다.

let number = prompt("숫자를 입력해주세요 : ");
let number2 = prompt("숫자를 입력해주세요 : ");

if (number % 2 == 0 && number2 % 2 == 0) {
  console.log("모두 짝수");
} else if (number % 2 == 0 || number2 % 2 == 0) {
  console.log("하나는 짝수");
} else {
  console.log("짝수는 없습니다.");
}