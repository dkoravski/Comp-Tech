export class Navigation {
    constructor() {
        this.currentPage = this.getCurrentPageName();
        this.initializeNavigation();
    }

    getCurrentPageName() {
        const path = window.location.pathname;
        const fileName = path.split('/').pop() || 'index.html';
        
        switch (fileName) {
            case 'index.html':
            case '':
                return 'home';
            case 'services.html':
                return 'services';
            case 'about.html':
                return 'about';
            case 'contact.html':
                return 'contact';
            default:
                return 'home';
        }
    }

    initializeNavigation() {
        // Handle smooth scrolling for anchor links
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (link) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });

        // Handle external service links (from footer)
        this.handleServiceLinks();
    }

    handleServiceLinks() {
        const serviceLinks = document.querySelectorAll('a[href*="services.html#"]');
        serviceLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                const [page, anchor] = href.split('#');
                
                if (this.currentPage !== 'services') {
                    // If not on services page, navigate there first
                    window.location.href = href;
                } else {
                    // If already on services page, just scroll to anchor
                    e.preventDefault();
                    const targetElement = document.getElementById(anchor);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    // Utility method to highlight active navigation items
    static highlightActiveNavItem() {
        const currentPage = new Navigation().getCurrentPageName();
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        
        navLinks.forEach(link => {
            const pageName = link.getAttribute('data-page');
            if (pageName === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Method to handle page transitions
    static navigateToPage(pageName) {
        const pageMap = {
            'home': '/index.html',
            'services': '/services.html',
            'about': '/about.html',
            'contact': '/contact.html'
        };

        const url = pageMap[pageName];
        if (url) {
            window.location.href = url;
        }
    }
}

// Export utility functions
export function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

export function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}