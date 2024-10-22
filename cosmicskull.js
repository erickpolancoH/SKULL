// Howler. music

const Howler = require('howler');
const audio = new Howl({
    src: ['There-s-the-river.mp3'],
    autoplay: true,
    loop: true,
    volume: 0.5,
    onload: function() {
      wavesurfer.load('tu-audio.mp3');
    }
  });

  // Play and pause buttons
  document.getElementById('play').addEventListener('click', function() {
    if (audio.playing()) {
      audio.pause();
    } else {
      audio.play();
    }
  });

  document.getElementById('pause').addEventListener('click', function() {
    audio.pause();
  });