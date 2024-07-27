export function userInterest() {
  const buttons = document.querySelectorAll(".btn");
  // Initialize an array to store user interest IDs
  let userInterestIDsArray = [];
  let submitButton = document.querySelector(".btn-primary");
  // Select all buttons and add event listeners
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      button.classList.toggle("btn-clicked");

      // Get the user interest ID from the button's attribute
      const userInterest = button.getAttribute("user-interest-id");

      // Toggle presence of user interest ID in the array
      if (userInterestIDsArray.includes(userInterest)) {
        // Remove userInterest from array if already present
        userInterestIDsArray = userInterestIDsArray.filter(function (id) {
          return id !== userInterest;
        });
      } else {
        // Add userInterest to array if not present
        userInterestIDsArray.push(userInterest);
      }

      // Log the array of user interest IDs
      console.log("User Interest IDs:", userInterestIDsArray);

      // Join the elements in the userInterestIDs array
      let joinedIDs = userInterestIDsArray.join(",");

      // Select the hidden input element with class 'user-interests'
      let userInterestHiddenInput = document.querySelector(".user-interests");

      // Assign the joinedIDs to the value attribute of the input element
      userInterestHiddenInput.setAttribute("value", joinedIDs);

      // Log the current value of the input element
      console.log("Input value:", userInterestHiddenInput.value);

      // count the length of the array to, and toggle button color to green.
      let selectedInterestCount = userInterestIDsArray.length;
      if (selectedInterestCount >= 2) {
        document
          .querySelector(".btn-primary")
          .classList.add("btn-primary-submit");
        submitButton.disabled = false;
      } else {
        document
          .querySelector(".btn-primary")
          .classList.remove("btn-primary-submit");
        submitButton.disabled = true;
      }
      console.log(selectedInterestCount);
    });
  });
}
