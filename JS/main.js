// animate fade-up elements on scroll
const reveal = (el) => {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        })
    }, { threshold: 0.12 });
    obs.observe(el);
};

// Apply reveal animations
document.querySelectorAll('.fade-up').forEach(el => reveal(el));

// Set footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        const id = a.getAttribute('href').slice(1);
        const node = document.getElementById(id);
        if (node) node.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
