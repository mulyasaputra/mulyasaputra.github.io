// PotatoScreen
var width = screen.width;
if (width < 308) {
  alert(
    "Maaf ukuran layar hp anda terlalu kentang. \n Web ini belum sempurna untu ukuran layar kurang dari 360px, \n Buka dalam mode desktop atau ganti dengan hp yang memiliki \n ukuran layar lebih besar dari yang kau pegang sekarang"
  );
  if (alert) {
    width = 361;
  }
}

// Index Respon JavaScript
$(document).ready(function () {
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

// Navbar onClock
$(".logo").on("click", function () {
  window.open("https://mulyasaputra.github.io", "_self");
});

// Navbar onClck Link
$("#Welcome").on("click", function () {
  window.open("https://mulyasaputra.github.io", "_self");
});
$("#Download").on("click", function () {
  window.open("Download", "_self");
});
$("#License").on("click", function () {
  window.open("License", "_self");
});
$("#Blog").on("click", function () {
  alert(
    "Untuk saat ini halaman blog belum bisa di akses oleh semua orang termasuk saya"
  );
});
$(".daftar button").on("click", function () {
  alert("click button suport");
});
