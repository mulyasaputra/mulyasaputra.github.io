let link = window.location.href;
sPageURL = link.substring(link.indexOf("?") + 1).split(/[=&]+/)[1];
$.getJSON("https://inskrtch-de394-default-rtdb.firebaseio.com/download/postlogo.json?print=pretty", function (data) {
  $.each(data, function (i, data) {
    if (sPageURL == data.id) {
      // left Section
      $(".list-link").html(`&nbsp;&nbsp;logo - ${data.text.title}`);
      $("#banner-logo").attr("src", `${data.pic.view}`);
      $(".deskripsi p").html(data.text.description);
      $("#info").html(`<ul>
          <li>Resolusi: ${data.text.img.Resolusi}</li>
          <li>Nama: ${data.text.title}</li>
          <li>Lisensi: ${data.text.img.licence}</li>
          <li>Mengetik: ${data.text.img.Mengetik}</li>
          <li>DPI gambar: ${data.text.img.DPI}</li>
        </ul>`);

      //   right section
      $(".ads a").attr("href", `${data.ads.link}`);
      $(".ads a img").attr("src", `${data.ads.banner}`);
      $(".dwn h2").html(data.dwn.name);
      $(".tag-name").html(`
          <span>${data.dwn.tag[0]}</span>
          <span>${data.dwn.tag[1]}</span>
          <span>${data.dwn.tag[2]}</span>`);
      $("#info-bawah-file").html(`
          <td>${data.text.title}</td>
          <td>${data.dwn.info.type}</td>
          <td>${data.dwn.info.size}</td>`);
      $("#short-download").attr("href", `${data.download}`);

      //   Button Share
      $(".fa-facebook-f").click(function () {
        window.open(`https://www.facebook.com/dialog/share?app_id=87741124305&href=${link}`, `_blank`);
      });
      $(".fa-twitter").click(function () {
        window.open(
          `https://twitter.com/home?status=${data.dwn.name}%20here%20${link}?url=https://mulyasaputra.github.io/`,
          `_blank`
        );
      });
      $(".fa-pinterest-p").click(function () {
        window.open(
          `https://www.pinterest.com/pin/create/button/?url=${link}%26feature%3Dshare&description=Download%20the%20concept%20design%20only%20from%20InSketch.&is_video=false&media=${data.pic.view}`,
          `_blank`
        );
      });
      $(".fa-whatsapp").click(function () {
        window.open(`whatsapp://send?text=${data.dwn.name}%20%2D%20${link}`, `_blank`);
      });
      $(".fa-telegram-plane").click(function () {
        window.open(
          `https://telegram.me/share/url?url=${link} & text=Ada%20yang%20keren%20lho,%20nyesel%20kalo%20ga%20buka...`,
          `_blank`
        );
      });
      $(".fa-reddit-alien").click(function () {
        window.open(`https://reddit.com/submit?url=${link}&title=${data.dwn.name}`, `_blank`);
      });
      $(".fa-tumblr").click(function () {
        window.open(
          `https://www.tumblr.com/share/link?url=https://mulyasaputra.github.io/?url="${link}"&name="${data.dwn.name}"`,
          `_blank`
        );
      });
      $(".fa-times").click(function () {
        alert("Iklan tidak bisa di hilangkan");
      });
    }
  });
});
//   ${data.text.title}
