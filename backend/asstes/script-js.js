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
    document.getElementById("name").value = "";
    document.getElementById("news-title").value = "";
    document.getElementById("news-discription").value = "";

    document.getElementById("avatarImage").src =
      "../backend/source/upload-img.png";
    document.getElementById("avatarImageUpload").value = "";

    document.getElementById("generalImage").src =
      "../backend/source/default-img.png";
    document.getElementById("generalImageUpload").value = "";
  });
});

function validateForm() {
  var avatarImageUpload = document.getElementById("avatarImageUpload");
  var nameInput = document.getElementById("name");
  var newsTitleInput = document.getElementById("news-title");
  var newsDescriptionInput = document.getElementById("news-discription");

  if (
    !avatarImageUpload.hasAttribute("data-selected") ||
    avatarImageUpload.getAttribute("data-selected") !== "true"
  ) {
    alert("Please choose a new avatar image.");
    return false;
  }

  // Validate news title
  if (nameInput.value.trim() === "") {
    alert("Please enter a news title.");
    return false;
  }

  // Validate news date
  if (newsTitleInput.value.trim() === "") {
    alert("Please enter a news date.");
    return false;
  }

  // Validate news description
  if (newsDescriptionInput.value.trim() === "") {
    alert("Please enter a news description.");
    return false;
  }

  // Additional validation logic can be added here if needed

  return true; // Continue with form submission
}
