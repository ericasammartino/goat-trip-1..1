"use strict";

const showEvent = document.querySelector(".denver");
const overlay = document.querySelector(".overlay");
const info = document.querySelector(".info");
const closeEvent = document.querySelector(".close-event");

const openEvent = function () {
  info.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const close = function () {
  info.classList.add("hidden");
  overlay.classList.add("hidden");
};

showEvent.addEventListener("click", openEvent);
closeEvent.addEventListener("click", close);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!info.classList.contains("hidden")) {
      close();
    }
  }
});
