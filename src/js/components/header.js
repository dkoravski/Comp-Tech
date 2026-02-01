export function createHeader() {
    return `
        <header class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
            <div class="container">
                <a class="navbar-brand fw-bold" href="/index.html">
                    <i class="bi bi-pc-display me-2"></i>CompTech
                </a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/index.html" data-page="home">
                                <i class="bi bi-house me-1"></i>Начало
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/services.html" data-page="services">
                                <i class="bi bi-gear me-1"></i>Услуги
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about.html" data-page="about">
                                <i class="bi bi-people me-1"></i>За нас
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact.html" data-page="contact">
                                <i class="bi bi-envelope me-1"></i>Контакти
                            </a>
                        </li>
                    </ul>
                    
                    <div class="d-flex align-items-center gap-3">
                        <div class="contact-info d-none d-lg-flex align-items-center text-light">
                            <i class="bi bi-telephone me-2"></i>
                            <span>+359 2 123 4567</span>
                        </div>
                        <a href="/contact.html" class="btn btn-light btn-sm">
                            <i class="bi bi-chat-dots me-1"></i>Получете оферта
                        </a>
                    </div>
                </div>
            </div>
        </header>
    `;
}

export function initializeHeader() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = createHeader();
        highlightActiveNavItem();
    }
}

function highlightActiveNavItem() {
    const currentPage = getCurrentPageName();
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

function getCurrentPageName() {
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