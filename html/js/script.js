function myExternalAlert() {
  alert('자바스크립트 월드');
}

function submitName() {
  var name = document.getElementById("nameInput").value;
  if (name === "")
    alert(`이름을 입력해주세요`);
  else
    alert(`안녕하세요! ${name} 님`);
}

function submitNumber() {
  var number = document.getElementById("nameNumber").value;
  if (isNaN(number) || number === "")
    alert(`숫자를 입력해 주세요.`);
  else {
    number = +number;
    if (number > 100 || number < 1) {
      alert(`입력한 수는 ${number}, 1이상 100이하를 넣어주세요.`)
    }
    else {
      for (let i = 1; i <= number; i++) {
        console.log(i)
      }
      alert(`입력한 수는 ${number}, 까지 출력 완료되었습니다.`)
    }
  }
}