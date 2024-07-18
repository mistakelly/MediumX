// const header = document.querySelector(".header");

// // fetch the resources
// fetch("/Pages/Authenticated/Shared/header.html")
//   .then(function (res) {
//     if (!res.ok) {
//       throw new Error("Network response was not ok " + res.statusText);
//     }
//     console.log(res);
//     return res.text();
//   })
//   .then((data) => {
//     header.innerHTML = data;
//     console.log(data);
//   })
//   .catch((error) => console.error("Error loading the HTML:", error));

class HomeHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        
        
        
<nav class="navigation">
<div class="nav-items nav-left">
  <div class="nav-icon">
    <svg
      width="120"
      height="26"
      viewBox="0 0 120 26"
      fill="none"
      class="nav-icon-logo"
    >
      <path
        d="M29.57 1.4h.04v-.28h-7.27L15.59 17.1 8.84 1.12H1v.28h.04c1.32.3 2 .76 2 2.38v19c0 1.61-.68 2.06-2 2.37H1v.28h5.31v-.28h-.03c-1.33-.3-2-.76-2-2.38V4.88l8.67 20.55h.5l8.92-21.12v18.93c-.12 1.28-.79 1.68-1.99 1.95l-.03.01v.28h9.26v-.28h-.04c-1.2-.28-1.89-.68-2-1.96V3.78c0-1.62.67-2.07 2-2.38zM33.8 14c.15-3.42 1.37-5.88 3.4-5.92.64 0 1.17.22 1.58.62.87.85 1.28 2.63 1.22 5.3h-6.2zm-.1.96h10.86v-.05c-.03-2.6-.78-4.64-2.23-6.03A7.3 7.3 0 0 0 37.28 7h-.04a7.32 7.32 0 0 0-5.75 2.78 10.4 10.4 0 0 0-2.1 6.12 12.39 12.39 0 0 0-.02.95c.11 5.08 2.84 9.15 7.69 9.15 4.25 0 6.73-3.13 7.35-7.34l-.31-.1c-1.09 2.25-3.04 3.62-5.26 3.46-3.02-.23-5.34-3.33-5.13-7.07m23.12 6.9c-.36.84-1.1 1.31-2.1 1.31s-1.9-.69-2.55-1.94a12.23 12.23 0 0 1-1.06-5.48c0-4.68 1.45-7.7 3.68-7.7.94 0 1.68.46 2.03 1.28v12.52zm7.2 3.33c-1.33-.32-2-.79-2-2.5V0l-8.07 2.4v.29h.05c1.12-.1 1.87.06 2.3.46.35.32.52.81.52 1.5v3.11A5.18 5.18 0 0 0 53.94 7c-2.33 0-4.45.99-5.99 2.78-1.6 1.87-2.44 4.42-2.44 7.38 0 5.29 2.58 8.84 6.43 8.84a5.09 5.09 0 0 0 4.89-3.34v2.82h7.23v-.3h-.03zm6.91-22.1c0-1.65-1.24-2.9-2.88-2.9a2.87 2.87 0 0 0-2.9 2.9c0 1.63 1.27 2.9 2.9 2.9a2.82 2.82 0 0 0 2.88-2.9zm1.9 22.1c-1.32-.32-2-.79-2-2.5V7.06l-7.24 2.1v.28h.05c1.56.15 1.99.69 1.99 2.53v13.52h7.24v-.3h-.04zm18.54 0c-1.33-.32-2-.79-2-2.5V7.06l-6.89 2.03v.28h.04c1.28.14 1.65.72 1.65 2.57v9.88a2.48 2.48 0 0 1-2.2 1.39c-1.57 0-2.43-1.07-2.43-3.02V7.06L72.3 9.15v.28h.05c1.56.14 1.99.69 1.99 2.53v8.36c0 .59.05 1.17.15 1.74l.13.57c.61 2.21 2.22 3.37 4.73 3.37 2.13 0 4-1.33 4.82-3.4v2.88h7.23v-.3h-.03zm28.1.3v-.3h-.03c-1.44-.34-2-.97-2-2.25V12.29c0-3.31-1.85-5.29-4.95-5.29a5.08 5.08 0 0 0-4.9 3.36C107.04 8.2 105.36 7 102.88 7a4.7 4.7 0 0 0-4.6 3.11V7.06l-7.24 2v.29h.04c1.55.14 2 .7 2 2.5v13.63h6.74v-.3h-.03c-1.15-.28-1.52-.77-1.52-2.04v-12.2c.3-.7.92-1.55 2.13-1.55 1.5 0 2.26 1.05 2.26 3.11v12.98h6.75v-.3h-.03c-1.15-.28-1.52-.77-1.52-2.04V12.29c0-.4-.03-.8-.1-1.2.33-.78.97-1.7 2.23-1.7 1.53 0 2.27 1.02 2.27 3.11v12.98h7.23z"
        fill="#000"
      ></path>
    </svg>
  </div>
  <!-- search form -->
  <form action="#" autocomplete="off" spellcheck="false">
    <div class="search-svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M4.092 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0m6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73A8.05 8.05 0 0 0 11.042 3z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>

    <div class="search-input">
      <input type="text" class="nav-search" placeholder="Search" />
    </div>
  </form>
</div>

