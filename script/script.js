// elements
const btn = document.querySelector(".switch-btns");
const video = document.querySelector(".video-container");

// event listners
btn.addEventListener("click", () => {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});
