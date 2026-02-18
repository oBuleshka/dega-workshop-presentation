const deck = new Reveal({
  controls: true,
  progress: true,
  center: true,
  hash: true,
  slideNumber: true,
  keyboard: true,
  transition: 'slide',
  backgroundTransition: 'fade',
  fragments: true,
  plugins: [RevealNotes]
});

deck.initialize().then(() => {
  deck.on('slidechanged', (event) => {
    const waveArm = document.querySelector('#wave-arm');
    if (!waveArm) {
      return;
    }

    if (event.currentSlide && event.currentSlide.id === 'js-slide') {
      waveArm.classList.add('wave');
    } else {
      waveArm.classList.remove('wave');
    }
  });

  const waveArm = document.querySelector('#wave-arm');
  if (deck.getCurrentSlide()?.id === 'js-slide' && waveArm) {
    waveArm.classList.add('wave');
  }
});
