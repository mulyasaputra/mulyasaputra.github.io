$.getJSON("https://inskrtch-de394-default-rtdb.firebaseio.com/download.json?print=pretty", function (data) {
  $(".jumlah-design").text(data.postdata.length + " Design");
  $(".jumlah-logo").text(data.postlogo.length + " Logo");
  $(".jumlah-vector").text(data.postvector.length + " Vector");
  $(".jumlah-codeFree").text(data.postcode.length + " CodeFree");
  $(".jumlah-project").text(data.postproject.length + " AppsProject");
});

function tampilSemuaData() {
  $.getJSON("https://inskrtch-de394-default-rtdb.firebaseio.com/download.json?print=pretty", function (data) {
    let postdata = data.postdata;
    $.each(postdata, function (i, data) {
      $("#isiPostingan").append(
        `<div class="card">
          <div class="cTNGambar">
            <a href="${data.urlGambar}" class="fancybox" data-fancybox="gallery1">
              <div class="blok far fa-eye"></div>
              <img class="img" src="${data.gambar}"alt="${data.alt}"/>
            </a>
            <div class="TLable">${data.label}</div>
          </div>
          <div class="iconDekorasi">
            <div class="kiri">
              <a class="fas fa-share" target="_blank" href=" ${data.link}">
                <span>  ${data.sumber}</span>
              </a>
            </div>
            <div class="kanan">
              <i class="far fa-comment"><span> ${data.comment} </span></i>
              <i class="far fa-heart"><span> ${data.love} </span></i>
              <i class="far fa-eye"><span> ${data.view} </span></i>
            </div>
          </div>
        </div>`
      );
    });
  });
}
tampilSemuaData();

// Data Post
$(".custom-select").on("click", function () {
  let pilih = a.innerHTML;
  if (pilih == "All Design") {
    console.log("halo");
    $("#isiPostingan").html("");
    tampilSemuaData();
    return;
  }
  $.getJSON("https://inskrtch-de394-default-rtdb.firebaseio.com/download.json?print=pretty", function (data) {
    let postdata = data.postdata;
    let kontent = "";
    // Tamppil Data
    $.each(postdata, function (i, data) {
      if (data.kategori == pilih) {
        kontent +=
          '<div class="card"><div class="cTNGambar"><a href="' +
          data.urlGambar +
          '" class="fancybox" data-fancybox="gallery2"><div class="blok far fa-eye"></div><img class="img" src="' +
          data.gambar +
          '"alt="' +
          data.alt +
          '"/></a><div class="TLable">' +
          data.label +
          '</div></div><div class="iconDekorasi"><div class="kiri"><a class="fas fa-share" target="_blank" href=" ' +
          data.link +
          '"><span>  ' +
          data.sumber +
          '</span></a></div><div class="kanan"><i class="far fa-comment"><span> ' +
          data.comment +
          ' </span></i><i class="far fa-heart"><span> ' +
          data.love +
          ' </span></i><i class="far fa-eye"><span> ' +
          data.view +
          " </span></i></div></div></div>";
      }
    });
    // Print Data
    $("#isiPostingan").html(kontent);
  });
});
// Data Page
$.getJSON("https://inskrtch-de394-default-rtdb.firebaseio.com/download.json?print=pretty", function (data) {
  //   Ambil Data Logo
  let postlogo = data.postlogo;
  $.each(postlogo, function (i, data) {
    $("#logo").append(
      `<div class="logoSVG">
        <div class="trckT">
          <span>${data.name}</span>
        </div>
        <div class="len">
          <img src="${data.label}" />
        </div>
        <div class="logoVC">
          <a target="_blank" href="${data.visit}">
            <img src="${data.logo}" alt="${data.name}" />
          </a>
        </div>
        <div class="trackB">
          <a href="${data.ark}" class="fas fa-bezier-curve"></a>
          <a target="_blank" href="${data.download}" class="fas fa-download"></a>
          <a target="_blank" href="https://www.shutterstock.com/g/Saputra112?rid=270347736&utm_medium=email&utm_source=ctrbreferral-link" class="fas fa-shopping-cart"></a>
        </div>
      </div>`
    );
  });

  //   Ambil Data Vector
  let postvector = data.postvector;
  $.each(postvector, function (i, data) {
    $("#vector").append(
      `<div class="Vcontain">
        <div class="Vimages ${data.background}">
          <div class="Vlabel">
            <img src="Icons/${data.label}.svg" />
          </div>
          <img class="Vgambar" src="${data.gambar}" />
        </div>
        <div class="Vtitle">
          <h2>${data.judul}</h2>
          <p>${data.tag}</p>
          <div>
            <a class="btnTB ${data.background}" href="${data.visite}" target="_blank" >View Project</a >
          </div>
        </div>
      </div>`
    );
  });

  //   Ambil Data CodeFree
  let postcode = data.postcode;
  $.each(postcode, function (i, data) {
    $("#Website").append(
      `<div class="posCards">
        <div class="flex">
          <div class="webImg">
            <img src="${data.gambar}" alt="blog" />
          </div>
          <div class="webTitle">
            <a href="${data.link}"><h2>${data.judul}</h2></a>
            <ul class="postmeta">
              <li class="author">
                <svg height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" ></path>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
                <span> <a>Appsventory &nbsp;&nbsp;|</a></span>
              </li>
              <li class="clock">
                <svg height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" ></path>
                  <path d="M0 0h24v24H0z" fill="none"></path> <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                </svg>
                <span>${data.tanggal}</span>
              </li>
            </ul>
            <p class="webP">${data.paragraf}</p>
          </div>
        </div>
        <div class="webButton">
          <div class="btnLihat">
            <a target="_blank" href="${data.pages}">
              <img src="Icons/globe-solid.svg">
                <p>View Pages</p>
              </img>
            </a>
          </div>
          <div class="btnGit">
            <a target="_blank" href="${data.link}">
              <img src="Icons/github-brands.svg">
                <p>View Github</p>
              </img>
            </a>
          </div>
        </div>
      </div>`
    );
  });
});

