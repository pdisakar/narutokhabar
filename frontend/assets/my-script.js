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
    "./src/videos/konoha/2.mp4",
    "./src/videos/konoha/3.mp4",
    "./src/videos/konoha/4.mp4",
    "./src/videos/konoha/1.mp4",
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
