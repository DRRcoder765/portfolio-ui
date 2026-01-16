// Auto-scroll carousel
const carousel = document.getElementById('trending-carousel');
let scrollAmount = 0;
setInterval(() => {
    scrollAmount += 300; // Approximate card width + gap
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) scrollAmount = 0;
    carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
}, 5000);
