function git()
{
    window.location.href='https://github.com/Ragavipriya18';
}
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                behavior: 'smooth',
                top: section.offsetTop - document.querySelector('.navbar').offsetHeight
            });
        }
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar ul li a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                    const sectionId = link.getAttribute('href').substring(1); // Remove '#'
                scrollToSection(sectionId);
            });
        });
});
    
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const messageError = document.getElementById("message-error");

form.addEventListener("submit", function (event) {
  let valid = true;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required";
    valid = false;
  } else {
    messageError.textContent = "";
  }

  if (!valid) {
    event.preventDefault();
  }
});

function validateForm(){
  return validateEmail() && validatePhone();
}

function validateEmail(){
  var email=document.getElementById("email").value;
  var emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if(!emailPattern.test(email)){
    alert("Please enter a valid email address");
    return false;
  }
  return true;
}


function validatePhone(){
  var phone=document.getElementById("phone").value;
  var phonePattern=/^\d{10}$/;

  if(!phonePattern.test(phone)){
    alert("Please enter a valid 10-digit phone number");
    return false;
  }
  return true;
}



