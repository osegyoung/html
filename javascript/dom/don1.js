//dom1.js

document.addEventListener('DOMContentLoaded', init);

function init() {
  console.log(document);
  document.forms.myForm.addEventListener('submit', function (e) {
    e.preventDefault(); //기본 기능 차단
    // 사용자의 입력값을 변수에 저장.
    let mid = document.querySelector('input[name="member_id"]').value;
    let mname = document.querySelector('input[name="member_name"]').value;
    let mpoint = document.querySelector('input[name="point"]').value;

    if (mid == null || mid.length < 5 || mid.length > 20) {
      alert("id를 5자 이상 20자 이하로 생성해주세요");
      return; // 함수종료
    }

    let member = {
      member: mid,
      memberName: mname,
      point: mpoint
    };

    let tr = makeTr(member); //값.
    // let member = [mid, mname, mpoint];
    // let tr = makeTrAry(member);


    // tbody의 하위요소로 추가.
    document.querySelector('#list').appendChild(tr);
  }) // end of submit.

  //input 값이 chage 이벤트등록.
  document.querySelector('thead input').addEventListener('chage', function () {
    // tbody input 값을 변경. 
    document.querySelectorAll('tbody input').forEach(function (item) {
item.checked = document.querySelector('thead input').checked;
    });
  });

}; // end of init().




function makeTr(mbr = {}) {
  // <tr> 필요한 함수 : createElement , appendChild
  //   <td>admin</td>
  //   <td>김관리</td>
  //   <td>120</td>
  // </tr>
  let tr1 = document.createElement('tr'); //td*3를 자식요소로 가질 부모.
  let td1 = document.createElement('td');
  let btn1 = document.createElement('input');
  chk.type = 'checkbox';
  btn.innerHTML = '삭제';
  td.appendChild(chk);
  tr.appendChild(td1);

  let tr = document.createElement('tr'); //td*3를 자식요소로 가질 부모.
  // mbr.forEach(function (item) {
  for (let prop in mbr) {
    let td = document.createElement('td'); //회원ID, 회원이름, 점수
    td.innerText = mbr[prop]; // 아이디, 이름, 점수
    tr.appendChild(td);
  }
  //<td><button>삭제</button></td>
  let td = document.createElement('td');
  let btn = document.createElement('button');
  btn.backgroundColor = 'yellow';
  btn.innerHTML = '삭제';
  btn.addEventListener('click', function () {
    btn.parentElement.parentElement.remove();
  });

  td.appendChild(btn);
  tr.appendChild(td);
  return tr; // return;
} // end of makeTr().


// for (let prop in mbr) {
//   let td = document.createElement('td'); //회원ID, 회원이름, 점수
//   td.innerText = mbr[prop];
//   tr.appendChild(td);
// };