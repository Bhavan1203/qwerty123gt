// JavaScript for login page

// Function to handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Fetch input values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Perform authentication (replace this with your authentication logic)
    if (authenticate(email, password)) {
        // Redirect to buyer dashboard if authentication is successful
        window.location.href = "buyer.html";
    } else {
        // Display error message or alert if authentication fails
        alert("Incorrect email or password. Please try again.");
    }
});

// Function to authenticate user (replace this with your authentication logic)
function authenticate(email, password) {
    // Dummy authentication logic (replace with actual authentication logic)
    // For demonstration purposes, assume email is "test@example.com" and password is "password"
    return email === "test@example.com" && password === "password";
}
