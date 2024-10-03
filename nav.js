"use strict";
const toggleBtn = document.getElementById("toggle-btn");
const sidenav = document.getElementById("mySidenav");
const navIconsContainer = document.getElementById("nav-icons-container");
const closeBtn = document.querySelector(".closebtn");

document.addEventListener("DOMContentLoaded", function () {
  toggleBtn.addEventListener("click", function () {
    if (sidenav.classList.contains("expanded")) {
      sidenav.style.width = "0";
      sidenav.classList.remove("expanded");
      navIconsContainer.style.display = "none";
    } else {
      sidenav.style.width = "250px";
      sidenav.classList.add("expanded");
      navIconsContainer.style.display = "block";
    }
  });

  closeBtn.addEventListener("click", function () {
    sidenav.style.width = "0";
    sidenav.classList.remove("expanded");
    navIconsContainer.style.display = "none";
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 1023) {
      sidenav.style.width = getSidenavWidth();
      sidenav.classList.add("expanded");
      navIconsContainer.style.display = "block";
      toggleBtn.style.display = "none";
      closeBtn.style.display = "none";
    } else {
      sidenav.style.width = "0";
      sidenav.classList.remove("expanded");
      navIconsContainer.style.display = "none";
      toggleBtn.style.display = "block";
      closeBtn.style.display = 'block'
    }
  });

  // Initial call to handle the current window size
  window.dispatchEvent(new Event('resize'));
});

function getSidenavWidth() {
  if (window.innerWidth >= 2300) {
    return "400px";
  } else if (window.innerWidth >= 1800) {
    return "300px";
  } else {
    return "250px";
  }
}