

body {
  background: rgb(237, 235, 228);
}

header {
  border-bottom: 2px solid rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 80px;
}

.navigation {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-items {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.nav-items * {
  list-style: none;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  font-size: 1.5rem;
}

.nav-items *:hover {
  cursor: pointer;
}

.nav-items button {
  background: black;
  color: white;
  padding: 1.1rem 2rem;
  border-radius: 30px;
  border: none;
}

.nav-items button:hover {
  cursor: pointer;
}

/* *************************************************** */

/* page container */
.container {
  /* background-color: blue; */
  /* height: 90vh; */
}

/* authentication Modal */

.auth-modal {
  background: white;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 637.2px;
  position: absolute;
  left: 26%;
  animation: zoom-in 0.2s ease-out forwards;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 11;
}

/* authentication modal title */
.auth-title {
  text-align: center;
  font-size: 3rem;
  font-family: gt-super, Georgia, Cambria, "Times New Roman", Times, serif;
}

.auth-title.signin-title {
  font-family: gt-super, Georgia, Cambria, "Times New Roman", Times, serif;
  font-size: 20px;
}

.auth-title.signin-write-title {
  margin: 4rem auto;
}

.auth-modal-desc {
  /* background-color: red; */
  margin: 8rem 0;
}

/* cancel modal icon x */
.close-modal-div {
  font-size: 2rem;
  font-weight: 100;
  width: 100%;
  margin-top: 2rem;
  position: relative;
  /* background: green; */
}

.close-modal-div i {
  position: absolute;
  right: 20px;
}

.close-modal-div:hover {
  cursor: pointer;
}

/* social authentication */
.social-auth-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

/* social buttons */
.signup-option {
  border: 1px solid black;
  width: 300px;
  padding: 1rem;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 5rem;
  text-decoration: none;
  margin-bottom: 1.5rem;
  background: none;
  cursor: pointer;
}

.signup-option span {
  color: black;
  font-size: 1.5rem;
}

.already-have-account {
  margin: 2rem auto;
  font-size: 1.5rem;
  text-align: center;
}

.already-have-account span:hover {
  cursor: pointer;
}

/* authentication modal footer */
.agreement {
  color: black;
  font-size: 1.3rem;
  color: gray;
  margin-top: 4rem;
}

.agreement a {
  color: gray;
}

.privacy {
  /* background: blue; */
  width: 250px;
  margin: 0 auto;
}

/* Homepage styles  */

.content {
  height: 640px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  /* background: yellow; */
}

.content-writeup {
  /* background-color: blue; */
  padding: 10rem 0 0 10rem;
}

.content-writeup h2 {
  font-size: 100px;
  font-family: gt-super, Georgia, Cambria, "Times New Roman", Times, serif;
  letter-spacing: -0.055em;
  margin-bottom: 4rem;
}

.content-writeup p {
  font-size: 1.9rem;
  margin-bottom: 3rem;
  border: none;
  margin-bottom: 4rem;
}

.content-writeup button {
  font-size: 1.5rem;
  background: black;
  color: white;
  padding: 1.3rem 5rem;
  border-radius: 30px;
}

.content-writeup button:hover {
  cursor: pointer;
}

/* Home page image */

.home-page-img {
  height: 100%;
}

/* custom email sign up page */
.email-signup-container {
  /* background-color: blue; */
  margin-top: 10rem;
  width: 60%;
  text-align: center;
}

.email-signup h1 {
  font-size: 3rem;
  letter-spacing: -0.03em;
  line-height: 32px;
  font-family: gt-super, Georgia, Cambria, "Times New Roman", Times, serif;
  font-weight: 400;
  margin-bottom: 2rem;
}

.email-signup h4 {
  font-size: 2rem;
  letter-spacing: -0.03em;
  line-height: 32px;
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
  margin-bottom: 4rem;
}

.signup-email-form * {
  display: block;
}

/* signup email label */
.signup-email-form label {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  text-align: center;
}

.signup-email-form input {
  padding: 1rem;
  margin-bottom: 4rem;
  background-color: rgb(237, 235, 228);
  border: none;
}

.email-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.custom-email-btn {
  font-size: 1.3rem;
  background: black;
  border: none;
  padding: 1.2rem;
  width: 65%;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.signup-email-form input:focus {
  outline: none;
}

.email-container a {
  font-size: 1.5rem;
  text-decoration: none;
  color: green;
  margin-top: 2rem;
  display: flex;
}

.signup-email-form a {
  margin-top: 2rem;
}

/* if user inputs @gmail in signup page responsible for toggling the google button */
.display-email {
  display: none;
}

.show-email {
  display: block;
  animation: zoom-in 0.2s ease-out forwards;
}

.display-email-form button {
  border: 1px solid black;
  width: 300px;
  padding: 1rem;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 5rem;
  text-decoration: none;
  margin-bottom: 1.5rem;
  background: none;
  margin: 2rem auto;
  cursor: pointer;
}

.custom-email-input {
  width: 300px;
  text-align: center;
}

.errorlist li {
  color: black;
}

/* This classes are for feedbacks.*/
/* flash messages */
.messages {
  list-style: none;
  padding: 0;
}

.messages li {
  padding: 10px;
  border-radius: 5px;
  font-size: 1.5rem;
}

.messages .success {
  background-color: #d4edda;
  color: #155724;
}

.messages .info {
  background-color: #cce5ff;
  color: #004085;
}

.messages .error {
  background-color: #f8d7da;
  color: #721c24;
}

.messages .warning {
  background-color: #fff3cd;
  color: #856404;
}

/* js styles */
body::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  display: none;
  z-index: 10;
}

body.modal-active::before {
  display: block;
}

/* .modal-desc {
  width: 54%;
  margin-bottom: 5rem;
  display: none;
} */

.hide-modal {
  display: none;
}

/* .modal-intro p {
      font-weight: 300;
      letter-spacing: 0.4px;
      font-size: 1.4rem;
      text-align: center;
      font-family: inherit;
      line-height: 2rem;
    } */

/* javascript styles */
.invalid-email {
  cursor: not-allowed;
  background-color: none;
  /* background-color: rgb(224, 150, 150); */
  color: gray;
}

.register-email.valid-email-input {
  border: 5px solid green;
}

/* Animation for modal*/
@keyframes zoom-in {
  from {
    transform: scale(0.9);
  }

  to {
    transform: scale(1);
  }
}




 --primary: #007bff;
  --secondary: #6c757d;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
  --transparent: transparent;
  --body-bg: #f8f9fa;
  --body-color: #333;
  --link-color: #007bff;
  --link-hover-color: #0056b3;
  --link-hover-decoration: underline;
  --btn-padding-y: 0.5rem;
  --btn-padding-x: 1rem;
  --btn-font-size: 1rem;
  --btn-line-height: 1.25;
  --btn-font-weight: 400;
  --btn-color: #212529;
  --btn-bg: #f8f9fa;
  --btn-border-width: 1px;
  --btn-border-radius: 0.25rem;
  --btn-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
