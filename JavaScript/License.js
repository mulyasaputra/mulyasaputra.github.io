function Hilangarah() {
  $(".License, .Privacy, .Terms, .API").addClass("hilang");
  //   $("#Btn1, Btn2, Btn3, #Btn4").addClass("hilang");
}

// Button onClick
$("#Btn1").on("click", function () {
  Hilangarah();
  $(".License").removeClass("hilang");
});

$("#Btn2").on("click", function () {
  Hilangarah();
  $(".Privacy").removeClass("hilang");
});

$("#Btn3").on("click", function () {
  Hilangarah();
  $(".Terms").removeClass("hilang");
});

$("#Btn4").on("click", function () {
  Hilangarah();
  $(".API").removeClass("hilang");
});
