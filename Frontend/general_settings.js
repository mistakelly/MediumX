// General Selectors
let body = document.body;
let cancelIcon = document.querySelectorAll(".fa-times");

// // Modal Selectors
let getStarted = document.querySelectorAll(".get-started");
let modal = document.querySelector(".auth-modal");

let modalTitle = document.querySelector(".auth-title");
let customEmailModalPage = document.querySelector(".custom-email-signup-page");
let customEmailModallBtn = document.querySelector(".custom-email-signup");

// Auth Button Span Selectors
let googleSpan = document.querySelector(".google-span");
let facebookSpan = document.querySelector(".facebook-span");
let emailSpan = document.querySelector(".email-span");

// Auth Footer Span Selector
let authMessage = document.querySelector(".auth-message");
let authLink = document.querySelector(".auth-link");

// Write Link Selector
let writeLink = document.querySelector(".write-link");

// Helper Functions

// Function to handle closing the modal when clicking outside of it
export function closeModalOnBodyClick(event) {
  if (event.target.classList.contains("modal-active")) {
    toggleModalVisibility();
  }
}

// Function responsible for changing the state of the auth modal
function toggleModalVisibility() {
  modal.classList.toggle("hide-modal");
  body.classList.toggle("modal-active");
  customEmailModalPage.classList.add("hide-modal");
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
