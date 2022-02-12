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
  // scroll-up button show/hide script
  if (this.scrollY > 500) {
    $(".button-up").addClass("show");
  } else {
    $(".button-up").removeClass("show");
  }

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
  window.open("/", "_self");
});

// Navbar onClck Link
$("#Welcome").on("click", function () {
  window.open("/", "_self");
});
$("#Download").on("click", function () {
  window.open("Download", "_self");
});
$("#License").on("click", function () {
  window.open("License", "_self");
});
$("#Blog").on("click", function () {
  alert("Untuk saat ini halaman blog belum bisa di akses oleh semua orang termasuk saya");
});
$(".suport").on("click", function () {
  alert("click button suport");
});

// Hak Copta
date = new Date();
tahun = date.getFullYear();
var hakCipta = "Hak cipta" + " © " + tahun + " InSketch. Seluruh hak cipta dilindungi oleh siapa.";
document.getElementById("cc").innerHTML = hakCipta;

// Animasi
$(".LMenu").on("click", function () {
  $(".menuLink .LMenu").toggleClass("active");
  $(" .menuLink .menu").toggleClass("active");
});
$(".LDownload").on("click", function () {
  $(".menuLink .LDownload").toggleClass("active");
  $(" .menuLink .download").toggleClass("active");
});
$(".LInfo").on("click", function () {
  $(".menuLink .LInfo").toggleClass("active");
  $(" .menuLink .informasi").toggleClass("active");
});
$(".LApps").on("click", function () {
  $(".menuLink .LApps").toggleClass("active");
  $(" .menuLink .apps").toggleClass("active");
});

// Footer button
$(".fa-instagram").on("click", function () {
  window.open("https://www.instagram.com/appsventory", "_blank");
});
$(".fa-youtube").on("click", function () {
  window.open("https://www.youtube.com/channel/UCcJCTC9nMe7AyhJIda4Kc3A", "_blank");
});
$(".fa-github").on("click", function () {
  window.open("https://github.com/mulyasaputra", "_blank");
});

// Button Up
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 200) {
      $(".button-up").addClass("show");
    } else {
      $(".button-up").removeClass("show");
    }
  });
  // slide-up script
  $(".button-up").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });
});
