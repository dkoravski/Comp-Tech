import { initializeHeader } from '../components/header.js';
import { initializeFooter } from '../components/footer.js';
import { Navigation } from '../utils/navigation.js';
import { ContactForm } from '../components/ContactForm.js';

// Initialize the contact page
document.addEventListener('DOMContentLoaded', () => {
    // Initialize header and footer
    initializeHeader();
    initializeFooter();
    
    // Initialize navigation
    new Navigation();
    
    // Initialize contact form
    initializeContactForm();
    
    // Pre-fill service if specified in URL
    prefillServiceFromURL();
    
    // Initialize page interactions
    initializeContactPageInteractions();
});

function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const formHandler = new ContactForm(contactForm);
        formHandler.initialize();
    }
}

function prefillServiceFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    
    if (service) {
        const serviceSelect = document.getElementById('serviceType');
        if (serviceSelect) {
            // Map service IDs to select options
            const serviceMap = {
                'computer-repair': 'computer-repair',
                'network-setup': 'network-setup',
                'software-install': 'software-install',
                'data-recovery': 'data-recovery',
                'it-support': 'it-support'
            };
            
            const mappedService = serviceMap[service];
            if (mappedService) {
                serviceSelect.value = mappedService;
            }
        }
    }
}

function initializeContactPageInteractions() {
    // Add interactive effects to contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(5px)';
            item.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });
    
    // Make phone numbers and email addresses clickable
    enhanceContactInfo();
    
    // Animate form on load
    animateForm();
}

function enhanceContactInfo() {
    // Make phone numbers clickable
    const phoneElements = document.querySelectorAll('.contact-item:has(.bi-telephone)');
    phoneElements.forEach(element => {
        const phoneText = element.textContent;
        const phoneNumbers = phoneText.match(/\+359 \d+ \d+ \d+/g);
        if (phoneNumbers) {
            phoneNumbers.forEach(phone => {
                const phoneLink = `<a href="tel:${phone.replace(/\s/g, '')}" class="text-decoration-none">${phone}</a>`;
                element.innerHTML = element.innerHTML.replace(phone, phoneLink);
            });
        }
    });
    
    // Make email addresses clickable
    const emailElements = document.querySelectorAll('.contact-item:has(.bi-envelope)');
    emailElements.forEach(element => {
        const emailText = element.textContent;
        const emails = emailText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
        if (emails) {
            emails.forEach(email => {
                const emailLink = `<a href="mailto:${email}" class="text-decoration-none">${email}</a>`;
                element.innerHTML = element.innerHTML.replace(email, emailLink);
            });
        }
    });
}

function animateForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.style.opacity = '0';
        form.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            form.style.transition = 'all 0.8s ease';
            form.style.opacity = '1';
            form.style.transform = 'translateY(0)';
        }, 200);
    }
    
    const contactInfo = document.querySelector('.col-lg-4');
    if (contactInfo) {
        contactInfo.style.opacity = '0';
        contactInfo.style.transform = 'translateX(20px)';
        
        setTimeout(() => {
            contactInfo.style.transition = 'all 0.8s ease';
            contactInfo.style.opacity = '1';
            contactInfo.style.transform = 'translateX(0)';
        }, 400);
    }
}