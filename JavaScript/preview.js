function GetURLParameter(sParam) {
  let link = window.location.href;
  sPageURL = link.substring(link.indexOf("?") + 1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}

// javascript logic operator
var id = GetURLParameter("id");
var post = GetURLParameter("post");
let link = window.location.href;
if (link.match("id") && link.match("post")) {
  $.getJSON("https://inskrtch-de394-default-rtdb.firebaseio.com/preview.json?print=pretty", function (data) {
    let kontent = "";
    // Tamppil Data
    $.each(data, function (i, data) {
      if (data.post == post) {
        kontent = `
            <div class="heroimages">
              <img src="${data.banner}" alt="" />
            </div>
            <div id="postContaint">
              <div class="download">
                <div class="box">
                    <div class="atas">
                      <h1>${data.name}</h1>
                      <span>Download the concept design only from InSketch.</span>
                    </div>
                  <div class="bawah">
                  <div class="tag">
                    <div class="tagar">
                      <img src="Icons/hashtag-solid.svg" />
                      <span>${data.tag.hashtag1}</span>
                    </div>
                    <div class="tagar">
                      <img src="Icons/hashtag-solid.svg" />
                      <span>${data.tag.hashtag2}</span>
                    </div>
                    <div class="tagar">
                      <img src="Icons/hashtag-solid.svg" />
                      <span>${data.tag.hashtag3}</span>
                    </div>
                    <div class="tagar">
                      <img src="Icons/hashtag-solid.svg" />
                      <span>${data.tag.hashtag4}</span>
                    </div>
                  </div>
                  <div class="button">
                    <a href="${data.download}" class="dwn">Download</a>
                    <a href="${data.share}"><div class="far fa-share-square"></div></a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Isi dari konten -->
            <div id="container">
              <div class="title">
                <h2>${data.titel}</h2>
                <div class="create">
                  <img src="${data.Profile}" alt="profile" />
                  <span>${data.publis}</span>
                </div>
              </div>
              <div class="pagesImg">
                <h3>Pages</h3>
                <div class="gallery">
                  <div>
                    <a href="${data.prev.img1}" class="fancybox" data-fancybox="gallery1"><img src="${data.pic.img1}" alt="thumbnail" /></a>
                  </div>
                  <div>
                    <a href="${data.prev.img1}" class="fancybox" data-fancybox="gallery1"><img src="${data.pic.img1}" alt="thumbnail" /></a>
                  </div>
                  <div>
                    <a href="${data.prev.img1}" class="fancybox" data-fancybox="gallery1"><img src="${data.pic.img1}" alt="thumbnail" /></a>
                  </div>
                  <div>
                    <a href="${data.prev.img1}" class="fancybox" data-fancybox="gallery1"><img src="${data.pic.img1}" alt="thumbnail" /></a>
                  </div>
                  <div>
                    <a href="${data.prev.img1}" class="fancybox" data-fancybox="gallery1"><img src="${data.pic.img1}" alt="thumbnail" /></a>
                  </div>
                  <div>
                    <a href="${data.prev.img1}" class="fancybox" data-fancybox="gallery1"><img src="${data.pic.img1}" alt="thumbnail" /></a>
                  </div>
                </div>
              </div>
              <div class="about">
                <h2>${data.name}</h2>
                <a href="${data.Visite}">Visit Site</a>
                <p>${data.paragraf}</p>
              </div>
              <div class="about">
                <h2>${data.name}</h2>
                <p>${data.paragraf}</p>
              </div>
              <div class="about">
                <h2>${data.name}</h2>
                <p>${data.paragraf}</p>
              </div>
              </div>
            </div>`;
      }
    });
    // Print Data
    $("#postBlog").html(kontent);
  });
} else {
  window.location = "/";
}

// ` + data.banner + `
