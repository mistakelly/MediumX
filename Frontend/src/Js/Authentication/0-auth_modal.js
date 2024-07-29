let body = document.body
let authModal = document.querySelector(".auth-modal");
let getStarted = document.querySelector(".nav__item--get-started");
let signIn = document.querySelector(".nav__item--sign-in")
let authContainer = document.querySelector(".auth-container")
let hasAccountSpan = document.querySelector(".has-account__has-account")
let writeBtn = document.querySelector('.main__left-sidebar--write-btn')

const openAuthModal = function () {
    authModal.classList.remove("auth-modal--hide");
    body.classList.add("modal-active");
}

const closeAuthModal = function () {
    authModal.classList.add("auth-modal--hide");
    body.classList.remove("modal-active");
}


// close Modal on body click
const closeAuthModalOnBodyClick = function (event) {
    if (event.target.classList.contains("modal-active")) {
        closeAuthModal()
    }
}

const authModalHTML = function () {
    let html = `
    <div class="auth-modal__cancel">
          <svg width="29" height="29" class="auth-modal__cancel--svg">
            <path
              class="auth-modal__cancel--svg"
              fill-rule="evenodd"
              d="m20.13 8.11-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61"
            ></path>
          </svg>
        </div>

        <div class="auth-modal__desc">
          <!-- cancel modal icon -->
          <div class="auth-modal__heading">
            <h1>Join MediumX.</h1>
          </div>
        </div>

        <!-- social auth -->
        <div class="social-auth">
          <!-- google auth -->
          <div class="social-auth__item google-auth">
            <button class="google-auth__btn">
              <!-- prettier-ignore -->
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="bl">
                  <g fill-rule="evenodd" clip-rule="evenodd">
                      <path
                          d="M20.64 12.2c0-.63-.06-1.25-.16-1.84H12v3.49h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.61z"
                          fill="#4285F4"></path>
                      <path
                          d="M12 21a8.6 8.6 0 0 0 5.96-2.18l-2.91-2.26a5.41 5.41 0 0 1-8.09-2.85h-3v2.33A9 9 0 0 0 12 21z"
                          fill="#34A853"></path>
                      <path d="M6.96 13.71a5.41 5.41 0 0 1 0-3.42V7.96h-3a9 9 0 0 0 0 8.08l3-2.33z"
                          fill="#FBBC05"></path>
                      <path
                          d="M12 6.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A9 9 0 0 0 3.96 7.96l3 2.33A5.36 5.36 0 0 1 12 6.6z"
                          fill="#EA4335"></path>
                  </g>
                </svg>
              <span class="google-auth__span">Sign up with Google</span>
            </button>
          </div>
          <!-- facebook auth -->
          <div class="social-auth__item facebook-auth">
            <button class="facebook-auth__btn">
              <!-- prettier-ignore -->
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="al"
                >
                  <path
                    d="M22 12a10 10 0 1 0-11.56 9.88V14.9H7.9V12h2.54V9.8c0-2.5 1.5-3.9 3.77-3.9 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.78-1.63 1.57V12h2.78l-.45 2.9h-2.33v6.98A10 10 0 0 0 22 12z"
                    fill="#1877F2"
                  ></path>
                  <path
                    d="M15.9 14.9l.44-2.9h-2.78v-1.87c0-.8.39-1.57 1.63-1.57h1.26V6.1s-1.14-.2-2.24-.2c-2.28 0-3.77 1.4-3.77 3.9V12H7.9v2.9h2.54v6.98a10.07 10.07 0 0 0 3.12 0V14.9h2.33z"
                    fill="#fff"
                  ></path>
                </svg>
              <span class="facebook-auth__span">Sign up with Google</span>
            </button>
          </div>
          <!-- email auth -->
          <div class="social-auth__item email-auth">
            <button class="email-auth__item email-auth__btn">
              <!-- prettier-ignore -->
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="al email-auth__item"
                >
                  <g stroke="#242424">
                    <rect x="3.5" y="5.5" width="17" height="13" rx="1"></rect>
                    <path d="M3.5 8l8.5 6 8.5-6" stroke-linecap="round"></path>
                  </g>
                </svg>
              <span class="email-auth__span email-auth__item"
                >Sign up with email</span
              >
            </button>
          </div>
          <!-- has account -->
          <div class="social-auth__item social-auth__has-account">
            <p>
            Already have an account?
              <span class="social-auth__has-account--span">Sign in</span>
            </p>
          </div>
        </div>
        <!-- agreemnent -->
        <div class="auth-modal__footer">
          <div class="social-auth__item social-auth__agreement">
            <p>
              Click “Sign up” to agree to Medium’s
              <a href="#">Terms of Service</a> and acknowledge that
            </p>
            <p class="privacy">
              Medium’s <a href="#"> Privacy Policy</a> applies to you.
            </p>
          </div>
        </div>`
    /*Insert Element */
    authModal.innerHTML = html
    /**open Modal*/
    openAuthModal()
}

