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

  document
    .querySelector(".discard-btn")
    .addEventListener("click", function () {
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
