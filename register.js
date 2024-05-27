// JavaScript for registration page

// Function to handle registration form submission
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // Fetch input values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var password = document.getElementById("password").value;
    // Perform registration logic (replace this with your registration logic)
    // For demonstration purposes, simply log the input values
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Password:", password);
    // Redirect to buyer.html after registration (replace this with actual redirect logic)
    window.location.href = "buyer.html";
});
