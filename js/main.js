/* ==========================================================================
   MAIN JAVASCRIPT - ECO TRACK
   ========================================================================== */

'use strict';

// ========================================
// DOM Elements
// ========================================

const header = document.querySelector('.header');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav__link');

// Demo tabs
const demoTabs = document.querySelectorAll('.demo-tab');
const demoPanels = document.querySelectorAll('.demo-panel');

// Pricing toggle
const pricingToggleBtns = document.querySelectorAll('.toggle-btn');
const monthlyPrices = document.querySelectorAll('.monthly-price');
const yearlyPrices = document.querySelectorAll('.yearly-price');

// ========================================
// Header Scroll Effect
// ========================================

let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ========================================
// Mobile Navigation
// ========================================

navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle?.classList.remove('active');
        navMenu?.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    if (navMenu?.classList.contains('active')) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// ========================================
// Active Navigation Link
// ========================================

const sections = document.querySelectorAll('section[id]');

const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -80% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// ========================================
// Smooth Scroll
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href === '#' || href === '') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Demo Tabs
// ========================================

demoTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetPanel = tab.getAttribute('data-tab');
        
        // Remove active class from all tabs and panels
        demoTabs.forEach(t => t.classList.remove('active'));
        demoPanels.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding panel
        tab.classList.add('active');
        document.getElementById(targetPanel)?.classList.add('active');
    });
});

// ========================================
// Pricing Toggle
// ========================================

pricingToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const plan = btn.getAttribute('data-plan');
        
        // Remove active class from all buttons
        pricingToggleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Toggle prices
        if (plan === 'monthly') {
            monthlyPrices.forEach(price => price.classList.remove('hidden'));
            yearlyPrices.forEach(price => price.classList.add('hidden'));
        } else {
            monthlyPrices.forEach(price => price.classList.add('hidden'));
            yearlyPrices.forEach(price => price.classList.remove('hidden'));
        }
    });
});

// ========================================
// Scroll Reveal Animation
// ========================================

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ========================================
// Counter Animation
// ========================================

const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
};

// Observe stats and animate when visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const numberElement = entry.target.querySelector('.stat__number, .stat-number');
            if (numberElement && !numberElement.dataset.animated) {
                const text = numberElement.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                
                if (!isNaN(number)) {
                    numberElement.dataset.animated = 'true';
                    animateCounter(numberElement, number);
                }
            }
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat, .stat-highlight').forEach(stat => {
    statsObserver.observe(stat);
});

// ========================================
// Particle Animation (Hero Section)
// ========================================

const createParticles = () => {
    const particlesContainer = document.querySelector('.hero__particles');
    if (!particlesContainer) return;
    
    // This is handled by CSS, but we could add JS particles here for more complexity
};

createParticles();

// ========================================
// Dashboard Cards Animation
// ========================================

const dashboardCards = document.querySelectorAll('.dashboard-card');

dashboardCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});

// ========================================
// Form Validation (if forms are added later)
// ========================================

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// ========================================
// Utility Functions
// ========================================

const debounce = (func, wait = 20) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const throttle = (func, limit = 20) => {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// ========================================
// Performance Optimization
// ========================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// Console Welcome Message
// ========================================

console.log(
    '%c🌍 Eco Track %c- Transformando consumo em economia e sustentabilidade',
    'color: #10B981; font-size: 20px; font-weight: bold;',
    'color: #3B82F6; font-size: 14px;'
);

console.log(
    '%cInteressado em trabalhar conosco? Envie seu currículo para carreiras@ecotrack.com.br',
    'color: #F59E0B; font-size: 12px; font-style: italic;'
);

// ========================================
// Page Load Animation
// ========================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ========================================
// Export functions for potential use in other scripts
// ========================================

window.EcoTrack = {
    debounce,
    throttle,
    validateEmail,
    animateCounter
};
