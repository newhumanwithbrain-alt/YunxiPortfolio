const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const menuToggle = document.getElementById('menu-toggle');
const menuPanel = document.getElementById('menu-panel');

if (menuToggle && menuPanel) {
    const setMenu = open => {
        menuToggle.setAttribute('aria-expanded', String(open));
        menuPanel.hidden = !open;
    };

    menuToggle.addEventListener('click', () => {
        setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
    });

    document.addEventListener('click', event => {
        if (!menuToggle.contains(event.target) && !menuPanel.contains(event.target)) {
            setMenu(false);
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            setMenu(false);
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
        const target = document.querySelector(anchor.getAttribute('href'));

        if (!target) {
            return;
        }

        event.preventDefault();
        target.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
            block: 'start'
        });
    });
});

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    document.body.classList.add('js-enabled');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.14,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach(section => {
        observer.observe(section);
    });
} else {
    document.querySelectorAll('.reveal').forEach(section => {
        section.classList.add('is-visible');
    });
}
