const video = document.getElementById('wedding-video');
const playButton = document.getElementById('video-play');

if (video && playButton) {
  video.controls = false;
  playButton.hidden = false;

  playButton.addEventListener('click', async () => {
    video.controls = true;
    playButton.hidden = true;
    try {
      await video.play();
    } catch {
      // The native controls remain visible if autoplay is blocked.
    }
  });

  video.addEventListener('error', () => {
    video.controls = true;
    playButton.hidden = true;
  });
}
