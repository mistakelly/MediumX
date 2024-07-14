import {
  closeModalOnBodyClick,
  authModal,
  customEmailSignupModal,
  closeModal,
} from "./general_settings.js";

import {
  ajaxvalidateUsername,
  usernameInput,
} from "./create_username_ajax_request.js";

if (usernameInput) {
  usernameInput.addEventListener("input", ajaxvalidateUsername);
}

// Import functions from ajax_requests.js
import {
  validateCustomEmailSignup,
  emailInput,
  handleEmailSubmit,
  emailSubmitForm,
} from "./ajax_email_registration.js";

// Import functions from public/account_creation.js
import { userFeed, emailSignupModal } from "./account_creation.js";

userFeed();

// Initialize the email signup modal functionality
emailSignupModal();
authModal();

// Initialize the custom email signup modal functionality
customEmailSignupModal();

// Close modal on body click
window.addEventListener("click", closeModalOnBodyClick);

// Set up the cancel icon functionality for closing the modal
closeModal();

// Initialize the custom email signup modal functionality
customEmailSignupModal();

// Close modal on body click
window.addEventListener("click", closeModalOnBodyClick);

// Set up the cancel icon functionality for closing the modal
closeModal();

// register an inpu event listener on the email input field to validate useremail in real-time

if (emailInput) {
  emailInput.addEventListener("input", validateCustomEmailSignup);
}

if (emailSubmitForm) {
  // Attach the handleEmailSubmit function to the form's submit event
  emailSubmitForm.addEventListener("submit", handleEmailSubmit);
}


