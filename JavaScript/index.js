// Rest Api Baner
$.getJSON(
  "https://inskrtch-de394-default-rtdb.firebaseio.com/blogpost.json",
  function (data) {
    $.each(data, function (i, data) {
      $("#lembar").append(
        '<div class="box-project"><img src="' +
          data.pic.thumbnail +
          '" alt="" /><div class="box-overvlow"><div class="over-top"><h5>' +
          data.tag.master +
          '</h5><a href="/preview?id=' +
          data.id +
          '"><i class="fas fa-arrow-right"></i></a></div><div class="over-bottom"><a href="/preview?id=' +
          data.id +
          '"><h3>' +
          data.name +
          "</h3></a><span>Download the concept design only from InSketch.</span></div></div></div>"
      );
    });
  }
);
// Rest Api Video
$.getJSON(
  "https://inskrtch-de394-default-rtdb.firebaseio.com/player.json?print=pretty",
  function (player) {
    var link = player.link;
    var play = link.split("be/")[1];
    var final = `https://www.youtube.com/embed/${play}?enablejsapi=1&version=3&playerapiid=ytplayer`;
    $(".elementor-video").prop("src", final);
    $(".text-video h2").html(player.tittle);
  }
);

// Get the modal
$("#inText").keydown(function () {});
var klik = document.getElementById("tombol");
var warning = "Jangan lupa Tulis Pesan sebelum di kirim";

klik.onclick = function () {
  if ($("#inText").val() == "") {
    alert(warning);
  } else {
    var pesan = document.getElementById("inText").value;
    window.location =
      "https://api.whatsapp.com/send?phone=6281542253290&text=" + pesan;
  }
};

// function HidenAll() {
//   $(".menuLink .LMenu").removeClass("active");
//   $(" .menuLink .menu").removeClass("active");
//   $(".menuLink .LDownload").removeClass("active");
//   $(" .menuLink .download").removeClass("active");
//   $(".menuLink .LInfo").removeClass("active");
//   $(" .menuLink .informasi").removeClass("active");
//   $(".menuLink .LApps").removeClass("active");
//   $(" .menuLink .apps").removeClass("active");
// }

$("#videolink").magnificPopup({
  type: "inline",
  midClick: true,
  closeOnContentClick: true,
  showCloseBtn: false,
});

// Start Video Mobile Function
$("#botton-play").click(function () {
  $(".elementor-video")[0].contentWindow.postMessage(
    '{"event":"command","func":"' + "playVideo" + '","args":""}',
    "*"
  );
  $(".modalBox").addClass("active");
  $("#botton-play").addClass("hiden");
});
$(".modalBox").click(function () {
  $(".elementor-video")[0].contentWindow.postMessage(
    '{"event":"command","func":"' + "stopVideo" + '","args":""}',
    "*"
  );
  $(".modalBox").removeClass("active");
  $("#botton-play").removeClass("hiden");
});
// End Video Mobile Function

let heroHeight = $(".herosection").height();
$("#particles-js").height(heroHeight + 90);
