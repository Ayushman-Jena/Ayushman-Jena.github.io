const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

elements.forEach(el => observer.observe(el));

window.addEventListener("load", () => {
    document.querySelector(".hero").style.opacity = "1";
});
const slides = document.querySelectorAll('.hero-bg img');
let current = 0;

setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}, 4000); // change every 4 sec
