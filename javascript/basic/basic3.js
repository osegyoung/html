//basic3.js
/*
두 숫자를 입력받아서 두수의 곱을 출력.
첫번째 값은 5의 값을 더하고, 두번째 3의  값을 빼서 두수의 차를 구하시오.
*/
// let anyVal1 = prompt("값을 입력하세요 : ");
// let anyVal2 = prompt("값을 입력하세요 : ");

// let result =Number(anyVal1) * parseInt(anyVal2);
// console.log (`두 수의 곱은 ${result} 입니다.`)

// let firstValue = prompt("첫번째 값을 입력하세요 : ")
// let secondValue = prompt("두번째 값을 입력하세요 : ")
// firstValue = parseInt(firstValue) +3; //parseInt(firstValue) +1;
// secondValue = parseInt(secondValue) -3; //parseInt(secondValue) -1;

// let firstValue = parseInt("첫번째 값을 입력하세요 : ")
// let secondValue = prompt("두번째 값을 입력하세요 : ")
// firstValue %=3; //parseInt(firstValue) +1;
// secondValue -=3; //parseInt(secondValue) -1;


// // console.log(firstValue,secondValue);
// let result = ++firstValue / --secondValue ;
// console.log(`${firstValue}와 ${secondValue}의 나눈  나머지는 ${result}`);

let firstValue = prompt("첫번째 값을 입력하세요 : ")
let secondValue = prompt("두번쨰 값을 입력하세요 : ")

firstValue +=5;
secondValue-=3;
result=firstValue - secondValue;
console.log(`${firstValue}에서 ${secondValue}의 값을 뺀 결과는 ${result}`);