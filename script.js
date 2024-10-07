function checkPassword() {
    var password = document.getElementById("password-input").value;
    var errorMessage = document.getElementById("error-message");
    var hiddenSection = document.getElementById("hidden-wishes-section");
  
    if (password === "AjiMoBirthday") {
      // Show the hidden section if the password is correct
      hiddenSection.style.display = "block";
      errorMessage.style.display = "none";
    } else {
      // Display an error message if the password is incorrect
      errorMessage.style.display = "block";
    }
  }
  