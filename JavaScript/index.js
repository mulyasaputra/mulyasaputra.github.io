var width = screen.width;
$(document).ready(function () {
  $(window).scroll(function () {
    // PotatoScreen
    if (width < 308) {
      alert(
        "Maaf ukuran layar hp anda terlalu kentang. \n Web ini belum sempurna untu ukuran layar kurang dari 360px, \n Buka dalam mode desktop atau ganti dengan hp yang memiliki \n ukuran layar lebih besar dari yang kau pegang sekarang"
      );
      if (alert) {
        width = 361;
      }
    }
  });

  $(".menu .daftar a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".menu .daftar").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});
