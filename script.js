// Dark mode functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const icon = darkModeToggle.querySelector('i');

// Check for saved dark mode preference
const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled') {
    body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('darkMode', null);
    }
});

// Modal functionality
const modal = document.getElementById('contactModal');
const contactButton = document.getElementById('contactButton');
const closeBtn = document.querySelector('.close');
const contactForm = document.getElementById('contactForm');

function openContactModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeContactModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === modal) {
        closeContactModal();
    }
}

// Handle form submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    
    // Here you would typically send the data to your server
    console.log('Form submitted:', { name, email });
    
    // Clear form and close modal
    contactForm.reset();
    closeContactModal();
    
    alert('Thank you for your message! I will get back to you soon.');
});

// Add smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation for project cards on scroll
const projectCards = document.querySelectorAll('.project-card');

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
};

// Your existing code remains the same up to the project cards animation
const observer = new IntersectionObserver(observerCallback, observerOptions);

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Add the new timeline code here
// Timeline data
const experiences = [
    {
        title: "Racchabanda",
        role: "Jr. Data Scientist",
        date: "Nov 2024 - Present",
        description: "Developed a multi-speaker voice transcription and summarization system",
        type: "experience",
        skills: ["Python,", "GroqAPI,", "PyAudio"]
    },
    {
        title: "CodeNamaste",
        role: "Data Analyst and Product Dev Intern",
        date: "Jan 2024 - June 2024",
        description: "Worked on building the database side of products",
        type: "experience",
        skills: ["SQL,", "PHP,", "JS"]
    },
    {
        title: "AICTE",
        role: "AWS AIML & Cloud Intern",
        date: "2023",
        description: "Mastered AIML algorithms and managed AWS cloud infrastructure (EC2, S3, Lambda, CloudFront, VPC) for scalable solutions",
        type: "experience",
        skills: ["AWS,", "AIML,", "Cloud"]
    }
];

// Function to get the appropriate icon HTML
function getIcon(type) {
    switch (type) {
        case 'project':
            return '<i class="fas fa-code"></i>';
        case 'experience':
            return '<i class="fas fa-briefcase"></i>';
        default:
            return '<i class="fas fa-calendar"></i>';
    }
}

// Function to create the timeline
function createTimeline() {
    const timelineContainer = document.getElementById('timeline');
    if (!timelineContainer) return;

    timelineContainer.innerHTML = `
        <div class="timeline-wrapper">
            <h2 class="section-title">Timeline</h2>
            <div class="timeline-content">
                ${experiences.map((item, index) => `
                    <div class="timeline-item">
                        <div class="timeline-icon">
                            ${getIcon(item.type)}
                        </div>
                        <div class="timeline-card">
                            <div class="timeline-card-header">
                                <h3>${item.title}</h3>
                                <span class="date">${item.date}</span>
                            </div>
                            <p class="role">${item.role}</p>
                            <p class="description">${item.description}</p>
                            <div class="skills">
                                ${item.skills.map(skill => `
                                    <span class="skill-tag">${skill}</span>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Keep your existing window.addEventListener('load') code but add createTimeline() to it
window.addEventListener('load', () => {
    const headerText = document.querySelector('.header-content h1');
    if (headerText) {
        typeWriter(headerText, "I'm Aryan.");
    }
    // Add this line to initialize the timeline
    createTimeline();
});

// Your existing parallax effect code remains at the bottom
window.addEventListener('scroll', () => {
    const upperCloud = document.querySelector('.upper-cld');
    const lowerCloud = document.querySelector('.lower-cld');
    const scrolled = window.pageYOffset;
    
    if (upperCloud && lowerCloud) {
        upperCloud.style.transform = `translateX(${scrolled * 0.5}px)`;
        lowerCloud.style.transform = `translateX(-${scrolled * 0.5}px)`;
    }
});
    