const closeBannerBtn = document.getElementById('close-banner');

closeBannerBtn.addEventListener('click', () => {
  const bannerMsg = document.getElementById('banner-msg');
  banner.style.display = 'none';
});