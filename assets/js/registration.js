document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("hero-register").addEventListener("click", function() {
      var registrationOptions = document.getElementById("registration-options");
      if (registrationOptions.style.display === "none") {
        registrationOptions.style.display = "block";
      } else {
        registrationOptions.style.display = "none";
      }
    });
  });
  