document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "nest" && password === "nest") {
      window.location.href = "https://upgraded-journey-r9j4569xr9vhqw-5500.app.github.dev/test/info.html";
    } else {
      document.getElementById("errorMessage").textContent = "dogwater";
    }
  });
  