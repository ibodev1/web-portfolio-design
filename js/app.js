import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";

var comments = document.querySelectorAll("#comment");

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  rewind: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});

window.addEventListener("DOMContentLoaded", () => {
  comments.forEach((e) => {
    if (e.innerText.length > 200) {
      var newComment = "";
      newComment = e.innerText.slice(0, 200);
      e.innerText = newComment + "...";
      console.log(newComment);
    }
  });
});
