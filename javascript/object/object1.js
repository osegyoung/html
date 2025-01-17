//object1.js

let obj = {} //객체(인스턴스)
obj = new Object(); //생성자

obj.title = "내가 자바다."
obj["price"]= 30000;
   
console.log(obj);

let today = new Date();
console.log(today.getFullYear() + '년도');

let numAry = [10, 20, 30]; //new Array(); -> 문자도 가능하긴 하지만 불편함.
numAry.push(40); //제일뒤에 추가
numAry.unshift(5); // 제일 앞에 추가
numAry.splice(1,1,8); //원하는 위치에 추가,삭제,수정 가능.

console.log(numAry)