/* ==========================================================================
   ANIMATIONS - ECO TRACK
   Advanced animations and interactive effects
   ========================================================================== */

'use strict';

// ========================================
// Cursor Trail Effect
// ========================================

class CursorTrail {
    constructor() {
        this.coords = [];
        this.maxTrails = 10;
        this.init();
    }
    
    init() {
        // Only on desktop
        if (window.innerWidth < 768) return;
        
        document.addEventListener('mousemove', (e) => {
            this.coords.push({ x: e.clientX, y: e.clientY });
            
            if (this.coords.length > this.maxTrails) {
                this.coords.shift();
            }
            
            this.render();
        });
    }
    
    render() {
        // Custom cursor trail rendering could be added here
    }
}

// ========================================
// Parallax Effect
// ========================================

class ParallaxEffect {
    constructor() {
        this.elements = document.querySelectorAll('[data-parallax]');
        this.init();
    }
    
    init() {
        if (this.elements.length === 0) return;
        
        window.addEventListener('scroll', () => this.update(), { passive: true });
        this.update();
    }
    
    update() {
        const scrolled = window.pageYOffset;
        
        this.elements.forEach(element => {
            const speed = element.dataset.parallax || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
}

// ========================================
// Magnetic Button Effect
// ========================================

class MagneticButton {
    constructor(selector) {
        this.buttons = document.querySelectorAll(selector);
        this.init();
    }
    
    init() {
        this.buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0)';
            });
        });
    }
}

// ========================================
// Typing Effect
// ========================================

class TypingEffect {
    constructor(element, texts, typingSpeed = 100, deletingSpeed = 50, delay = 2000) {
        this.element = element;
        this.texts = texts;
        this.typingSpeed = typingSpeed;
        this.deletingSpeed = deletingSpeed;
        this.delay = delay;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        
        if (this.element) {
            this.type();
        }
    }
    
    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }
        
        let speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
        
        if (!this.isDeleting && this.charIndex === currentText.length) {
            speed = this.delay;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
        }
        
        setTimeout(() => this.type(), speed);
    }
}

// ========================================
// Card Tilt Effect
// ========================================

class TiltEffect {
    constructor(selector) {
        this.cards = document.querySelectorAll(selector);
        this.init();
    }
    
    init() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
    }
}

// ========================================
// Number Counter with Easing
// ========================================

class EasingCounter {
    constructor(element, target, duration = 2000) {
        this.element = element;
        this.target = target;
        this.duration = duration;
        this.startTime = null;
    }
    
    easeOutQuart(t) {
        return 1 - Math.pow(1 - t, 4);
    }
    
    animate(currentTime) {
        if (!this.startTime) this.startTime = currentTime;
        
        const elapsed = currentTime - this.startTime;
        const progress = Math.min(elapsed / this.duration, 1);
        const easedProgress = this.easeOutQuart(progress);
        
        const current = Math.floor(easedProgress * this.target);
        this.element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame((time) => this.animate(time));
        } else {
            this.element.textContent = this.target.toLocaleString();
        }
    }
    
    start() {
        requestAnimationFrame((time) => this.animate(time));
    }
}

// ========================================
// Ripple Effect
// ========================================

class RippleEffect {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
        this.init();
    }
    
    init() {
        this.elements.forEach(element => {
            element.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = element.getBoundingClientRect();
                
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = `${size}px`;
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                ripple.classList.add('ripple');
                
                element.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }
}

// Add ripple CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ========================================
// Scroll Progress Bar
// ========================================

class ScrollProgress {
    constructor() {
        this.createProgressBar();
        this.init();
    }
    
    createProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.id = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #10B981, #3B82F6);
            z-index: 9999;
            transition: width 0.1s ease-out;
        `;
        document.body.appendChild(progressBar);
        this.progressBar = progressBar;
    }
    
    init() {
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.pageYOffset / windowHeight) * 100;
            this.progressBar.style.width = `${scrolled}%`;
        }, { passive: true });
    }
}

// ========================================
// Background Gradient Animation
// ========================================

class GradientAnimation {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
        this.init();
    }
    
    init() {
        this.elements.forEach(element => {
            let hue = 0;
            
            setInterval(() => {
                hue = (hue + 1) % 360;
                element.style.background = `linear-gradient(135deg, 
                    hsl(${hue}, 70%, 50%), 
                    hsl(${(hue + 60) % 360}, 70%, 50%)
                )`;
            }, 50);
        });
    }
}

// ========================================
// Floating Elements
// ========================================

class FloatingElements {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
        this.init();
    }
    
    init() {
        this.elements.forEach((element, index) => {
            const duration = 3000 + (index * 500);
            const delay = index * 200;
            
            element.style.animation = `float ${duration}ms ease-in-out ${delay}ms infinite`;
        });
    }
}

// ========================================
// Initialize All Effects
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Cursor trail (desktop only)
    new CursorTrail();
    
    // Parallax effect
    new ParallaxEffect();
    
    // Magnetic buttons
    new MagneticButton('.btn--primary');
    
    // Card tilt effect
    new TiltEffect('.pricing-card, .feature-card, .value-card');
    
    // Ripple effect on buttons
    new RippleEffect('.btn');
    
    // Scroll progress bar
    new ScrollProgress();
    
    // Floating elements
    new FloatingElements('.feature-icon, .value-icon');
});

// ========================================
// Mouse Move Parallax for Hero
// ========================================

const heroVisual = document.querySelector('.hero__visual');

if (heroVisual && window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPos = (clientX / innerWidth - 0.5) * 20;
        const yPos = (clientY / innerHeight - 0.5) * 20;
        
        heroVisual.style.transform = `
            translate(${xPos}px, ${yPos}px) 
            rotateY(${xPos * 0.5}deg) 
            rotateX(${-yPos * 0.5}deg)
        `;
    });
}

// ========================================
// Animate Charts on Scroll
// ========================================

const chartBars = document.querySelectorAll('.bar');
const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'growUp 0.8s ease-out forwards';
            chartObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

chartBars.forEach(bar => chartObserver.observe(bar));

// ========================================
// Console Art
// ========================================

console.log(`
    ███████╗ ██████╗ ██████╗     ████████╗██████╗  █████╗  ██████╗██╗  ██╗
    ██╔════╝██╔════╝██╔═══██╗    ╚══██╔══╝██╔══██╗██╔══██╗██╔════╝██║ ██╔╝
    █████╗  ██║     ██║   ██║       ██║   ██████╔╝███████║██║     █████╔╝ 
    ██╔══╝  ██║     ██║   ██║       ██║   ██╔══██╗██╔══██║██║     ██╔═██╗ 
    ███████╗╚██████╗╚██████╔╝       ██║   ██║  ██║██║  ██║╚██████╗██║  ██╗
    ╚══════╝ ╚═════╝ ╚═════╝        ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
`);

// ========================================
// Export Classes
// ========================================

window.EcoTrackAnimations = {
    CursorTrail,
    ParallaxEffect,
    MagneticButton,
    TypingEffect,
    TiltEffect,
    EasingCounter,
    RippleEffect,
    ScrollProgress,
    GradientAnimation,
    FloatingElements
};
