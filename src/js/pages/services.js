import { initializeHeader } from '../components/header.js';
import { initializeFooter } from '../components/footer.js';
import { Navigation } from '../utils/navigation.js';
import { servicesData } from '../data/services.js';

// Initialize the services page
document.addEventListener('DOMContentLoaded', () => {
    // Initialize header and footer
    initializeHeader();
    initializeFooter();
    
    // Initialize navigation
    new Navigation();
    
    // Load services grid
    loadServicesGrid();
    
    // Handle anchor navigation from URL
    handleAnchorNavigation();
    
    // Initialize page interactions
    initializeServicesPageInteractions();
});

function loadServicesGrid() {
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid) {
        servicesGrid.innerHTML = servicesData.map(service => `
            <div class="col-lg-6 col-xl-4" id="${service.id}">
                <div class="service-card h-100 p-4 bg-white rounded shadow">
                    <div class="d-flex align-items-center mb-3">
                        <i class="${service.icon} fs-1 text-primary me-3"></i>
                        <h3 class="mb-0">${service.title}</h3>
                    </div>
                    <p class="text-muted mb-3">${service.description}</p>
                    
                    <div class="service-features mb-3">
                        <h6>Какво включва:</h6>
                        <ul class="list-unstyled">
                            ${service.features.map(feature => `
                                <li class="mb-1">
                                    <i class="bi bi-check-circle text-success me-2"></i>${feature}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <div class="service-pricing mb-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="h5 text-primary mb-0">От ${service.startingPrice}</span>
                            <span class="badge bg-light text-dark">${service.duration}</span>
                        </div>
                    </div>
                    
                    <div class="d-grid">
                        <a href="/contact.html?service=${service.id}" class="btn btn-primary">
                            <i class="bi bi-calendar-check me-2"></i>Резервирай услуга
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function handleAnchorNavigation() {
    // Check if there's a hash in the URL
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                
                // Highlight the target service
                targetElement.classList.add('highlight-service');
                setTimeout(() => {
                    targetElement.classList.remove('highlight-service');
                }, 3000);
            }
        }, 500);
    }
}

function initializeServicesPageInteractions() {
    // Add hover effects to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-3px)';
            card.style.transition = 'transform 0.3s ease';
            card.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '';
        });
    });
    
    // Animate service cards on load
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    });
    
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}