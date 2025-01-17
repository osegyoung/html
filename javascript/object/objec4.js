//object4.js
// 1일의 요일, 마지막 날이 무엇인지 알아야함.
// let month = 2;
// let date = 0;
// let year = 2024;

// let today = new Date();
// today.setFullYear(year)
// today.setMonth(month); //정상적인 월의 값 -1해야한다.
// today.setDate(date);

// console.log(today, today.getDay()); //요일

// today = new Date();
// today.setFullYear(2022);
// today.setMonth(4);

// console.log(today,today.getDate());
console.clear();
let a = {};
let b = {};
console.log(a == b);//객체를 담을 때는 주소값을 담는다. 항상  false다.

today = new Date();
let now = new Date();
console.log(today.getTime() == now.getTime());


console.log(new Date(2000));
console.log(today.valueOf() == now.valueOf());
console.log(today.valueOf());