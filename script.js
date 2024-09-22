// JavaScript to handle scroll animations
document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const options = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const fadeInOnScroll = new IntersectionObserver((entries, fadeInOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                fadeInOnScroll.unobserve(entry.target);
            }
        });
    }, options);

    fadeInElements.forEach(el => {
        fadeInOnScroll.observe(el);
    });
});
