export class userProfileDropdown extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` <div class="dropdown hidemodal">
          <!-- user assests -->
          <div class="dropdown-profile-link">
            <a href="#">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-label="Profile"
                >
                  <circle
                    cx="12"
                    cy="7"
                    r="4.5"
                    stroke="currentColor"
                  ></circle>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    d="M3.5 21.5v-4.342C3.5 15.414 7.306 14 12 14s8.5 1.414 8.5 3.158V21.5"
                  ></path>
                </svg>
              </div>
              <div>Profile</div>
            </a>
            <a href="#">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-label="Lists"
                >
                  <path
                    stroke="currentColor"
                    d="M6.44 6.69a1.5 1.5 0 0 1 1.06-.44h9a1.5 1.5 0 0 1 1.06.44l.354-.354-.353.353A1.5 1.5 0 0 1 18 7.75v14l-5.694-4.396-.306-.236-.306.236L6 21.75v-14c0-.398.158-.78.44-1.06Z"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    d="M12.5 2.75h-8a2 2 0 0 0-2 2v11.5"
                  ></path>
                </svg>
              </div>
              <div>Library</div>
            </a>
            <a href="#">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-label="Stories"
                >
                  <path
                    stroke="currentColor"
                    d="M4.75 21.5h14.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .138.112.25.25.25Z"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    d="M8 8.5h8M8 15.5h5M8 12h8"
                  ></path>
                </svg>
              </div>
              <div>Stories</div>
            </a>
            <a href="#">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-label="Stats"
                >
                  <path
                    stroke="currentColor"
                    d="M2.75 19h4.5a.25.25 0 0 0 .25-.25v-6.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25ZM9.75 19h4.5a.25.25 0 0 0 .25-.25V8.25a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25ZM16.75 19h4.5a.25.25 0 0 0 .25-.25V4.25a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25Z"
                  ></path>
                </svg>
                
              </div>
              <div>Stats</div>
            </a>
          </div>
          <!-- configurations -->
  
          <div class="dropdown-settings-link">
            <div>
              <p><a href="#">settings</a></p>
            </div>
            <div>
              <p><a href="#">Refined recommendation</a></p>
            </div>
            <div>
              <p><a href="#">Manage Publications</a></p>
            </div>
            <div>
              <p><a href="#">Help</a></p>
            </div>
          </div>
          <!-- Vip -->
          <div class="dropdown-membership-link">
            <div>
              <a href="#"
                ><p>Become a MediumX Member</p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    fill="none"
                    viewBox="0 0 64 64"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                    class="py dt"
                  >
                    <path
                      fill="#FFC017"
                      d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
                    ></path>
                  </svg></div
              ></a>
            </div>
            <div>
              <p><a href="#">Create a Mastodon account</a></p>
            </div>
            <div>
              <p><a href="#">Apply for author verification</a></p>
            </div>
            <div>
              <p><a href="#">Apply for Partner Program</a></p>
            </div>
            <div>
              <p><a href="#">Gift Membership</a></p>
            </div>
          </div>
  
          <div class="dropdown-signout-link">
            <div>
              <a href="#">
                <p>Sign out</p>
                <span>kellyayo@gmail.com</span></a
              >
            </div>
          </div>
        </div>
        `;
  }
}
