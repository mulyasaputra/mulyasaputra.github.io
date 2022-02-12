//  Script for Data
// $.getJSON("Json/Thumbnail.json", function (data) {
//   let design = data.design;
//   $.each(design, function (i, data) {
//     $("#lembar").append(
//       '<div class="card"><div class="cTNGambar"><img class="img" src="' +
//         data.gambar +
//         '" alt="' +
//         data.alt +
//         '" /><div class="TLable">' +
//         data.info +
//         '</div></div><div class="label"><a target="_blank" href="' +
//         data.link +
//         '"><h3>' +
//         data.nama +
//         '</h3><i class="fas fa-arrow-right"></i></a><p>' +
//         data.paraf +
//         "</p></div></div>"
//     );
//   });
// });

// Drag to slide
const slider = document.querySelector("#lembar");
const review = document.querySelector(".Testimonials .box-container");
let mouseDown,
  mouseKlik = false;
let startX, scrollLeft, startY, scrollRight;

// Drag to slide Project
let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener("mousemove", (e) => {
  e.preventDefault();
  if (!mouseDown) {
    return;
  }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

// Drag to slide Review
let startDrag = function (b) {
  mouseKlik = true;
  startY = b.pageX - review.offsetLeft;
  scrollRight = review.scrollLeft;
};
let stopDrag = function (event) {
  mouseKlik = false;
};

review.addEventListener("mousemove", (b) => {
  b.preventDefault();
  if (!mouseKlik) {
    return;
  }
  const y = b.pageX - review.offsetLeft;
  const scrol = y - startY;
  review.scrollLeft = scrollRight - scrol;
});

// Add the event listeners
slider.addEventListener("mousedown", startDragging, false);
review.addEventListener("mousedown", startDrag, false);
slider.addEventListener("mouseup", stopDragging, false);
review.addEventListener("mouseup", stopDrag, false);
slider.addEventListener("mouseleave", stopDragging, false);
review.addEventListener("mouseleave", stopDrag, false);
