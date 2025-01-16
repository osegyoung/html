let item = document.querySelector('button');
console.log(item);

item.addEventListener('click', function (){
  alert ('구구단이 나옵니다. 조심하세요');
});

item.addEventListener('mouseover', function (){
  item.style.backgroundColor = 'yellow';
});

document.querySelector('button').addEventListener('mouseout', function (){
  item.style.backgroundColor = 'aqua';
});