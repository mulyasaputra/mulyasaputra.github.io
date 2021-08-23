//  Script for Data
$.getJSON("Json/Thumbnail.json", function (data) {
  let design = data.design;
  $.each(design, function (i, data) {
    $("#lembar").append(
      '<div class="card"><div class="cTNGambar"><img class="img" src="' +
        data.gambar +
        '" alt="' +
        data.alt +
        '" /><div class="TLable">' +
        data.info +
        '</div></div><div class="label"><a target="_blank" href="' +
        data.link +
        '"><h3>' +
        data.nama +
        '</h3><i class="fas fa-arrow-right"></i></a><p>' +
        data.paraf +
        "</p></div></div>"
    );
  });
});
