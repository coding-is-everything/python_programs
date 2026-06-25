// ===== GTA VI Fan Concept — Script =====

// Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1700);
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
});

// Trailer play button (opens YouTube trailer)
document.getElementById('playBtn').addEventListener('click', () => {
    const trailer = document.getElementById('trailerVideo');
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/QdBZY2UuoRQ?autoplay=1&rel=0';
    iframe.style.cssText = 'width:100%;height:100%;border:0;position:absolute;inset:0;';
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
    iframe.allowFullscreen = true;
    trailer.querySelector('.play-btn').style.display = 'none';
    trailer.querySelector('.trailer-overlay').style.display = 'none';
    trailer.appendChild(iframe);
});

// Scroll reveal
const revealEls = document.querySelectorAll(
    '.section-header, .character-card, .news-card, .world-stat, .world-visual, .edition, .trailer-frame'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// Animated counters
const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-count'));
            let count = 0;
            const step = Math.max(1, Math.ceil(target / 40));
            const timer = setInterval(() => {
                count += step;
                if (count >= target) {
                    count = target;
                    clearInterval(timer);
                }
                el.textContent = count;
            }, 30);
            counterObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

// Parallax sun on hero scroll
const sun = document.querySelector('.sun');
window.addEventListener('scroll', () => {
    if (sun && window.scrollY < window.innerHeight) {
        sun.style.transform = `translateX(-50%) translateY(${window.scrollY * 0.3}px)`;
    }
});
