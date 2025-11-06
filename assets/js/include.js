document.addEventListener("DOMContentLoaded", () => {
    const includeTargets = document.querySelectorAll("[data-include]");

    // Fetch all components
    const fetches = Array.from(includeTargets).map(el => {
        const file = el.getAttribute("data-include");
        return fetch(file + "?v=" + Date.now())
            .then(resp => resp.text())
            .then(data => el.innerHTML = data)
            .catch(() => el.innerHTML = "<p>Component failed to load.</p>");
    });

    // Wait until all components are loaded
    Promise.all(fetches).then(() => {
        // Fade-up observer (already here)
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add("visible");
            });
        });
        document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

        // Initialize typewriter AFTER hero section is in DOM
        consoleText(
            ["Hi, I’m Julian.", "Java Developer.", "Web Enthusiast.", "Tech Explorer."],
            "text",
            ['tomato','rebeccapurple','lightblue']
        );

        // Set footer year dynamically
        document.getElementById('year').textContent = new Date().getFullYear();
    });

});