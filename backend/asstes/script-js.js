window.addEventListener("load", (event) => {
  document
    .getElementById("avatarImage")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("avatarImageUpload").click();
    });

  document
    .getElementById("avatarImageUpload")
    .addEventListener("change", function (e) {
      e.preventDefault();
      var fileInput = this;
      var avatarImage = document.getElementById("avatarImage");

      if (fileInput.files && fileInput.files[0]) {
        if (!fileInput.files[0].type.startsWith("image/")) {
          alert("Please upload a valid image file.");
          fileInput.value = "";
          return;
        }

        var reader = new FileReader();

        reader.onload = function (e) {
          e.preventDefault();
          avatarImage.src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
      }
    });

  document.querySelector(".discard-btn").addEventListener("click", function () {
    // Reset form elements to their default state
    document.getElementById("name").value = "";
    document.getElementById("news-title").value = "";
    document.getElementById("news-discription").value = "";

    // Restore original labels
    restoreOriginalLabels();

    // Keep image source as "../backend/source/images/upload-img.png"
    document.getElementById("avatarImage").src =
      "../backend/source/images/upload-img.png";
    document.getElementById("avatarImageUpload").value = "";

    document.getElementById("generalImage").src =
      "../backend/source/default-img.png";
    document.getElementById("generalImageUpload").value = "";

    // Remove any existing error styles and messages
    resetErrors();
  });

  // Function to restore original labels
  function restoreOriginalLabels() {
    const inputElements = document.querySelectorAll(
      ".form input, .form textarea"
    ); // Include textarea in the selection

    inputElements.forEach((inputElement) => {
      const labelElement = document.querySelector(
        `label[for="${inputElement.id}"]`
      );
      if (labelElement && labelElement.hasAttribute("data-original-label")) {
        labelElement.textContent = labelElement.getAttribute(
          "data-original-label"
        );
        labelElement.classList.remove("error-message");
        labelElement.removeAttribute("data-original-label");
      }
    });
  }

  // Function to reset error styles and messages
  function resetErrors() {
    const errorInputs = document.querySelectorAll(".error-input");
    errorInputs.forEach((errorInput) => {
      errorInput.classList.remove("error-input");
    });

    const errorLabels = document.querySelectorAll(".error-message");
    errorLabels.forEach((errorLabel) => {
      errorLabel.remove();
    });
  }
});

// --------------------------validation--------------------

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  form.addEventListener("submit", function (event) {
    // Prevent the form from submitting if validation fails
    if (!validateForm()) {
      event.preventDefault();
    }
  });

  function validateForm() {
    const nameInput = document.getElementById("name");
    const newsTitleInput = document.getElementById("news-title");
    const newsDescriptionInput = document.getElementById("news-discription");
    const avatarImageInput = document.getElementById("avatarImageUpload");

    // Reset all previous error styles
    resetErrors();

    let isValid = true;
    const errorMessages = [];

    // Validate News Title
    if (!nameInput.value.trim()) {
      errorMessages.push("* News Title is required");
      isValid = false;
    }

    // Validate Enter Dated
    if (!newsTitleInput.value) {
      errorMessages.push("* Enter Dated is required");
      isValid = false;
    }

    // Validate News Description
    if (!newsDescriptionInput.value.trim()) {
      errorMessages.push("* News Description is required");
      isValid = false;
    }

    // Validate Avatar Image
    if (!avatarImageInput.files || avatarImageInput.files.length === 0) {
      errorMessages.push("* Avatar Image is required");
      isValid = false;
    }

    // Display accumulated error messages
    if (!isValid) {
      displayErrorMessages(errorMessages);
    }

    return isValid;
  }

  function resetErrors() {
    const errorInputs = document.querySelectorAll(".error-input");
    errorInputs.forEach((errorInput) => {
      errorInput.classList.remove("error-input");
    });

    const errorLabels = document.querySelectorAll(".error-message");
    errorLabels.forEach((errorLabel) => {
      // Restore the original label text
      const inputId = errorLabel.getAttribute("for");
      const originalLabel = document
        .getElementById(inputId)
        .getAttribute("data-original-label");
      errorLabel.textContent = originalLabel;
      errorLabel.classList.remove("error-message");
    });
  }

  function displayErrorMessages(messages) {
    messages.forEach((message) => {
      const inputElement = getInputForErrorMessage(message);
      inputElement.classList.add("error-input");

      // Store the original label text in a data attribute
      const labelElement = inputElement
        .closest(".form")
        .querySelector(`label[for="${inputElement.id}"]`);
      if (labelElement) {
        labelElement.setAttribute(
          "data-original-label",
          labelElement.textContent
        );

        // Update the label with the error message
        labelElement.textContent = message;
        labelElement.classList.add("error-message");
      }
    });
  }

  function getInputForErrorMessage(errorMessage) {
    switch (errorMessage) {
      case "* News Title is required":
        return document.getElementById("name");
      case "* Enter Dated is required":
        return document.getElementById("news-title");
      case "* News Description is required":
        return document.getElementById("news-discription");
      case "* Avatar Image is required":
        return document.getElementById("avatarImageUpload");
      default:
        return null;
    }
  }
});
window.addEventListener("load", (event) => {
  document
    .getElementById("avatarImage")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("avatarImageUpload").click();
    });

  document
    .getElementById("avatarImageUpload")
    .addEventListener("change", function (e) {
      e.preventDefault();
      var fileInput = this;
      var avatarImage = document.getElementById("avatarImage");

      if (fileInput.files && fileInput.files[0]) {
        if (!fileInput.files[0].type.startsWith("image/")) {
          alert("Please upload a valid image file.");
          fileInput.value = "";
          return;
        }

        var reader = new FileReader();

        reader.onload = function (e) {
          e.preventDefault();
          avatarImage.src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
      }
    });

  document.querySelector(".discard-btn").addEventListener("click", function () {
    // Reset form elements to their default state
    document.getElementById("name").value = "";
    document.getElementById("news-title").value = "";
    document.getElementById("news-discription").value = "";

    // Restore original labels
    restoreOriginalLabels();

    // Keep image source as "../backend/source/images/upload-img.png"
    document.getElementById("avatarImage").src =
      "../backend/source/images/upload-img.png";
    document.getElementById("avatarImageUpload").value = "";

    document.getElementById("generalImage").src =
      "../backend/source/default-img.png";
    document.getElementById("generalImageUpload").value = "";

    // Remove any existing error styles and messages
    resetErrors();
  });

  // Function to restore original labels
  function restoreOriginalLabels() {
    const inputElements = document.querySelectorAll(
      ".form input, .form textarea"
    ); // Include textarea in the selection

    inputElements.forEach((inputElement) => {
      const labelElement = document.querySelector(
        `label[for="${inputElement.id}"]`
      );
      if (labelElement && labelElement.hasAttribute("data-original-label")) {
        labelElement.textContent = labelElement.getAttribute(
          "data-original-label"
        );
        labelElement.classList.remove("error-message");
        labelElement.removeAttribute("data-original-label");
      }
    });
  }

  // Function to reset error styles and messages
  function resetErrors() {
    const errorInputs = document.querySelectorAll(".error-input");
    errorInputs.forEach((errorInput) => {
      errorInput.classList.remove("error-input");
    });

    const errorLabels = document.querySelectorAll(".error-message");
    errorLabels.forEach((errorLabel) => {
      errorLabel.remove();
    });
  }
});

