//condition4.js

// const obj = {
//   name: "ooo",
//   age : 90,
//   showName : function() { // 메소드.
//     console.log(obj.name);
//   }
// }
// obj.showName();

// // 1~10 사이의 임의수 출력.
// console.log();// 0<= x < 10 값의 출력.
// let num1 =parseInt(Math.random()* 10 ) + 1; 
// let num2 =parseInt(Math.random()* 10 ) + 1; 

 let sumEven = 10; //짝수의 값은 sumEven에 합하기.
 let sumOdd = 20;  //홀수의 값은 sumOdd에 합하기.

// // truthy (10, "aaa", true) vs. falsdy (0, "", null. undefined)

if (num1 % 2 ) {
  sumOdd += num1;
}else {
  sumEven += num1;
}


if (num2 % 2 ) {
  sumEven += num2;
}else {
  sumOdd += num2;
}

// let number = parseInt(prompt("숫자를 입력하세요 "));

// if (number % 2 == 0) {
//   console.log(number += sumEven);
// } else(number % 2 == 1)
//   console.log(number += sumOdd);
