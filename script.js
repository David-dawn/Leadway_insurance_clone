'use strict'

function validateForm() {
    const fname = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const nameError = document.getElementById("name-error");
    const passwordError = document.getElementById(
        "password-error"
    );
    nameError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    if (fname === ""  || /\d/.test(fname) || fname.length <= 3) {
        nameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }

    // const pattern = /[A-Za-z\d@.#$!%*?&]{8,20}$/;
    if (password === "" || password.length <= 4 || /\d/.test(password)) {
        passwordError.textContent =
            "Please enter a password with at least 4 characters";
        isValid = false;
    }

    return isValid;
}
function showPassword(){
    const password = document.getElementById("password")
    const showSpan = document.getElementById("showSpan")
    if (password.type === 'password') {
        password.type = 'text';  // Change the input type to text to show the password
        showSpan.textContent = 'Hide';  // Update the text content of the showSpan to 'HIDE'
    } else {
        password.type = 'password';  // Change the input type back to password to hide the password
        showSpan.textContent = 'Show';  // Update the text content of the showSpan to 'SHOW'
    }
}
