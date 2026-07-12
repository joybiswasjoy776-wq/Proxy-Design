const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.setAttribute('role', 'button');
    menuToggle.setAttribute('tabindex', '0');
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
    menuToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') navLinks.classList.toggle('active');
    });
}

// activity: mark current link active by pathname to avoid query/host mismatches
const links = document.querySelectorAll("nav a");
links.forEach(link => {
    try {
        if (link.pathname === window.location.pathname) {
            link.classList.add("active");
        }
    } catch (e) { /* ignore malformed hrefs */ }
});