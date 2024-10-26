// navbar script
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
hamburger.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.add("hidden");
  }
});

// change image
// get all small images and their wrapper
const variantImages = document.querySelectorAll(".thumb");
const wrappers = document.querySelectorAll(".wrapper");
// get main image
const mainThumbnail = document.getElementById("mainThumbnail");

// Set first image as default(active)
mainThumbnail.src = variantImages[0].src;

// wrapper active with indigo-600 border
wrappers.forEach((wrapper) => {
  wrapper.addEventListener("click", () => {
    wrappers.forEach((wrp) => wrp.classList.remove("wrapper-active"));

    wrapper.classList.add("wrapper-active");
  });
});

// add eventListener for single image
variantImages.forEach((image) => {
  image.addEventListener("click", () => {
    // change main image src according to clicked small image
    mainThumbnail.src = image.src;

    // remove 'active' class from every images
    variantImages.forEach((img) => img.classList.remove("active"));
    // Add 'active' class for clicked image
    image.classList.add("active");
  });
});
