/************Authentication/Custom_settings.***/
import {
  closeModalOnBodyClick,
  customEmailSignupModal,
  closeModal,
  authModal,
} from "./Authentication/custom_settings.js";


/********Authenticaation/select_interest***********/

import { userInterest } from "./Authentication/select_interest.js";

import {
  validateCustomEmailSignup,
  emailInput,
  handleEmailSubmit,
  emailSubmitForm,
} from "./Authentication/email_authentication.js";

import {
  ajaxvalidateUsername,
  usernameInput,
} from "./Authentication/create_username.js";

/*********************************** */

window.addEventListener("click", closeModalOnBodyClick);
customEmailSignupModal();
closeModal();
authModal();
/*********************************** */

userInterest();
/*********************************** */
if (emailInput) {
  emailInput.addEventListener("input", validateCustomEmailSignup);
}

if (emailSubmitForm) {
  // Attach the handleEmailSubmit function to the form's submit event
  emailSubmitForm.addEventListener("submit", handleEmailSubmit);
}
/*********************************** */

if (usernameInput) {
  usernameInput.addEventListener("input", ajaxvalidateUsername);
}
