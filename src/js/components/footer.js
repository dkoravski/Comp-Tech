export function createFooter() {
    return `
        <footer class="bg-dark text-light py-5">
            <div class="container">
                <div class="row g-4">
                    <!-- Company Info -->
                    <div class="col-lg-4">
                        <h5 class="mb-3">
                            <i class="bi bi-pc-display me-2"></i>CompTech
                        </h5>
                        <p class="mb-3">
                            Професионални ИТ услуги и компютърна поддръжка за бизнеси и частни клиенти. 
                            Вашият доверен технологичен партньор от 2015 г.
                        </p>
                        <div class="social-links">
                            <a href="#" class="text-light me-3" title="Фейсбук">
                                <i class="bi bi-facebook fs-5"></i>
                            </a>
                            <a href="#" class="text-light me-3" title="LinkedIn">
                                <i class="bi bi-linkedin fs-5"></i>
                            </a>
                            <a href="#" class="text-light me-3" title="Туитър">
                                <i class="bi bi-twitter fs-5"></i>
                            </a>
                            <a href="#" class="text-light" title="Инстаграм">
                                <i class="bi bi-instagram fs-5"></i>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Quick Links -->
                    <div class="col-lg-2 col-md-6">
                        <h6 class="mb-3">Бързи връзки</h6>
                        <ul class="list-unstyled">
                            <li class="mb-2">
                                <a href="/index.html" class="text-light text-decoration-none">Начало</a>
                            </li>
                            <li class="mb-2">
                                <a href="/services.html" class="text-light text-decoration-none">Услуги</a>
                            </li>
                            <li class="mb-2">
                                <a href="/about.html" class="text-light text-decoration-none">За нас</a>
                            </li>
                            <li class="mb-2">
                                <a href="/contact.html" class="text-light text-decoration-none">Контакти</a>
                            </li>
                        </ul>
                    </div>
                    
                    <!-- Services -->
                    <div class="col-lg-3 col-md-6">
                        <h6 class="mb-3">Нашите услуги</h6>
                        <ul class="list-unstyled">
                            <li class="mb-2">
                                <a href="/services.html#computer-repair" class="text-light text-decoration-none">Ремонт на компютри</a>
                            </li>
                            <li class="mb-2">
                                <a href="/services.html#network-setup" class="text-light text-decoration-none">Настройка на мрежа</a>
                            </li>
                            <li class="mb-2">
                                <a href="/services.html#software-install" class="text-light text-decoration-none">Инсталация на софтуер</a>
                            </li>
                            <li class="mb-2">
                                <a href="/services.html#data-recovery" class="text-light text-decoration-none">Възстановяване на данни</a>
                            </li>
                            <li class="mb-2">
                                <a href="/services.html#it-support" class="text-light text-decoration-none">ИТ поддръжка</a>
                            </li>
                        </ul>
                    </div>
                    
                    <!-- Contact Info -->
                    <div class="col-lg-3 col-md-6">
                        <h6 class="mb-3">Контакти</h6>
                        <div class="contact-item mb-2">
                            <i class="bi bi-geo-alt me-2"></i>
                            ул. Тех 123, София, България 1000
                        </div>
                        <div class="contact-item mb-2">
                            <i class="bi bi-telephone me-2"></i>
                            +359 2 123 4567
                        </div>
                        <div class="contact-item mb-2">
                            <i class="bi bi-envelope me-2"></i>
                            info@comptech.bg
                        </div>
                        <div class="contact-item">
                            <i class="bi bi-clock me-2"></i>
                            Пн–Пт: 8:00–18:00
                        </div>
                    </div>
                </div>
                
                <!-- Bottom Bar -->
                <hr class="my-4">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <p class="mb-0">&copy; 2026 CompTech. Всички права запазени.</p>
                    </div>
                    <div class="col-md-6 text-md-end">
                        <div class="footer-links">
                            <a href="#" class="text-light text-decoration-none me-3">Политика за поверителност</a>
                            <a href="#" class="text-light text-decoration-none me-3">Условия за ползване</a>
                            <a href="#" class="text-light text-decoration-none">Карта на сайта</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
        <!-- Back to Top Button -->
        <button id="back-to-top" class="btn btn-primary position-fixed bottom-0 end-0 m-3" style="display: none;" title="Към началото">
            <i class="bi bi-arrow-up"></i>
        </button>
    `;
}

export function initializeFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = createFooter();
        initializeBackToTop();
    }
}

function initializeBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });
        
        // Scroll to top when clicked
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}