// HELP ME GOD
// realtime ajax username validation using api from the backend
export let usernameInput = document.querySelector(".create-username");
let createUsernameBtn = document.querySelector(".create-username-btn");
let usernameConstrain = document.querySelector(".container p");
let regex = /^[a-z][a-zA-Z0-9]{0,9}$/;
let feedback;
let usernameForm = document.querySelector(".create-username-form");

const feedbacks = [
  "username must start with a lowercase letter, max of 10 characters, and contain no spaces",
  "Your username:",
  "Username is available 💃🏽",
  "Username is already taken 😞",
];

// check if the username input field is available
if (usernameInput) {
  feedback = usernameInput.previousElementSibling;
}

// helper Functions to change the style of the create-username page
function usernameAvailable() {
  feedback.textContent = feedbacks[2];
  createUsernameBtn.disabled = false;
  usernameInput.classList.add("username-avail");
  feedback.style.color = "rgb(26, 237, 26)";
  createUsernameBtn.classList.add("create-username-avail-btn");
  createUsernameBtn.classList.remove("create-username-btn-not-avail");
  feedback.classList.remove("invalid-username");
  usernameInput.classList.remove("username-taken");
}

function usernameNotAvailable() {
  feedback.textContent = feedbacks[3];
  createUsernameBtn.disabled = true;
  feedback.style.color = "red";
  usernameInput.classList.remove("username-avail");
  usernameInput.classList.add("username-taken");
  usernameInput.classList.add("invalid-username");
  createUsernameBtn.classList.remove("create-username-avail-btn");
  createUsernameBtn.classList.add("create-username-btn-not-avail");
  feedback.classList.remove("invalid-username");
}

function defaultStyles() {
  feedback.textContent = feedbacks[1];
  createUsernameBtn.disabled = true;
  feedback.style.color = "black";
  createUsernameBtn.classList.remove("create-username-avail-btn");
  createUsernameBtn.classList.remove("create-username-btn-not-avail");
  usernameInput.classList.remove("username-taken");
  usernameInput.classList.remove("username-avail");
  feedback.classList.remove("invalid-username");
}

// // function to validate username in real-time using AJAX
export function ajaxvalidateUsername(event) {
  // Event listener for the username input field
  const username = event.target.value;
  // check if username is a valid username, using regex.
  if (username.length === 0) {
    defaultStyles();
  } else {
    if (!regex.test(username)) {
      usernameNotAvailable();
      feedback.textContent = feedbacks[0];
      usernameConstrain.style.display = "block";
      feedback.classList.add("invalid-username");
    } else {
      usernameConstrain.classList.remove("invalid-username");
      //  ajax request to check if username is available
      fetch(
        `http://127.0.0.1:8000/check_username/?username=${encodeURIComponent(
          username
        )}`,
        {
          mode: "cors",
        }
      )
        .then((response) => response.json())

        .then((data) => {
          if (data.available) {
            usernameAvailable();
          } else {
            usernameNotAvailable();
          }
        })
        .catch((error) => console.error("error", error));
    }
  }
}
