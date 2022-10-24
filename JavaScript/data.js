const newDesign = document.querySelector("#lembar"),
  slider = document.querySelector("#slider");
let isDown = false;
let scrollLeft;
let startX;

// Drag to slide Project
newDesign.addEventListener("mousedown", (e) => {
  isDown = true;
  newDesign.classList.add("active");
  startX = e.pageX - newDesign.offsetLeft;
  scrollLeft = newDesign.scrollLeft;
});
newDesign.addEventListener("mouseleave", () => {
  isDown = false;
  newDesign.classList.remove("active");
});
newDesign.addEventListener("mouseup", () => {
  isDown = false;
  newDesign.classList.remove("active");
});
newDesign.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - newDesign.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  newDesign.scrollLeft = scrollLeft - walk;
});
// // Drag to slide Review
slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
