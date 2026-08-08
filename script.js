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

const translations = {
    en: {
        page_title: 'Yunxi - Student Portfolio',
        status: 'Learning by building',
        eyebrow: 'Soft Progress From a Little Kid',
        title: 'Little Space',
        description: "I'm an AI-assisted developer, crafting ideas into websites and digital products that work as good as they look.",
        cta_github: 'See my GitHub',
        contact_eyebrow: 'Find me online',
        contact_title: "Let's connect softly.",
        contact_desc: 'Whether you want to visit my code, send a message, or just say hello, these links are the easiest place to start.',
        social_github: 'GitHub',
        social_github_sub: 'Projects and experiments',
        social_discord: 'Discord',
        social_email: 'Email',
        social_email_sub: 'Send a note',
        footer: '© 2024 Yunxi. Still learning, still building.',
        menu_label: 'Menu',
        menu_title: 'Features',
        menu_projects: 'Projects',
        menu_notes: 'Notes',
        menu_gallery: 'Gallery',
        menu_guestbook: 'Guestbook',
        menu_coming: 'Coming soon',
        lang_label: 'Language'
    },
    id: {
        page_title: 'Yunxi - Portofolio Siswa',
        status: 'Belajar dengan membangun',
        eyebrow: 'Progres Halus Dari Anak Kecil',
        title: 'Ruang Kecil',
        description: 'Saya developer yang dibantu AI, mewujudkan ide menjadi website dan produk digital yang bekerja sama baiknya dengan tampilannya.',
        cta_github: 'Lihat GitHub Saya',
        contact_eyebrow: 'Temukan saya secara online',
        contact_title: 'Mari terhubung dengan santai.',
        contact_desc: 'Kalau mau lihat kode saya, kirim pesan, atau sekadar menyapa, tautan ini tempat paling gampang untuk memulai.',
        social_github: 'GitHub',
        social_github_sub: 'Proyek dan eksperimen',
        social_discord: 'Discord',
        social_email: 'Email',
        social_email_sub: 'Kirim pesan',
        footer: '© 2024 Yunxi. Masih belajar, masih membangun.',
        menu_label: 'Menu',
        menu_title: 'Fitur',
        menu_projects: 'Proyek',
        menu_notes: 'Catatan',
        menu_gallery: 'Galeri',
        menu_guestbook: 'Buku Tamu',
        menu_coming: 'Segera hadir',
        lang_label: 'Bahasa'
    },
    zh: {
        page_title: 'Yunxi - 学生作品集',
        status: '边做边学',
        eyebrow: '来自一个小孩子的柔软进步',
        title: '小空间',
        description: '我是借助 AI 的开发者,把想法转化为既好看又好用的网站与数字产品。',
        cta_github: '查看我的 GitHub',
        contact_eyebrow: '在网上找到我',
        contact_title: '轻轻地连接一下吧。',
        contact_desc: '无论你想看看我的代码、给我留言,还是打个招呼,这些链接都是最简单的起点。',
        social_github: 'GitHub',
        social_github_sub: '项目与实验',
        social_discord: 'Discord',
        social_email: '邮箱',
        social_email_sub: '发送一条消息',
        footer: '© 2024 Yunxi。仍在学习,仍在构建。',
        menu_label: '菜单',
        menu_title: '功能',
        menu_projects: '项目',
        menu_notes: '笔记',
        menu_gallery: '画廊',
        menu_guestbook: '留言簿',
        menu_coming: '即将推出',
        lang_label: '语言'
    },
    fr: {
        page_title: 'Yunxi - Portfolio Étudiant',
        status: 'Apprendre en construisant',
        eyebrow: "Les progrès doux d'un petit enfant",
        title: 'Petit Espace',
        description: "Je suis un développeur assisté par l'IA, qui transforme des idées en sites web et produits numériques aussi beaux que fonctionnels.",
        cta_github: 'Voir mon GitHub',
        contact_eyebrow: 'Retrouvez-moi en ligne',
        contact_title: 'Connectons-nous doucement.',
        contact_desc: 'Que tu veuilles voir mon code, m’envoyer un message, ou simplement dire bonjour, ces liens sont le meilleur point de départ.',
        social_github: 'GitHub',
        social_github_sub: 'Projets et expérimentations',
        social_discord: 'Discord',
        social_email: 'Email',
        social_email_sub: 'Envoyer un message',
        footer: '© 2024 Yunxi. Toujours apprendre, toujours construire.',
        menu_label: 'Menu',
        menu_title: 'Fonctionnalités',
        menu_projects: 'Projets',
        menu_notes: 'Notes',
        menu_gallery: 'Galerie',
        menu_guestbook: 'Livre d’or',
        menu_coming: 'Bientôt disponible',
        lang_label: 'Langue'
    }
};

const langToggle = document.getElementById('lang-toggle');
const langPanel = document.getElementById('lang-panel');
const langCurrent = document.getElementById('lang-current');
const langRoot = document.querySelector('[data-lang]');
const htmlLang = document.documentElement;

const supportedLangs = ['en', 'id', 'zh', 'fr'];
const langLabels = { en: 'EN', id: 'ID', zh: 'ZH', fr: 'FR' };
const STORAGE_KEY = 'yunxi.lang';

const getStoredLang = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return supportedLangs.includes(stored) ? stored : null;
    } catch (error) {
        return null;
    }
};

const setStoredLang = lang => {
    try {
        localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
    }
};

const applyLang = lang => {
    const bundle = translations[lang] || translations.en;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (bundle[key] !== undefined) {
            el.textContent = bundle[key];
        }
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria-label');
        if (bundle[key] !== undefined) {
            el.setAttribute('aria-label', bundle[key]);
        }
    });

    if (langCurrent) {
        langCurrent.textContent = langLabels[lang] || 'EN';
    }

    if (htmlLang) {
        htmlLang.setAttribute('lang', lang);
    }

    document.title = bundle.page_title || document.title;

    document.querySelectorAll('[data-lang-pick]').forEach(btn => {
        btn.setAttribute('aria-checked', btn.getAttribute('data-lang-pick') === lang ? 'true' : 'false');
    });

    setStoredLang(lang);
};

const initialLang = getStoredLang() || 'en';
applyLang(initialLang);

if (langToggle && langPanel) {
    const setLang = open => {
        langToggle.setAttribute('aria-expanded', String(open));
        langPanel.hidden = !open;
        if (open && menuToggle && menuPanel) {
            menuToggle.setAttribute('aria-expanded', 'false');
            menuPanel.hidden = true;
        }
    };

    langToggle.addEventListener('click', event => {
        event.stopPropagation();
        const isOpen = langToggle.getAttribute('aria-expanded') === 'true';
        setLang(!isOpen);
    });

    langPanel.addEventListener('click', event => {
        const pick = event.target.closest('[data-lang-pick]');
        if (!pick) {
            return;
        }
        const next = pick.getAttribute('data-lang-pick');
        if (translations[next]) {
            applyLang(next);
            setLang(false);
        }
    });

    document.addEventListener('click', event => {
        if (!langSwitcherContains(event.target)) {
            setLang(false);
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            setLang(false);
        }
    });
}

function langSwitcherContains(target) {
    if (!target || !langRoot) {
        return false;
    }
    return langRoot.contains(target);
}
