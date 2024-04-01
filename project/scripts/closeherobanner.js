const closeHeroBannerBtn = document.getElementById('close-banner');

// Close the hero banner when clicked
closeHeroBannerBtn.addEventListener('click', () => {
  const heroBanner = document.getElementById('hero-banner');
  heroBanner.style.display = 'none';
});