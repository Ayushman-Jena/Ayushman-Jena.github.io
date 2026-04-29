// ==============================
// FADE-IN ANIMATION (SCROLL)
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));


    // ==============================
    // HERO BACKGROUND SLIDESHOW
    // Supports both <img> and <video> elements
    // ==============================

    const slides = document.querySelectorAll('.hero-bg img, .hero-bg video');
    let current = 0;

    if (slides.length > 0) {

        // Activate first slide
        slides[current].classList.add('active');

        // If first slide is a video, play it
        if (slides[current].tagName === 'VIDEO') {
            slides[current].play();
        }

        setInterval(() => {
            // Pause video if leaving it
            if (slides[current].tagName === 'VIDEO') {
                slides[current].pause();
                slides[current].currentTime = 0;
            }

            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');

            // Play video if entering one
            if (slides[current].tagName === 'VIDEO') {
                slides[current].play();
            }

        }, 4000); // change every 4 seconds
    }

});


// ==============================
// HERO FADE-IN ON LOAD
// ==============================

window.addEventListener("load", () => {
    const hero = document.querySelector(".hero");
    if (hero) {
        hero.style.opacity = "1";
    }
});
