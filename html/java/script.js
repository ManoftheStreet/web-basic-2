function myExternalAlert() {
  alert('자바스크립트 월드');
}

function submitName() {
  var name = document.getElementById("nameInput").value;
  if(name ==="")
    alert(`이름을 입력해주세요`);
  else 
    alert(`안녕하세요! ${name} 님`);
}