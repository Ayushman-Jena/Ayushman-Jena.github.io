document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // FADE-IN ANIMATION
    // ==============================
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));


    // ==============================
    // HERO SLIDESHOW (FIXED)
    // ==============================

    const slides = document.querySelectorAll('.hero-bg .slide');
    let current = 0;

    if (slides.length === 0) {
        console.log("No slides found");
        return;
    }

    // Ensure first slide is active
    slides[0].classList.add('active');

    setInterval(() => {

        // Remove current
        slides[current].classList.remove('active');

        // Pause video if needed
        if (slides[current].tagName === "VIDEO") {
            slides[current].pause();
        }

        // Move to next
        current = (current + 1) % slides.length;

        // Activate next
        slides[current].classList.add('active');

        // Play video if needed
        if (slides[current].tagName === "VIDEO") {
            slides[current].play();
        }

    }, 5000);

});


// ==============================
// HERO LOAD FIX
// ==============================

window.addEventListener("load", () => {
    const hero = document.querySelector(".hero");
    if (hero) {
        hero.style.opacity = "1";
    }
});
