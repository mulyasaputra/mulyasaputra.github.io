$.getJSON("data/website.json", function (data) {
  let website = data.website;
  $.each(website, function (i, data) {
    $("#website").append(
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

$.getJSON("data/design.json", function (data) {
  let design = data.design;
  $.each(design, function (i, data) {
    $("#design").append(
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

$.getJSON("data/apps.json", function (data) {
  let apps = data.apps;
  $.each(apps, function (i, data) {
    $("#apps").append(
      '<div class="container" data-aos="zoom-in-up"><a target="_blank" href="' +
        data.href +
        '"><img src="img/' +
        data.pic +
        '" alt="Payment" class="image"><div class="overlay"><div class="text">' +
        data.fres +
        "<span>" +
        data.spn +
        "</span></div></div></a></div>"
    );
  });
});
