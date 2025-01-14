//condition2.js
//입력받은 숫자 -> 2의 배수인지, 3의 배수인지 
//값이 2개인  값은 ->ㅇ과 ㅇ의 배수입니다.이런식으로 나오게 하기 


// 
// } else {
//   if (number % 2 == 0) {
//     if (number % 3 == 0) {
//       console.log(number + ' 2와 3의 배수입니다.');
//     } else {
//       console.log(' 2의 배수입니다.');
//     }
//   } else if (number % 3 == 0) {
//     console.log(' 3의 배수입니다.');
//   }
// }


// let number = parseInt(prompt("숫자를 입력하세요 : "));
// console.log(number == "NaN");
// if (number == 0) {
//   console.log('다른 값을 입력하세요.');
// } 



if (number == 0 || isNaN(number)) {
  console.log("정상적인 값을 입력하세요.");
} else {
  if (number % 2 == 0 && number % 3 == 0) {
    if (number % 3 == 0) {
      console.log('2와 3의 배수입니다.');
    } else if (number % 2 == 0) {
      console.log(' 2의 배수입니다.');
    }
  } else if (number % 3 == 0) {
    console.log(' 3의 배수입니다.');
  }
}