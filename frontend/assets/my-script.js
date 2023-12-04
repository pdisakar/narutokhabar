
// For Video slider
function videoURL(videolink, index) {
  const videoElement = document.getElementById("video-slider");
  videoElement.src = videolink;
  videoElement.play();

  const thumbnails = document.querySelectorAll(".navigation li");
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove("active");
  });

  thumbnails[index].classList.add("active");
}

let currentVideoIndex = 0;
function changeVideo() {
  const videoElement = document.getElementById("video-slider");
  const videoLinks = [
    "./src/videos/konoha/2.mp4",
    "./src/videos/konoha/3.mp4",
    "./src/videos/konoha/4.mp4",
    "./src/videos/konoha/1.mp4",
  ];

  videoElement.src = videoLinks[currentVideoIndex];
  currentVideoIndex = (currentVideoIndex + 1) % videoLinks.length;

  videoElement.classList.add("playing");

  videoElement.addEventListener("ended", function () {
    videoElement.classList.remove("playing");
  });

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


// For News Body

      document.addEventListener("DOMContentLoaded", function () {
        const articles = document.querySelectorAll(".artical_container article");

        articles.forEach((article) => {
          const newsBody = article.querySelector(".news-body");

          article.addEventListener("click", function () {
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

        // Close the active article when clicking outside of any article
        document.addEventListener("click", function (event) {
          const isClickInsideArticle = articles.some((article) =>
            article.contains(event.target)
          );

          if (!isClickInsideArticle) {
            articles.forEach((article) => {
              article.querySelector(".news-body").classList.add("hidden");
            });
          }
        });
      });