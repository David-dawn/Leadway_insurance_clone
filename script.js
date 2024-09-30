// Function to validate the login form inputs
function validateForm() {
    // Get values from username and password fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var valid = true; // Initially assume the form is valid

    // Check if the username field is empty
    if (username === "") {
        // Show error message if username is not provided
        document.getElementById("nameError").innerText = "Username is required.";
        valid = false;
    } else {
        // Clear the error message if username is provided
        document.getElementById("nameError").innerText = "";
    }

    // Check if the password field is empty
    if (password === "") {
        // Show error message if password is not provided
        document.getElementById("passwordError").innerText = "Password is required.";
        valid = false;
    } else {
        // Clear the error message if password is provided
        document.getElementById("passwordError").innerText = "";
    }

    // Return true if form is valid, otherwise false
    return valid;
}

// Function to toggle password visibility
function showPassword() {
    // Get the password input field and the "Show" span element
    var passwordInput = document.getElementById("password");
    var showSpan = document.getElementById("showSpan");

    // Toggle between password and text input types
    if (passwordInput.type === "password") {
        passwordInput.type = "text"; // Show the password
        showSpan.innerText = "Hide"; // Update text to "Hide"
    } else {
        passwordInput.type = "password"; // Hide the password
        showSpan.innerText = "Show"; // Update text to "Show"
    }
}
