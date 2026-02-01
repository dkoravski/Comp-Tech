import { initializeHeader } from '../components/header.js';
import { initializeFooter } from '../components/footer.js';
import { Navigation } from '../utils/navigation.js';
import { teamData } from '../data/team.js';

// Initialize the about page
document.addEventListener('DOMContentLoaded', () => {
    // Initialize header and footer
    initializeHeader();
    initializeFooter();
    
    // Initialize navigation
    new Navigation();
    
    // Load team members
    loadTeamGrid();
    
    // Initialize page interactions
    initializeAboutPageInteractions();
});

function loadTeamGrid() {
    const teamGrid = document.getElementById('team-grid');
    if (teamGrid) {
        teamGrid.innerHTML = teamData.map(member => `
            <div class="col-md-6 col-lg-4">
                <div class="team-card text-center p-4 bg-white rounded shadow">
                    <div class="team-photo mb-3">
                        <div class="avatar-placeholder bg-primary text-white rounded-circle mx-auto d-flex align-items-center justify-content-center" style="width: 100px; height: 100px;">
                            <i class="bi bi-person fs-1"></i>
                        </div>
                    </div>
                    <h5 class="mb-1">${member.name}</h5>
                    <p class="text-primary mb-2">${member.position}</p>
                    <p class="text-muted small mb-3">${member.description}</p>
                    
                    <div class="team-skills mb-3">
                        ${member.skills.map(skill => `
                            <span class="badge bg-light text-dark me-1 mb-1">${skill}</span>
                        `).join('')}
                    </div>
                    
                    <div class="team-contact">
                        <a href="mailto:${member.email}" class="text-primary text-decoration-none me-3" title="Email">
                            <i class="bi bi-envelope"></i>
                        </a>
                        <a href="tel:${member.phone}" class="text-primary text-decoration-none" title="Phone">
                            <i class="bi bi-telephone"></i>
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function initializeAboutPageInteractions() {
    // Animate statistics counters
    animateCounters();
    
    // Add hover effects to team cards
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Animate team cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    });
    
    teamCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

function animateCounters() {
    const counters = [
        { element: document.querySelector('h3:contains("500+")'), target: 500, suffix: '+' },
        { element: document.querySelector('h3:contains("2000+")'), target: 2000, suffix: '+' }
    ];
    
    // Simple counter animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counterElements = entry.target.querySelectorAll('h3');
                counterElements.forEach((el, index) => {
                    if (el.textContent.includes('500+')) {
                        animateCounter(el, 500, '+');
                    } else if (el.textContent.includes('2000+')) {
                        animateCounter(el, 2000, '+');
                    } else if (el.textContent.includes('24/7')) {
                        // Keep as is for 24/7
                    }
                });
                observer.unobserve(entry.target);
            }
        });
    });
    
    const statsSection = document.querySelector('.d-flex.gap-3');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

function animateCounter(element, target, suffix = '') {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 20);
}