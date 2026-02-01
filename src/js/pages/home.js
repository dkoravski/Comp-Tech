import { initializeHeader } from '../components/header.js';
import { initializeFooter } from '../components/footer.js';
import { Navigation } from '../utils/navigation.js';
import { servicesData } from '../data/services.js';

// Initialize the home page
document.addEventListener('DOMContentLoaded', () => {
    // Initialize header and footer
    initializeHeader();
    initializeFooter();
    
    // Initialize navigation
    new Navigation();
    
    // Load services preview
    loadServicesPreview();
    
    // Initialize animations and interactions
    initializeHomePageInteractions();
});

function loadServicesPreview() {
    const servicesPreview = document.getElementById('services-preview');
    if (servicesPreview) {
        // Show first 3 services as preview
        const previewServices = servicesData.slice(0, 3);
        
        servicesPreview.innerHTML = previewServices.map(service => `
            <div class="col-md-4">
                <div class="service-card h-100 p-4 bg-white rounded shadow-sm">
                    <div class="text-center mb-3">
                        <i class="${service.icon} display-4 text-primary"></i>
                    </div>
                    <h4 class="text-center mb-3">${service.title}</h4>
                    <p class="text-muted text-center mb-3">${service.shortDescription}</p>
                    <div class="text-center">
                        <a href="/services.html#${service.id}" class="btn btn-outline-primary">
                            Научете повече <i class="bi bi-arrow-right ms-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function initializeHomePageInteractions() {
    // Add smooth hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Animate hero section on load
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroSection.style.transition = 'all 0.8s ease';
            heroSection.style.opacity = '1';
            heroSection.style.transform = 'translateY(0)';
        }, 100);
    }
}