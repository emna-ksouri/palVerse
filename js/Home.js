var btn = document.getElementById("btn");
var media = document.getElementById("media");


function menu() {
  media.classList.toggle('active');
  btn.classList.toggle("fa-xmark");
}

var close = document.getElementById("close-btn");
var login = document.getElementById("login");
var sign = document.getElementById("sign");
var form = document.getElementById("form");
var blur = document.getElementById("blur");


function registreLog() {
  form.style.display = "flex";
  login.style.display = "flex"
  sign.style.display = "none"
  blur.style.display = "block"
}

function registreSign() {
  form.style.display = "flex";
  login.style.display = "none"
  sign.style.display = "flex"
  blur.style.display = "block"
}

function closeForm() {
  form.style.display = "none";
  blur.style.display = "none"
}





//sliiiide-showw


window.onload = function () {
  let slideIndex = 0;
  const slides = document.getElementsByClassName("slide");

  function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
  }

  showSlides(); // Start the slideshow when the window loads
}


//input-test

function validateForm() {
  // Get the form and input elements
  var signForm = document.getElementById("sign");
  var email = document.getElementById("email").value;
  var newPassword = document.getElementById("new-password").value;
  var verifyPassword = document.getElementById("verify-password").value;

  // Check if the email is in a valid format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email format");
    
  }

  // Check if the password is strong
  if (newPassword.length < 8) {
    alert("Weak password");
    
  }

  // Check if the new password and verify password match
  if (newPassword !== verifyPassword) {
    alert("Passwords do not match");
    
  }

  
  else{
  return true;//  the form is valid
  } 
}

  
// Function to scroll back to the top of the page
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Show or hide the back-to-top button based on scroll position
window.onscroll = function() {
  var backToTopButton = document.getElementById("back-to-top-btn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}
