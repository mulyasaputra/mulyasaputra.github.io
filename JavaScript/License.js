function Hilangarah() {
  $(".License, .Privacy, .Terms, .API").addClass("hilang");
  $("#Btn1, #Btn2, #Btn3, #Btn4").addClass("Tambah");
}
$("#Btn2, #Btn3, #Btn4").addClass("Tambah");

// Button onClick
$("#Btn1").on("click", function () {
  Hilangarah();
  $(".License").removeClass("hilang");
  $("#Btn1").removeClass("Tambah");
});

$("#Btn2").on("click", function () {
  Hilangarah();
  $(".Privacy").removeClass("hilang");
  $("#Btn2").removeClass("Tambah");
});

$("#Btn3").on("click", function () {
  Hilangarah();
  $(".Terms").removeClass("hilang");
  $("#Btn3").removeClass("Tambah");
});

$("#Btn4").on("click", function () {
  window.open("https://mulyasaputra.github.io/visite/", "_blank");
});
