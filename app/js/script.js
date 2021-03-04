const btnHamburger = document.querySelector("#hamburger");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector("#menu");
const fadeElemns = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");
const header = document.querySelector(".header");
btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    //close
    header.classList.remove("open");
    body.classList.remove("noscroll");
    fadeElemns.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    //open
    header.classList.add("open");
    body.classList.add("noscroll");
    fadeElemns.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
