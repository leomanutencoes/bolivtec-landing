// Menu Toggle
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });
}

// Close menu when clicking links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 20px rgba(46, 46, 46, 0.1)';
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        document.querySelector('.nav__logo img').style.height = '35px';
    } else {
        header.style.boxShadow = 'none';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        document.querySelector('.nav__logo img').style.height = '45px';
    }
});

// Form validation
const contactForm = document.querySelector('.contact__form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic validation
        let isValid = true;
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ff6b35';
            } else {
                input.style.borderColor = '#ddd';
            }
        });
        
        if (isValid) {
            // Form is valid - would normally send to server
            alert('Solicitação enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
}