// --------------------------validation--------------------

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  form.addEventListener("submit", function (event) {
    // Prevent the form from submitting if validation fails
    if (!validateForm()) {
      event.preventDefault();
    }
  });

  function validateForm() {
    const nameInput = document.getElementById("name");
    const newsTitleInput = document.getElementById("news-title");
    const newsDescriptionInput = document.getElementById("news-discription");
    const avatarImageInput = document.getElementById("avatarImageUpload");

    // Reset all previous error styles
    resetErrors();

    let isValid = true;
    const errorMessages = [];

    // Validate News Title
    if (!nameInput.value.trim()) {
      errorMessages.push("* News Title is required");
      isValid = false;
    }

    // Validate Enter Dated
    if (!newsTitleInput.value) {
      errorMessages.push("* Enter Dated is required");
      isValid = false;
    }

    // Validate News Description
    if (!newsDescriptionInput.value.trim()) {
      errorMessages.push("* News Description is required");
      isValid = false;
    }

    // Validate Avatar Image
    if (!avatarImageInput.files || avatarImageInput.files.length === 0) {
      errorMessages.push("* Avatar Image is required");
      isValid = false;
    }

    // Display accumulated error messages
    if (!isValid) {
      displayErrorMessages(errorMessages);
    }

    return isValid;
  }

  function resetErrors() {
    const errorInputs = document.querySelectorAll(".error-input");
    errorInputs.forEach((errorInput) => {
      errorInput.classList.remove("error-input");
    });

    const errorLabels = document.querySelectorAll(".error-message");
    errorLabels.forEach((errorLabel) => {
      // Restore the original label text
      const inputId = errorLabel.getAttribute("for");
      const originalLabel = document
        .getElementById(inputId)
        .getAttribute("data-original-label");
      errorLabel.textContent = originalLabel;
      errorLabel.classList.remove("error-message");
    });
  }

  function displayErrorMessages(messages) {
    messages.forEach((message) => {
      const inputElement = getInputForErrorMessage(message);
      inputElement.classList.add("error-input");

      // Store the original label text in a data attribute
      const labelElement = inputElement
        .closest(".form")
        .querySelector(`label[for="${inputElement.id}"]`);
      if (labelElement) {
        labelElement.setAttribute(
          "data-original-label",
          labelElement.textContent
        );

        // Update the label with the error message
        labelElement.textContent = message;
        labelElement.classList.add("error-message");
      }
    });
  }

  function getInputForErrorMessage(errorMessage) {
    switch (errorMessage) {
      case "* News Title is required":
        return document.getElementById("name");
      case "* Enter Dated is required":
        return document.getElementById("news-title");
      case "* News Description is required":
        return document.getElementById("news-discription");
      case "* Avatar Image is required":
        return document.getElementById("avatarImageUpload");
      default:
        return null;
    }
  }
});

// --------------loginformvalisation------------

function loginValidation() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var usernameplace = document.getElementById("username");
  var passwordplace = document.getElementById("password");

  if (username.trim() === "" || password.trim() === "") {
    usernameplace.placeholder = "Please Enter Username *";
    passwordplace.placeholder = "Please Enter Password *";

    usernameplace.classList.add("error-placeholder");
    passwordplace.classList.add("error-placeholder");

    return false;
  }

  alert("Login successful!");
}