// Click Option
$(".vbutton").on("click", function () {
  window.open("https://mulyasaputra.github.io/visite/", "_blank");
});

// Ini Adalah Script Untuk function
function Hilangarah() {
  $("#videos, #logo, #vector, #Website, #about").addClass("hilang");
  $(".Shots, .Vector, .Video, .Logo, .Website, .About").removeClass("addColor");
}
function Tampilkan() {
  $("#isiPostingan").removeClass("hilang");
}
function KontenHilang() {
  $("#isiPostingan").addClass("hilang");
}
function pilihanTampil() {
  $(".custom-select").removeClass("sembunyi");
}
function pilihanHilang() {
  $(".custom-select").addClass("sembunyi");
}

Hilangarah();
$(".Shots").addClass("addColor");

// Ini Adalah Script Untuk Tombol
$(".Shots").on("click", function () {
  Hilangarah();
  Tampilkan();
  pilihanTampil();
  $(this).addClass("addColor");
});
$(".Video").on("click", function () {
  Hilangarah();
  KontenHilang();
  pilihanHilang();
  $("#videos").removeClass("hilang");
  $(this).addClass("addColor");
});
$(".Logo").on("click", function () {
  Hilangarah();
  KontenHilang();
  pilihanHilang();
  $("#logo").removeClass("hilang");
  $(this).addClass("addColor");
});
$(".Vector").on("click", function () {
  Hilangarah();
  KontenHilang();
  pilihanHilang();
  $("#vector").removeClass("hilang");
  $(this).addClass("addColor");
});
$(".Website").on("click", function () {
  Hilangarah();
  KontenHilang();
  pilihanHilang();
  $("#Website").removeClass("hilang");
  $(this).addClass("addColor");
});
$(".About").on("click", function () {
  Hilangarah();
  KontenHilang();
  pilihanHilang();
  $("#about").removeClass("hilang");
  $(this).addClass("addColor");
});

// Function #
if (window.location.href.includes("#about")) {
  Hilangarah();
  KontenHilang();
  pilihanHilang();
  $("#about").removeClass("hilang");
  $(".About").addClass("addColor");
} else {
  if (window.location.href.includes("#logo")) {
    Hilangarah();
    KontenHilang();
    pilihanHilang();
    $("#logo").removeClass("hilang");
    $(".Logo").addClass("addColor");
  } else {
    if (window.location.href.includes("#vector")) {
      Hilangarah();
      KontenHilang();
      pilihanHilang();
      $("#vector").removeClass("hilang");
      $(".Vector").addClass("addColor");
    } else {
      if (window.location.href.includes("#code")) {
        Hilangarah();
        KontenHilang();
        pilihanHilang();
        $("#Website").removeClass("hilang");
        $(".Website").addClass("addColor");
      }
    }
  }
}
