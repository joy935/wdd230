const banner = document.getElementById('banner');
const bannerMsg = document.getElementById('banner-msg');

const currentDate = new Date();
const currentDay = currentDate.getDay();

if (currentDay === 1 || currentDay ==2 || currentDay === 3) {
  banner.style.display = 'block';
  bannerMsg.textContent = `Save the Date: The Chamber of Commerce will have a Meet and Greet on Wednesday at 7:00 p.m.`;
} else {
    banner.style.display = 'block';
    bannerMsg.textContent = 'Welcome to the Chamber of Commerce!';
}