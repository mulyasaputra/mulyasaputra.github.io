// Rest Api tes
$.getJSON("https://inskrtch-de394-default-rtdb.firebaseio.com/index.json?print=pretty", function (data) {
  let postBanner = data.postBanner;
  $.each(postBanner, function (i, data) {
    $("#lembar").append(
      '<div class="box-project"><img src="' +
        data.urlGambar +
        '" alt="" /><div class="box-overvlow"><div class="over-top"><h5>' +
        data.postTag +
        '</h5><a href="' +
        data.urlAction +
        '"><i class="fas fa-arrow-right"></i></a></div><div class="over-bottom"><a href="' +
        data.urlAction +
        '"><h3>' +
        data.postName +
        "</h3></a><span>Download the concept design only from InSketch.</span></div></div></div>"
    );
  });
  let postVideo = data.postVideo;
  $.each(postVideo, function (i, data) {
    $("#embed").append(
      `<div class="card-video">
        <div class="videos">
          <img
            src="${data.urlGambar}"
          />
          <div class="play">
            <a href="${data.urlVideo}" id="videolink" class="button more">
              <img src="/Img/play-circle-solid.svg" />
            </a>
          </div>
        </div>
        <div class="title-video"><i class="fas fa-share"></i><a href="${data.urlVideo}">${data.urlNama}</a></div>
      </div>`
    );
  });
});

// Get the modal
$("#inText").keydown(function () {});
var klik = document.getElementById("tombol");
var warning = "Jangan lupa Tulis Pesan sebelum di kirim";

klik.onclick = function () {
  if ($("#inText").val() == "") {
    alert(warning);
  } else {
    var pesan = document.getElementById("inText").value;
    window.location = "https://api.whatsapp.com/send?phone=6281542253290&text=" + pesan;
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

{
  /* <div id="${data.idNama}" class="mfp-hide">
<iframe
  width="853"
  height="480"
  src="https://www.youtube.com/embed/${data.urlVideo}"
  title="${data.urlNama}"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
</div> */
}
