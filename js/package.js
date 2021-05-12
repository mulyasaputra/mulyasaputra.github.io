function tampilData() {
  $.getJSON("data/project.json", function (data) {
    let design = data.design;
    $.each(design, function (i, data) {
      $("#daftar").append(
        '<div class="title-project"><div class="container"><img src="' +
          data.gambar +
          '" class="image"><h4>' +
          data.nama +
          '</h4><a target="_blank" href="' +
          data.link +
          '"><span class="text">View More <i class="fas fa-arrow-right"></i></span></a></div></div>'
      );
    });
  });
}

tampilData();

$(".btna").on("click", function () {
  $(this).addClass("active");
  let kategori = $(this).html();
  console.log(kategori);
});
