// Initialize Reveal using global API (GitHub Pages safe)
Reveal.initialize({
  controls: true,
  progress: true,
  center: true,
  hash: true,
  slideNumber: true,
  keyboard: true,
  transition: 'slide',
  backgroundTransition: 'fade'
});

// After Reveal is ready
Reveal.on('ready', function () {
  handleWaveAnimation(Reveal.getCurrentSlide());
});

// When slide changes
Reveal.on('slidechanged', function (event) {
  handleWaveAnimation(event.currentSlide);
});

function handleWaveAnimation(currentSlide) {
  const waveArm = document.querySelector('#wave-arm');

  if (!waveArm) return;

  if (currentSlide && currentSlide.id === 'js-slide') {
    waveArm.classList.add('wave');
  } else {
    waveArm.classList.remove('wave');
  }
}
