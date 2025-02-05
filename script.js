"use strict";

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".button-dropdown")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
        console.log("click");
      }
    }
  }
};
