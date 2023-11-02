$(document).ready(function () {
  // myExternalAlert function remains the same, no jQuery needed for alert.

  $('#submitNameBtn').on('click', function () {
    var name = $("#nameInput").val();
    if (name === "")
      alert(`이름을 입력해주세요`);
    else
      alert(`안녕하세요! ${name} 님`);
  });

  $('#submitNumberBtn').on('click', function () {
    var number = $("#nameNumber").val();
    if (isNaN(number) || number === "")
      alert(`숫자를 입력해 주세요.`);
    else {
      number = +number;
      if (number > 100 || number < 1) {
        alert(`입력한 수는 ${number}, 1이상 100이하를 넣어주세요.`);
      }
      else {
        for (let i = 1; i <= number; i++) {
          console.log(i);
        }
        alert(`입력한 수는 ${number}, 까지 출력 완료되었습니다.`);
      }
    }
  });

  $('#submitColorBtn').on('click', function () {
    var colorInput = $("#colorInput").val();
    if (colorInput === "") {
      alert(`텍스트 값을 입력해 주세요`);
    } else {
      $("#outputColor").html(`<p>${colorInput}</p>
                <button class='colorChange' data-color='Red'>빨강</button>
                <button class='colorChange' data-color='Blue'>파랑</button>
                <button class='colorChange' data-color='Yellow'>노랑</button>`);
    }
  });

  $(document).on('click', '.colorChange', function () {
    var colorText = $(this).text();
    alert(`${colorText}색으로 변경합니다`);
    $("#outputColor").css('color', $(this).data('color'));
  });

  $('#resetColorsBtn').on('click', function () {
    $('.box').css({
      'background-color': '',
      'color': ''
    });
  });

  $(document).on('click', '.switchColor', function () {
    resetColors();
    $(this).css({
      'background-color': $(this).data('bgColor'),
      'color': $(this).data('fontColor')
    });
  });

  function resetColors() {
    $('.box').css({
      'background-color': '',
      'color': ''
    });
  }
});