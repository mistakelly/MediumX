// Import functions from public/account_creation.js
import { userFeed, emailSignupModal } from "./public/account_creation.js";

// Import functions from general_settings.js
import {
  closeModalOnBodyClick,
  authModal,
  customEmailSignupModal,
  closeModal,
} from "./general_settings.js";

// Import functions from ajax_requests.js
import {
  ajaxvalidateUsername,
  usernameInput,
} from "./create_username_ajax_request.js";

import {
  validateCustomEmailSignup,
  emailInput,
  handleEmailSubmit,
  emailSubmitForm,
} from "./ajax_email_registration.js";

// Initialize user feed
userFeed();

// Initialize the email signup modal functionality
emailSignupModal();

// Initialize the auth modal functionality
authModal();

// Initialize the custom email signup modal functionality
customEmailSignupModal();

// Close modal on body click
window.addEventListener("click", closeModalOnBodyClick);

// Set up the cancel icon functionality for closing the modal
closeModal();

// register an input event listener on the username input field to validate username in real-time using AJAX
if (usernameInput) {
  usernameInput.addEventListener("input", ajaxvalidateUsername);
}

// register an inpu event listener on the email input field to validate useremail in real-time

if (emailInput) {
  emailInput.addEventListener("input", validateCustomEmailSignup);
}

if (emailSubmitForm) {
  // Attach the handleEmailSubmit function to the form's submit event
  emailSubmitForm.addEventListener("submit", handleEmailSubmit);
}


