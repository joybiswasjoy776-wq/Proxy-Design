const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
if (menuToggle && navLinks) {
    menuToggle.setAttribute('role','button');
    menuToggle.setAttribute('tabindex','0');
    menuToggle.addEventListener("click", () => { navLinks.classList.toggle("active"); });
    menuToggle.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') navLinks.classList.toggle('active'); });
}
const links = document.querySelectorAll("nav a");
links.forEach(link => { try { if (link.pathname === window.location.pathname) link.classList.add("active"); } catch(e){} });

const logos = ["logo1.jpg",
    "logo2.jpg",
    "logo3.jpg",
    "logo4.jpg",
    "logo5.jpg",
    "logo6.jpg",
    "logo7.jpg",
    "logo8.jpg",
    "logo9.jpg",
    "logo10.jpg",
    "logo11.jpg",
    "logo12.jpg",
    "logo13.jpg",
    "logo14.jpg",
    "logo15.jpg",
    "logo16.jpg",
    "logo17.jpg",
    "logo18.jpg",
    "logo19.jpg",
    "logo20.jpg",
    "logo21.jpg",
        "logo22.jpeg",
    "logo23.jpeg",
     "logo24.jpeg",
      "logo25.jpeg",
];

const gallery = document.getElementById("gallery");

logos.forEach(logo => {
    const card = document.createElement("div");
    card.className = "logo-card";

    card.innerHTML = `
    <a href="logos/${logo}" download rel="noopener"> 
        <img src="logos/${logo}" alt="${logo}">
    </a>
    `;

    gallery.appendChild(card);
});