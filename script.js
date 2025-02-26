// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        themeToggle.classList.add('fa-sun');
        themeToggle.classList.remove('fa-moon');
    } else {
        themeToggle.classList.add('fa-moon');
        themeToggle.classList.remove('fa-sun');
    }
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Contact Modal
const contactButton = document.getElementById('contactButton');
const contactModal = document.getElementById('contactModal');
const closeContactModal = document.querySelector('.close');

contactButton.addEventListener('click', () => {
    contactModal.style.display = 'block';
});

closeContactModal.addEventListener('click', () => {
    contactModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === contactModal) {
        contactModal.style.display = 'none';
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
