document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Dummy authentication (replace with actual authentication logic)
    if (username === "admin" && password === "admin") {
      // Redirect to another tab (replace with your logic)
      window.location.href = "https://upgraded-journey-r9j4569xr9vhqw-5500.app.github.dev/test/info.html";
    } else {
      // Show error message
      document.getElementById("errorMessage").textContent = "Invalid username or password.";
    }
  });
  