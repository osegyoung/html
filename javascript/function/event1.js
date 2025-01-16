//event1.js
let item = document.querySelector('button[name = add]');
item.addEventListener('click',function () {
  let n1 = document.querySelector('#num1').valueAsNumber;
  let n2 = document.querySelector('#num2').valueAsNumber;
  console.dir(n1 + n2);
  document.querySelector('#result').value = n1 + n2;
});

let item2 = document.querySelector('button[name = minus]');
item2.addEventListener('click',function(){
  let n1 = document.querySelector('#num1').valueAsNumber;
  let n2 = document.querySelector('#num2').valueAsNumber;
  console.dir(n1 - n2);
  document.querySelector('#result').value = n1 - n2;
});