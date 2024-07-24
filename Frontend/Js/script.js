/************General settings.***/
import {
  closeModalOnBodyClick,
  customEmailSignupModal,
  closeModal,
  authModal,
} from "./shared/custom_settings.js";

import {
  HomeHeader,
  Posts,
  userProfileDropdown,
  MoreIcon,
} from "./shared/custom_html.js";

import { toggleProfileModal } from "./shared/user_modal.js";

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

// import { toggleProfileModal, userDropdown } from "./Authenticated/user_modal.js";

import { feedBtn } from "./Authenticated/home.js";
// console.log(feedBtn)

// import { googleBtn } from "./Authentication/SocialAuthentication/google-auth.js";
// console.log("google btn", googleBtn);

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

// custom html
// custom html classes intialization.
customElements.define("home-header", HomeHeader);
customElements.define("user-posts", Posts);
customElements.define("user-profiledropdown", userProfileDropdown);
customElements.define("custom-more-icon", MoreIcon);

// profile modal.
// user_modal.js
document.addEventListener("DOMContentLoaded", () => {
  const userDropdown = document.querySelector(".profile-icon");
  
  if (userDropdown) {
    userDropdown.addEventListener("click", toggleProfileModal);
  }
});
