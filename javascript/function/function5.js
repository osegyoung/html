//function5.js : 메소드. 
//name에 this : object일때 자기자신을 가리킴. 
let obj = {
  name: "홍길동",
  birth: " 1998-08-08",
  bloodtype: "AB",
  showInfo: function () {
    console.log(`이름은 ${this.name}, 생일은 ${this.birth}입니다.`)
  },
  addNumber: function (num1 = 0, num2 = 0) {
    return num1 + num2;
  },
  calculateFuc: function (num1 = 0, num2 = 0, calFnc) {
    return calFnc(num1, num2);
  }
}

obj.showInfo();
// alert(obj.addNumber(10, 12));
let result = obj.calculateFuc(10, 5, function (a, b) {
  return a - b;
})
console.log(`결과 값:${result}`);
let result2 = obj.calculateFuc(10, 5, function (a, b) {
  return a + b;
})
console.log(`결과 값:${result2}`);