<div class="nav-items nav-right">
  <ul class="nav-items nav-items-right">
    <div class="nav-item write-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        aria-label="Write"
      >
        <path
          fill="currentColor"
          d="M14 4a.5.5 0 0 0 0-1zm7 6a.5.5 0 0 0-1 0zm-7-7H4v1h10zM3 4v16h1V4zm1 17h16v-1H4zm17-1V10h-1v10zm-1 1a1 1 0 0 0 1-1h-1zM3 20a1 1 0 0 0 1 1v-1zM4 3a1 1 0 0 0-1 1h1z"
        ></path>
        <path
          stroke="currentColor"
          d="m17.5 4.5-8.458 8.458a.25.25 0 0 0-.06.098l-.824 2.47a.25.25 0 0 0 .316.316l2.47-.823a.25.25 0 0 0 .098-.06L19.5 6.5m-2-2 2.323-2.323a.25.25 0 0 1 .354 0l1.646 1.646a.25.25 0 0 1 0 .354L19.5 6.5m-2-2 2 2"
        ></path>
      </svg>
      <span>Write</span>
    </div>

    <div class="notification-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        aria-label="Notifications"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          d="M15 18.5a3 3 0 1 1-6 0"
        ></path>
        <path
          stroke="currentColor"
          stroke-linejoin="round"
          d="M5.5 10.532V9a6.5 6.5 0 0 1 13 0v1.532c0 1.42.564 2.782 1.568 3.786l.032.032c.256.256.4.604.4.966v2.934a.25.25 0 0 1-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.934c0-.363.144-.71.4-.966l.032-.032A5.35 5.35 0 0 0 5.5 10.532Z"
        ></path>
      </svg>
    </div>

    <div class="profile-icon">
      <img
        src="/Assets/imgages/medium-image.webp"
        alt="Nature Image"
        class="profile-img"
      />
    </div>
  </ul>
</div>
</nav>
`;
  }
}

customElements.define("home-header", HomeHeader);

class Posts extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="blog-container">
            <div class="user-info">
              <div class="user-img">
                <img src="/Assets/imgages/user1.png" alt="" />
              </div>
              <div class="user-name">
                <span>kelly ayo</span>
              </div>
            </div>
            <div class="blog-composition">
              <div class="blog-wrapper">
                <main class="blog-content">
                  <div class="details-wrapper">
                    <div class="details-title">
                      <h1>GOD'S time is the best</h1>
                    </div>
                    <div class="details-subtitle">
                      <h4>
                        Wait on GOD he is the author and finisher of our faith
                      </h4>
                    </div>
                    <div class="details-cta">
                      <div class="cta-right">
                        <div class="premium-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 64 64"
                          >
                            <path
                              fill="#FFC017"
                              d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
                            ></path>
                          </svg>
                        </div>

                        <div class="created-at">
                          <span>Jul 16</span>
                        </div>
                        <div class="clap-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="#6B6B6B"
                              fill-rule="evenodd"
                              d="m3.672 10.167 2.138 2.14h-.002c1.726 1.722 4.337 2.436 5.96.81 1.472-1.45 1.806-3.68.76-5.388l-1.815-3.484c-.353-.524-.849-1.22-1.337-.958-.49.261 0 1.56 0 1.56l.78 1.932L6.43 2.866c-.837-.958-1.467-1.108-1.928-.647-.33.33-.266.856.477 1.598.501.503 1.888 1.957 1.888 1.957.17.174.083.485-.093.655a.56.56 0 0 1-.34.163.43.43 0 0 1-.317-.135s-2.4-2.469-2.803-2.87c-.344-.346-.803-.54-1.194-.15-.408.406-.273 1.065.11 1.447.345.346 2.31 2.297 2.685 2.67l.062.06c.17.175.269.628.093.8-.193.188-.453.33-.678.273a.9.9 0 0 1-.446-.273S2.501 6.84 1.892 6.23c-.407-.406-.899-.333-1.229 0-.525.524.263 1.28 1.73 2.691.384.368.814.781 1.279 1.246m8.472-7.219c.372-.29.95-.28 1.303.244V3.19l1.563 3.006.036.074c.885 1.87.346 4.093-.512 5.159l-.035.044c-.211.264-.344.43-.74.61 1.382-1.855.963-3.478-.248-5.456L11.943 3.88l-.002-.037c-.017-.3-.039-.71.203-.895"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>1.8k</span>
                        </div>
                        <div class="comment">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#6B6B6B"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="#6B6B6B"
                              d="M12.344 11.458A5.28 5.28 0 0 0 14 7.526C14 4.483 11.391 2 8.051 2S2 4.483 2 7.527c0 3.051 2.712 5.526 6.059 5.526a6.6 6.6 0 0 0 1.758-.236q.255.223.554.414c.784.51 1.626.768 2.512.768a.37.37 0 0 0 .355-.214.37.37 0 0 0-.03-.384 4.7 4.7 0 0 1-.857-1.958v.014z"
                            ></path>
                          </svg>
                          <span class="comment-count">100</span>
                        </div>
                      </div>
                      <div class="cta-left">
                        <div class="not-interested">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="nn no"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M8.25 12h7.5"
                            ></path>
                          </svg>
                        </div>
                        <div class="bookmark">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="ns"
                          >
                            <path
                              fill="#000"
                              d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4z"
                            ></path>
                          </svg>
                        </div>
                        <div class="more">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M4.385 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59s1.02-.2 1.41-.59c.4-.39.59-.86.59-1.41s-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41m5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59s1.02-.2 1.41-.59c.4-.39.59-.86.59-1.41s-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59s-.58.86-.58 1.41m5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59s1.03-.2 1.42-.59.58-.86.58-1.41-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59s-.58.86-.58 1.41"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
                <div class="blog-sidebar">
                  <div class="blog-img">
                    <img src="/Assets/imgages/blog_image.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        `
    }
}


customElements.define('user-posts', Posts)