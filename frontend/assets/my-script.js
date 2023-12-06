function videoURL(videolink, index) {
  const videoElement = document.getElementById("video-slider");
  videoElement.src = videolink;
  videoElement.play();

  // Remove 'active' class from all thumbnails
  const thumbnails = document.querySelectorAll(".navigation li");
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove("active");
  });

  // Add 'active' class to the selected thumbnail
  thumbnails[index].classList.add("active");
}

let currentVideoIndex = 0;
function changeVideo() {
  const videoElement = document.getElementById("video-slider");
  const videoLinks = [
    "./frontend/src/videos/konoha/2.mp4",
    "./frontend/src/videos/konoha/3.mp4",
    "./frontend/src/videos/konoha/4.mp4",
    "./frontend/src/videos/konoha/1.mp4",
  ];

  videoElement.src = videoLinks[currentVideoIndex];
  currentVideoIndex = (currentVideoIndex + 1) % videoLinks.length;

  videoElement.classList.add("playing");

  // Listen for the 'ended' event to remove the class when the video ends
  videoElement.addEventListener("ended", function () {
    videoElement.classList.remove("playing");
  });

  // Toggle the 'active' class for the current thumbnail
  const thumbnails = document.querySelectorAll(".navigation li");
  thumbnails.forEach((thumbnail, index) => {
    if (index === currentVideoIndex) {
      thumbnail.classList.add("active");
    } else {
      thumbnail.classList.remove("active");
    }
  });
}

setInterval(changeVideo, 5000);

//----------------------------------------- Contact-Form Validation-------------------------------------//
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", function (event) {
    // Prevent the form from submitting if validation fails
    if (!validateForm()) {
      event.preventDefault();
    }
  });

  function validateForm() {
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const phoneInput = document.querySelector('input[name="phone"]');
    const messageInput = document.querySelector('textarea[name="your_message"]');
    
    // Reset previous error styles
    resetErrors([nameInput, emailInput, phoneInput, messageInput]);

    let isValid = true;
    
    // Validate Name
    if (!nameInput.value.trim()) {
      alert("Name is required");
      isValid = false;
    } else {
      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        alert("Invalid email address");
        isValid = false;
      } else {
        // Validate Phone
        const phoneRegex = /^\d{8,12}$/; // Between 8 and 12 digits
        const phoneNumber = phoneInput.value.trim();
        if (!phoneNumber) {
          alert("Phone number is required");
          isValid = false;
        } else if (!phoneRegex.test(phoneNumber)) {
          alert("Phone number should be between 8 and 12 digits long");
          isValid = false;
        } else {
          // Validate Message
          if (!messageInput.value.trim()) {
            alert("Message is required");
            isValid = false;
          }
        }
      }
    }
    
    return isValid;
  }

  function resetErrors(elements) {
    elements.forEach((element) => {
      element.classList.remove("error-input");
    });
  }
});

//----------------------------------- For News Body------------------------------------- //

document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll(".artical_container article");

  // Function to hide the active news body
  function hideActiveNewsBody() {
    articles.forEach((article) => {
      const newsBody = article.querySelector(".news-body");
      newsBody.classList.add("hidden");
    });
  }

  articles.forEach((article) => {
    const newsBody = article.querySelector(".news-body");

    article.addEventListener("click", function (event) {
      // Prevent the click event from propagating to the document body
      event.stopPropagation();

      // Toggle the visibility of the clicked article's news body
      newsBody.classList.toggle("hidden");

      // Close other articles if they are open
      articles.forEach((otherArticle) => {
        if (otherArticle !== article) {
          otherArticle.querySelector(".news-body").classList.add("hidden");
        }
      });
    });
  });

  // Add click event listener to the document body
  document.body.addEventListener("click", function () {
    hideActiveNewsBody();
  });

  // Add keydown event listener to the document body
  document.body.addEventListener("keydown", function (event) {
    // Check if the pressed key is the "Esc" key (code 27)
    if (event.key === "Escape" || event.keyCode === 27) {
      hideActiveNewsBody();
    }
  });
});
