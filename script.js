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
    // ==============================

    const slides = document.querySelectorAll('.hero-bg img');
    let current = 0;

    if (slides.length > 0) {

        // Show first image
        slides[current].classList.add('active');

        setInterval(() => {
            slides[current].classList.remove('active');

            current = (current + 1) % slides.length;

            slides[current].classList.add('active');
        }, 4000); // change every 4 sec
    }

});


// ==============================
// HERO FADE-IN EFFECT
// ==============================

window.addEventListener("load", () => {
    const hero = document.querySelector(".hero");
    if (hero) {
        hero.style.opacity = "1";
    }
});