const authEmailModalHTML = function () {
    let html = `
    <div class="auth-modal__cancel">
    <svg width="29" height="29" class="auth-modal__cancel--svg">
    <path class="auth-modal__cancel--svg"
        fill-rule="evenodd"
        d="m20.13 8.11-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61"
      ></path>
    </svg>
  </div>
    <div class="email-auth-modal">
    <div class="email-auth__desc">
      <h1>sign up with email</h1>
      <p>Enter your email address to create an</p>
      <p>account</p>
    </div>

    <div class="email-auth__form">
      <label for="email">Your email</label>
      <input type="email" name="email" id="email" autocomplete="off" />
      <button type="submit">Continue</button>
    </div>
    <div class="email-auth__google-btn social-auth__item">
      <button type="submit">
        <!-- prettier-ignore -->
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="bl">
          <g fill-rule="evenodd" clip-rule="evenodd">
              <path
                  d="M20.64 12.2c0-.63-.06-1.25-.16-1.84H12v3.49h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.61z"
                  fill="#4285F4"></path>
              <path
                  d="M12 21a8.6 8.6 0 0 0 5.96-2.18l-2.91-2.26a5.41 5.41 0 0 1-8.09-2.85h-3v2.33A9 9 0 0 0 12 21z"
                  fill="#34A853"></path>
              <path d="M6.96 13.71a5.41 5.41 0 0 1 0-3.42V7.96h-3a9 9 0 0 0 0 8.08l3-2.33z"
                  fill="#FBBC05"></path>
              <path
                  d="M12 6.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A9 9 0 0 0 3.96 7.96l3 2.33A5.36 5.36 0 0 1 12 6.6z"
                  fill="#EA4335"></path>
                  </g>
                  </svg>
                  <span>Sign up with Google</span>
                  </button>
                  </div>
                  <div class="email-auth__signup-options">
                  <a href="#">&lt; All sign up options</a>
                  </div>
                  
                  <div>
                  <p>This site is protected by reCAPTCHA Enterprise and the</p>
                  <p>
                  <a href="#">Google Privacy Policy</a> and
                  <a href="#">Terms of Service apply</a>.
                  </p>
                  </div>
                  </div>`

    /**Insert InnerHTML To authModal*/
    authModal.innerHTML = html

}

