//function2.js
//함수 이름 : getMax , 매개변수 : 배열(numAry) , 기능 : 배열의 요소중에서 제일 큰 값을 콘솔에 출력.


let numAry1 = [3, 15, 22, 7];
let numAry2 = [23, 11, 45, 30];
let numAry3 = [];
for (let i = 0; i < 5; i++) {
  numAry3[i] = parseInt(Math.random() * 50);
}
console.log(numAry3)

function getMax(numAry = []) {
  let max = 0;
  for (let i = 0; i < numAry.length; i++) {
    if (max < numAry[i]) {
      max = numAry[i];
    }
  }
  // console.log(`제일 큰 값은 ${max}`)
  return max; // 함수를 호출한 영역으로 반환. getMax 함수에 결과값을 반환.
}// end of getMax()

console.log(getMax(numAry1));
alert(getMax(numAry2));
document.write(getMax(numAry3));