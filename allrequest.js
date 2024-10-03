'use strict'
// toggle differbt tabs in All Request Html File
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");
    const createButton = document.querySelector(".create-button");
    const headerSearchContainer = document.querySelector(".header-search-container");
    const filtersSearchContainer = document.querySelector(".filters-search-container");

    tabs.forEach((tab) => {
      tab.addEventListener("click", function (event) {
        event.preventDefault();
        const targetTab = this.getAttribute("data-tab");

        // Remove active class from all tabs and content
        tabs.forEach((t) => t.classList.remove("active"));
        tabContents.forEach((tc) => tc.classList.remove("active"));

        // Add active class to the clicked tab and corresponding content
        this.classList.add("active");
        document.getElementById(targetTab).classList.add("active");

        // Show or hide the create button and search bar
        if (targetTab === "all-requests") {
          createButton.style.display = "block";
          headerSearchContainer.style.display = "none";
          filtersSearchContainer.style.display = "flex";
        } else {
          createButton.style.display = "none";
          headerSearchContainer.style.display = "flex";
          filtersSearchContainer.style.display = "none";
        }
      });
    });
  });

const RequestList = document.getElementById('request');
const RequestImg = document.getElementById('requestImg')

RequestList.style.color = '#FF7A00';
RequestImg.style.filter= 'invert(74%) sepia(69%) saturate(6480%) hue-rotate(3deg) brightness(107%) contrast(102%)';
