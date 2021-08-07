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