const authSigninModalHTML = function () {
    let html = `
    <div class="auth-modal__cancel">
          <svg width="29" height="29" class="auth-modal__cancel--svg">
            <path
              class="auth-modal__cancel--svg"
              fill-rule="evenodd"
              d="m20.13 8.11-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61"
            ></path>
          </svg>
        </div>

        <div class="auth-modal__desc">
          <!-- cancel modal icon -->
          <div class="auth-modal__heading">
            <h1>Welcome back.</h1>
          </div>
        </div>

        <!-- social auth -->
        <div class="social-auth">
          <!-- google auth -->
          <div class="social-auth__item google-auth">
            <button class="google-auth__btn">
              <!-- prettier-ignore -->
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="bl">
                  <g fill-rule="evenodd" clip-rule="evenodd">
                      <path
                          d="M20.64 12.2c0-.63-.06-1.25-.16-1.84H12v3.49h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.61z"
                          fill="#4285F4"></path>
                      <path
                          d="M12 21a8.6 8.6 0 0 0 5.96-2.18l-2.91-2.26a5.41 5.41 0 0 1-8.09-2.85h-3v2.33A9 9 0 0 0 12 21z"
                          fill="#34A853"></path>
                      <path d="M6.96 13.71a5.41 5.41 0 0 1 0-3.42V7.96h-3a9 9 0 0 0 0 8.08l3-2.33z"
                          fill="#FBBC05"></path>
                      <path
                          d="M12 6.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A9 9 0 0 0 3.96 7.96l3 2.33A5.36 5.36 0 0 1 12 6.6z"
                          fill="#EA4335"></path>
                  </g>
                </svg>
              <span class="google-auth__span">Sign in with Google</span>
            </button>
          </div>
          <!-- facebook auth -->
          <div class="social-auth__item facebook-auth">
            <button class="facebook-auth__btn">
              <!-- prettier-ignore -->
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="al"
                >
                  <path
                    d="M22 12a10 10 0 1 0-11.56 9.88V14.9H7.9V12h2.54V9.8c0-2.5 1.5-3.9 3.77-3.9 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.78-1.63 1.57V12h2.78l-.45 2.9h-2.33v6.98A10 10 0 0 0 22 12z"
                    fill="#1877F2"
                  ></path>
                  <path
                    d="M15.9 14.9l.44-2.9h-2.78v-1.87c0-.8.39-1.57 1.63-1.57h1.26V6.1s-1.14-.2-2.24-.2c-2.28 0-3.77 1.4-3.77 3.9V12H7.9v2.9h2.54v6.98a10.07 10.07 0 0 0 3.12 0V14.9h2.33z"
                    fill="#fff"
                  ></path>
                </svg>
              <span class="facebook-auth__span">Sign in with facebook</span>
            </button>
          </div>
          <!-- email auth -->
          <div class="social-auth__item email-auth">
            <button class="email-auth__item email-auth__btn">
              <!-- prettier-ignore -->
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="al email-auth__item"
                >
                  <g stroke="#242424">
                    <rect x="3.5" y="5.5" width="17" height="13" rx="1"></rect>
                    <path d="M3.5 8l8.5 6 8.5-6" stroke-linecap="round"></path>
                  </g>
                </svg>
              <span class="email-auth__span email-auth__item"
                >Sign in with email</span
              >
            </button>
          </div>
          <!-- has account -->
          <div class="social-auth__item social-auth__has-account">
            <p>
              No account?
              <span class="social-auth__has-account--span">Create one</span>
            </p>
          </div>
        </div>
        <!-- agreemnent -->
        <div class="auth-modal__footer">
          <div class="trouble-shoot">
            <p>
              Forgot email or trouble signing in? <a href="#"> Get help. </a>
            </p>
          </div>
          <div class="social-auth__item social-auth__agreement">
            <p>
              Click “Sign in” to agree to MediumX
              <a href="#">Terms of Service</a> and acknowledge that
            </p>
            <p class="privacy">
              Medium’s <a href="#"> Privacy Policy</a> applies to you.
            </p>
          </div>
        </div>
    `

    /*Insert Element */
    authModal.innerHTML = html
    /**open Modal*/
    openAuthModal()
}


/**
 * Event Delegation Function.
 * Responsible for updating the content of the Modal
 * Based of, of user clicks.
 */
const authModalManager = function (event) {
    const target = event.target;

    if (target.classList.contains('auth-modal__cancel--svg')) {
        closeAuthModal();
    } else if (target.classList.contains('email-auth__item')) {
        authEmailModalHTML()
    } else if (target.tagName === 'A') {
        authModalHTML()
    } else if (target.textContent == 'Create one') {
        authModalHTML()
    } else if (target.textContent == 'Sign in') {
        authSigninModalHTML()
        console.log(target.textContent)
    }

    else if (target.type === 'email') {
        /**
         * Attaches an 'input' event listener to email input fields to monitor their values.
         * If the input contains '@gm', display the Google social login button.
         */

        target.addEventListener('input', () => {
            const emailAuthModal = document.querySelector('.email-auth-modal');
            if (target.value.includes('@gm')) {
                emailAuthModal.children[2].style.display = 'flex';
            } else {
                emailAuthModal.children[2].style.display = 'none';
            }
        });
    }
};

/** event listners */
getStarted.addEventListener("click", authModalHTML)
window.addEventListener("click", closeAuthModalOnBodyClick)
authContainer.addEventListener('click', authModalManager)
signIn.addEventListener("click", authSigninModalHTML)
writeBtn.addEventListener('click', authSigninModalHTML)
