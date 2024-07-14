// HELP ME GOD.
export let emailInput = document.querySelector(".custom-email-input");
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export let emailSubmitForm = document.querySelector(".custom-email-form");

let emailFeedback = document.querySelector(".custom-email-label");

let submitEmailButton = document.querySelector(".email-container button");

// validate user email
export function validateCustomEmailSignup(event) {
  let userEmail = event.target.value;
  if (userEmail.length === 0) {
    emailFeedback.textContent = "Your Email";
    emailFeedback.style.color = "black";
    submitEmailButton.classList.add("invalid-email");
  } else {
    if (!emailPattern.test(userEmail)) {
      emailFeedback.textContent = "Please enter a valid email address";
      emailFeedback.style.fontSize = "12px";
      emailFeedback.style.color = "red";
      submitEmailButton.classList.add("invalid-email");
    } else {
      emailFeedback.textContent = "Valid email address";
      emailFeedback.style.fontSize = "12px";
      emailFeedback.style.color = "green";
      submitEmailButton.classList.remove("invalid-email");
    }
  }
}

/**
 * Handles the form submission for the email authentication process.
 * This function prevents the default form submission, prepares the AJAX request,
 * and processes the server response.
 *
 * @param {Event} e - The submit event object from the form submission.
 * @listens submit - Listens for the 'submit' event on the `emailSubmitForm` element.
 */
export function handleEmailSubmit(e) {
  e.preventDefault(); // Prevent the default form submission

  let emailAuthEndpoint = "/authenticate/"; // Endpoint for the email authentication
  let formData = new FormData(this); // Collect form data from the form

  // Create a new Request object
  const request = new Request(emailAuthEndpoint, {
    method: "POST",
    headers: {
      "X-Requested-With": "XMLHttpRequest", // Indicate that this is an AJAX request
      "Content-Type": "application/x-www-form-urlencoded", // Content type for form data
    },
    body: new URLSearchParams(formData), // Convert FormData to URLSearchParams
  });

  // SEND A POST REQUEST.
  fetch(request)
    .then((response) => response.json()) // Parse the JSON response
    .then((data) => {
      if (data.success) {
        alert(data.success);
        console.log(data); // Handle the JSON response
        // create and display spinner until email submits successfully
      } else {
        throw new Error("An Error Occured");
      }
    })
    .catch((error) => {
      console.error("Error:", error); // Handle fetch errors
    });
}
