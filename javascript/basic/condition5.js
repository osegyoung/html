//condition5.js
// 두 수: 1~100 까지의 임의의 값을 생성.
// 큰수에서 작은 수 뺴서 결과값을 출력. 

// console.log ( num1 = parseInt(Math.max random(1,100)));
// console.log ( num2 = parseInt(Math.min random(1,100)));
// console.log (num1 - num2);

// 세수 중에서 제일 큰 값을 출력.
let num1 = parseInt(Math.random()*100)+1;
let num2 = parseInt(Math.random()*100)+1;
let num3 = parseInt(Math.random()*100)+1;

if(num1>num2) {
  if(num1 >num3){
    result = num1;
  }else {
    result = num3;
  }
}else {
  if(num2>num3){
    result = num2;
  }else {
    result = num3;
  }
}
console.log(`가장 큰수는 ${result}입니다.`);