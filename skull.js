const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("video");

function resizeVideo() {
    const aspectRatio = video.videoWidth / video.videoHeight;
    const newWidth = videoContainer.offsetWidth;
    const newHeight = newWidth / aspectRatio;
    video.style.width = newWidth + "px";
    video.style.height = newHeight + "px";
}

window.addEventListener("resize", resizeVideo);
resizeVideo();

const videocontainer = document.getElementById("videocontainer");

// enable inline playback
video.setAttribute("playsinline", "");

// enable autoplay
video.setAttribute("autoplay", "");

// start playing the video
video.play();
