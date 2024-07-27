// Selectors
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

// export all selectors
export {
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
};
