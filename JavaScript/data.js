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
