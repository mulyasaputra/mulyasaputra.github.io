let link = window.location.href;
sPageURL = link.substring(link.indexOf("?") + 1).split(/[=&]+/)[1];
$.getJSON("https://inskrtch-de394-default-rtdb.firebaseio.com/blogpost.json", function (data) {
  let kontent = "";
  $.each(data, function (i, data) {
    if (sPageURL == data.id) {
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
          <h2>${data.tittle}</h2>
          <div class="create">
            <img src="${data.Profile}" alt="profile" />
            <span>${data.publis}</span>
          </div>
        </div>
        <div class="pagesImg">
          <h3>Pages</h3>
          <div class="gallery">
            <div>
              <a href="${data.pic.img1}" class="fancybox" data-fancybox="gallery1"><img src="${data.pic.img1}" alt="thumbnail" /></a>
            </div>
            <div>
              <a href="${data.pic.img2}" class="fancybox" data-fancybox="gallery1"><img src="${data.pic.img2}" alt="thumbnail" /></a>
            </div>
            <div>
              <a href="${data.pic.img3}" class="fancybox" data-fancybox="gallery1"><img src="${data.pic.img3}" alt="thumbnail" /></a>
            </div>
            <div>
              <a href="${data.pic.img4}" class="fancybox" data-fancybox="gallery1"><img src="${data.pic.img4}" alt="thumbnail" /></a>
            </div>
            <div>
              <a href="${data.pic.img5}" class="fancybox" data-fancybox="gallery1"><img src="${data.pic.img5}" alt="thumbnail" /></a>
            </div>
            <div>
              <a href="${data.pic.img6}" class="fancybox" data-fancybox="gallery1"><img src="${data.pic.img6}" alt="thumbnail" /></a>
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
  if (kontent == "") {
    window.location = "404.html";
  } else {
    $("#postBlog").html(kontent);
  }
});
