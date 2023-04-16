import flickity from 'flickity'

document.addEventListener("DOMContentLoaded", function () {
  let elem = document.querySelector(".main-carousel");

  console.log(elem);

  if (elem) {
    let flkty = new flickity(elem, {
      cellAlign: "left",
      contain: true,
    });
  }
});