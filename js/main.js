var mainVideo = document.getElementById("mainVideo");

mainVideo.addEventListener("ended", function () {
  mainVideo.pause();
  mainVideo.currentTime = mainVideo.duration;
});
