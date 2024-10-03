'use strict'
// MODAL DECLERATION
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const modal2 = document.querySelector(".modal2");
const btnCloseModal2= document.querySelector(".close-modal2");
const btnsOpenModal2 = document.querySelectorAll(".SuccessModal");
const Form = document.querySelector('#inspectForm');
const phoneInput = document.getElementById('clientPhone');
const form = document.querySelector('#inspectForm');
const phoneError = document.getElementById('phoneError');

// MODAL FUNCTIONS
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};
const openModal2 = function () {
    modal2.classList.remove("hidden");
    overlay.classList.remove("hidden");
    modal.classList.add("hidden");
};
const closeModal2 = function () {
    modal2.classList.add("hidden");
    overlay.classList.add("hidden");
};

Form.addEventListener('submit', function(event){
    event.preventDefault()
})
  
for (let i = 0; i < btnsOpenModal.length; i++){

    btnsOpenModal[i].addEventListener("click", openModal);

    btnCloseModal.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
    })
}
  

for (let i = 0; i < btnsOpenModal2.length; i++){
    btnsOpenModal2[i].addEventListener("click", openModal2);

    btnCloseModal2.addEventListener("click", closeModal2);
    overlay.addEventListener("click", closeModal2);

    // modal.style.visibility = 'hidden'
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !modal2.classList.contains("hidden")) {
            closeModal2();
        }
    });
}

form.addEventListener('submit', function (event) {
    const phoneNumber = phoneInput.value;
    const phoneRegex = /^[789]\d{9}$/; // Nigerian phone numbers start with 7, 8, or 9 and have 10 digits
    
    if (!phoneRegex.test(phoneNumber)) {
        event.preventDefault();
        phoneError.style.display = 'block'; // Show the error message
    } else {
        phoneError.style.display = 'none'; // Hide the error message
        openModal(); // Proceed with form submission
    }
});

phoneInput.addEventListener('input', function () {
    if (phoneError.style.display === 'block') {
        phoneError.style.display = 'none';
    }
});

const RequestList = document.getElementById('request');
const RequestImg = document.getElementById('requestImg')

RequestList.style.color = '#FF7A00';
RequestImg.style.filter= 'invert(74%) sepia(69%) saturate(6480%) hue-rotate(3deg) brightness(107%) contrast(102%)';