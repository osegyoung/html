//function4.js

// 이벤트 - 이벤트핸들러.
let item = document.querySelector('button');
console.log(item);

item.addEventListener('click', function(){
alert('마우스가 클릭되었습니다.');
});

item.addEventListener('mouseover', function(){
  item.style.backgroundColor = 'blue'; //자바스크립트에서는 -을 대문자로 쓴다. 
});

document.querySelector('button').addEventListener('mouseout', function(){
  item.style.backgroundColor = 'yellow';
});