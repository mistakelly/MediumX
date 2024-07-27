// import all selectors from common.js
import {
  body,
  cancelIcon,
  getStarted,
  modal,
  modalTitle,
  customEmailModalPage,
  customEmailModallBtn,
  googleSpan,
  facebookSpan,
  emailSpan,
  authMessage,
  authLink,
  writeLink,
} from "../common.js";

export function closeModalOnBodyClick(event) {
  if (event.target.classList.contains("modal-active")) {
    closeAuthModal();
  }
}

// Function responsible for changing the state of the auth modal
function toggleModalVisibility() {
  modal.classList.remove("hide-modal");
  body.classList.add("modal-active");
}

// Function Responsible for closing Modals
function closeAuthModal() {
  modal.classList.add("hide-modal");
  body.classList.remove("modal-active");
  customEmailModalPage.classList.add("hide-modal");
}

// Function for custom email signup modal
export function customEmailSignupModal() {
  if (customEmailModallBtn) {
    customEmailModallBtn.addEventListener("click", () => {
      toggleModalVisibility();
      // body.classList.add('modal-active')
      customEmailModalPage.classList.toggle("hide-modal");
      console.log("just clicked");
    });
  }
}

// Close modal when user clicks on the cancel icon
export function closeModal() {
  if (cancelIcon) {
    cancelIcon.forEach((icon) => {
      icon.addEventListener("click", () => {
        closeAuthModal();
      });
    });
  }
}

// // Open authentication modal when user clicks on get started button
export function authModal() {
  if (getStarted) {
    getStarted.forEach((button) => {
      button.addEventListener("click", () => {
        toggleModalVisibility();
      });
    });
  }
}


// call all functions
