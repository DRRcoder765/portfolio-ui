// Auto-scroll carousel
const carousel = document.getElementById('trending-carousel');
let scrollAmount = 0;
setInterval(() => {
    scrollAmount += 300; // Approximate card width + gap
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) scrollAmount = 0;
    carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
}, 5000);

// Modal functions
function openModal(videoUrl) {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('video-frame');
    iframe.src = videoUrl;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('video-frame');
    iframe.src = '';
    modal.style.display = '
