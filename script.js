/* ==============================================
   Custom Cursor Logic
============================================== */
const cursorDot = document.getElementById("cursor-dot");
const cursorOutline = document.getElementById("cursor-outline");

window.addEventListener("mousemove", function(e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // A small delay for smooth outline trailing
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Hover effects for the custom cursor
const interactiveElements = document.querySelectorAll('a, button, .project-card, .stat-box, .skill-category, .timeline-content, .cert-list li, input, textarea');

interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        cursorOutline.style.width = "50px";
        cursorOutline.style.height = "50px";
        cursorOutline.style.backgroundColor = "rgba(0, 229, 255, 0.1)";
        cursorOutline.style.border = "1.5px dashed var(--accent-color)";
    });
    el.addEventListener("mouseleave", () => {
        cursorOutline.style.width = "30px";
        cursorOutline.style.height = "30px";
        cursorOutline.style.backgroundColor = "transparent";
        cursorOutline.style.border = "1.5px solid var(--accent-color)";
    });
});


/* ==============================================
   Mobile Navigation Toggle
============================================== */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('nav-active');

    // Animate Links
    navItems.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `fadeUp 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Hamburger Animation
    hamburger.classList.toggle('toggle');
});

// Close mobile menu when a nav link is clicked
const navAnchors = document.querySelectorAll('.nav-links a');
navAnchors.forEach(a => {
    a.addEventListener('click', () => {
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('toggle');
            navItems.forEach((link) => {
                link.style.animation = '';
            });
        }
    });
});


/* ==============================================
   Scroll Reveal Animation
============================================== */
function revealSections() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', revealSections);
// Trigger once on load
revealSections();


/* ==============================================
   Active Nav Link Highlight on Scroll
============================================== */
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        // slightly above section
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});


/* ==============================================
   Navbar Background on Scroll
============================================== */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = "0.5rem 5%";
        navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.5)";
    } else {
        navbar.style.padding = "1rem 5%";
        navbar.style.boxShadow = "none";
    }
});
