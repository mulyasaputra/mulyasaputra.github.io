//  Script for project.html
function tampilData() {
  $.getJSON("data/project.json", function (data) {
    let design = data.design;
    $.each(design, function (i, data) {
      $("#daftar").append(
        '<div class="title-project"><div class="container"><img src="img/' +
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
function data() {
  var sel = document.getElementById("option").value;
  // document.getElementById("demo").innerHTML = sel;
  console.log(sel);
}
$.getJSON("data/project.json", function (data) {
  let design = data.design;
  let content = " ";
});

// $.each(design, function (i, data) {
//   if (data.kategori == set) {
//     content +=
//       '<div class="title-project"><div class="container"><img src="img/' +
//       data.gambar +
//       '" class="image"><h4>' +
//       data.nama +
//       '</h4><a target="_blank" href="' +
//       data.link +
//       '"><span class="text">View More <i class="fas fa-arrow-right"></i></span></a></div></div>';
//   }
// });

// stript for index.html
$.getJSON("data/indexDT.json", function (data) {
  let design = data.design;
  $.each(design, function (i, data) {
    $("#design").append(
      '<div class="container" data-aos="fade-up-right"><a target="_blank" href="' +
        data.link +
        '"><img src="img/' +
        data.img +
        '" alt="Payment" class="image"><div class="overlay"><div class="text">' +
        data.start +
        "<span>" +
        data.end +
        "</span></div></div></a></div>"
    );
  });
});

$.getJSON("data/indexDT.json", function (data) {
  let website = data.website;
  $.each(website, function (i, data) {
    $("#website").append(
      '<div class="container" data-aos="fade-right"><a target="_blank" href="' +
        data.link +
        '"><img src="img/' +
        data.img +
        '" alt="Payment" class="image"><div class="overlay"><div class="text">' +
        data.start +
        "<span>" +
        data.end +
        "</span></div></div></a></div>"
    );
  });
});

$.getJSON("data/indexDT.json", function (data) {
  let apps = data.apps;
  $.each(apps, function (i, data) {
    $("#apps").append(
      '<div class="container" data-aos="fade-right"><a target="_blank" href="' +
        data.link +
        '"><img src="img/' +
        data.img +
        '" alt="Payment" class="image"><div class="overlay"><div class="text">' +
        data.start +
        "<span>" +
        data.end +
        "</span></div></div></a></div>"
    );
  });
});
