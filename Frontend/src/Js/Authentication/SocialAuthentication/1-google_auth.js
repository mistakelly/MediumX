let googleBtn = document.querySelector(".google-btn");
let form = document.querySelector(".google-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  googleBtn.addEventListener("click", function () {
    // open in a new tab or mini javascript screen, then after a successful login, redirect user back to the open url.

    // also when the user is trying to authenticate, send a Get request to the server on sucess, redirect the user to the home page, on failure log error out

    // how can we know the server is done autheticating the user ??:
    // we are going to constantly ping the server and on success we stop pinging and redirect the user likewise for failure.

    // we can use a setTimeout or maybe an infinite loop, that we can break on success or on error, or any other method available, I don't know for now
    window.location.href = "http://127.0.0.1:8000/accounts/google/login/";

    // while (true) {
    //   setTimeout(
    //     fetch("http://127.0.0.1:8000/user-registration/status")
    //       .then((response) => response.json())
    //       .then((data) => {
    //         if (data.success) {
    //           console.log("user successfully logged in");
    //         } else {
    //           throw new Error("Sorry something went wrong");
    //         }
    //       })
    //       .catch((error) => console.error(`${error}`)),
    //     2000
    //   );
    //   break;
    // }

    // constantly poll the server to verify if a user successfully logins into our application.
    // (function poll() {
    //   setTimeout(() => {
    //     fetch("http://127.0.0.1:8000/user-registration/status")
    //       .then((response) => response.json())
    //       .then((data) => {
    //         if (data.success) {
    //           console.log("User successfully logged in");
    //         } else {
    //           throw new Error("Sorry, something went wrong");
    //         }
    //       })
    //       .catch((error) => console.error(`${error}`))
    //       .finally(() => poll()); // Call poll() again to create the loop
    //   }, 2000);
    // })();

    window.location.href = "http://127.0.0.1:8000/accounts/google/login/";

    // Redirect user to Google OAuth2 consent screen
  });

  //   const formData = new FormData(form);

  //   fetch("http://127.0.0.1:8000/accounts/google/login/", {
  //     method: "POST",
  //     body: formData,
  //     headers: {
  //       'X-CSRFToken': getCookie('csrftoken'),  // Include CSRF token
  //     },
  //     mode: "cors",
  //   })
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.error("An error happened:", error));

  //   console.log(this);
  // console.log('cookie',document.cookie)
});

// // Get CSRF token
// function getCookie(name) {
//   let cookieValue = null;
//   if (document.cookie && document.cookie !== '') {
//     const cookies = document.cookie.split(';');
//     for (let i = 0; i < cookies.length; i++) {
//       const cookie = cookies[i].trim();
//       if (cookie.substring(0, name.length + 1) === (name + '=')) {
//         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//         break;
//       }
//     }
//   }
//   return cookieValue;
// }

// // https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=601541735691-5bq9otjoljdtjnq6u23osfeafioibr1f.apps.googleusercontent.com&scope=profile%20email&state=TscrXGAhqa1j&response_type=code&redirect_uri=https%3A%2F%2Fzapier.com%2Fgoogle-sso%2Freturn%2F&prompt=consent&access_type=offline&service=lso&o2v=1&ddm=0&flowName=GeneralOAuthFlow
