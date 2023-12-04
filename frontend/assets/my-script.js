
// For Video slider
console.log('Hey')

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
console.log("Hey ");
// Add a script tag at the end of your body or in your external JavaScript file
document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll(".artical_container article");

  articles.forEach((article) => {
    const newsBody = article.querySelector(".news-body");

    article.addEventListener("click", function () {
      newsBody.classList.toggle("hidden");
    });
  });
});