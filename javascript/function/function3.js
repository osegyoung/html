//function3.js
// 매개변수 2개 : 

function getaverage(num1 = 0, num2 = 0) { //=0넣는 이유 : 초기값으로 사용하겠다는 뜻.
let sum = 0, avg = 0;
sum = num1 + num2;
avg = sum/2;

return avg; // 호출한 영역으로 avg값을 반환.
}

let avg1 = getaverage(10, 30);
let avg2 = getaverage(30, 50);
let result = getaverage(avg1. avg2);
console.log(`평균 : ${result}`);

