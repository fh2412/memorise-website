const emailInput = document.getElementById("emailInput");
const errorMessage = document.querySelector(".help.is-danger");

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

emailInput.addEventListener("keyup", function() {
  const email = emailInput.value;
  const isEmpty = email === "";

  if (!isEmpty) {
    const isValid = validateEmail(email);
    if (!isValid) {
      // Add red border class to the input field
      emailInput.classList.add("is-danger");
      errorMessage.style.display = "block";
    } else {
      // Remove red border class from the input field
      emailInput.classList.remove("is-danger");
      errorMessage.style.display = "none";
    }
  } else {
    // Hide the error message and remove red border if empty
    errorMessage.style.display = "none";
    emailInput.classList.remove("is-danger");
  }
});


const submitButton = document.querySelector("button[type='submit']"); // Select the submit button
const cancelButton = document.querySelector("button.button.is-link.is-light");  // Target by class names

submitButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default form submission behavior

  const emailInput = document.getElementById("emailInput");
  const email = emailInput.value;

  const nameInput = document.querySelector("input[type='text']"); // Assuming name input
  const name = nameInput.value;

  const subjectSelect = document.querySelector("select");
  const selectedSubject = subjectSelect.options[subjectSelect.selectedIndex].text;

  const formattedSubject = `${name} - ${selectedSubject}`;  // Format subject
  const messageTextarea = document.querySelector("textarea");
  const message = messageTextarea.value;

  console.log("Email:", email);
  console.log("Subject:", formattedSubject);
  console.log("Message:", message);

  // Redirect to index.html after printing (for submit button)
  window.location.href = "../index.html";
});

cancelButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default form submission behavior (not applicable here)
  // No additional actions, just redirect
  window.location.href = "../index.html";
});



