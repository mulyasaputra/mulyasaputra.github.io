// Get the modal
$("#inText").keydown(function () {});
var klik = document.getElementById("tombol");
var warning = "Jangan lupa Tulis Pesan sebelim di kirim";

klik.onclick = function () {
  if ($("#inText").val() == "") {
    alert(warning);
  } else {
    var pesan = document.getElementById("inText").value;
    window.location =
      "https://api.whatsapp.com/send?phone=6281542253290&text=" + pesan;
  }
};

// View Tahun
date = new Date();
tahun = date.getFullYear();
var hakCipta =
  "Hak cipta" +
  " © " +
  tahun +
  " InSketch. Seluruh hak cipta dilindungi oleh siapa.";

document.getElementById("cc").innerHTML = hakCipta;
