const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const images = document.querySelectorAll('.zoomable-img');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let currentIndex = 0;

// Open lightbox
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    lightbox.classList.add('show');
  });
});

// Show image
function showImage() {
  lightboxImg.src = images[currentIndex].src;
}

// Navigate
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}

rightArrow.addEventListener('click', e => {
  e.stopPropagation();
  nextImage();
});
leftArrow.addEventListener('click', e => {
  e.stopPropagation();
  prevImage();
});

// Close only if background (not image or arrows) is clicked
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.classList.remove('show');
  }
});

// Keyboard nav
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('show')) return;
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
  if (e.key === 'Escape') lightbox.classList.remove('show');
});

// Swipe (mobile)
let startX = 0;
lightboxImg.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});
lightboxImg.addEventListener('touchend', e => {
  let endX = e.changedTouches[0].clientX;
  if (endX - startX > 50) prevImage();
  if (startX - endX > 50) nextImage();
});