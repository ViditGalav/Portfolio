// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Writing Section Data and Functionality
let writingData = null;
let currentCarouselIndex = 0;

// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const skillBars = document.querySelectorAll('.skill-bar');
const sections = document.querySelectorAll('section');
const titleItems = document.querySelectorAll('.title-item');

// Rotating Titles Animation
let currentTitleIndex = 0;
const totalTitles = titleItems.length;

function rotateTitles() {
    // Remove active class from current title
    titleItems[currentTitleIndex].classList.remove('active');
    
    // Move to next title
    currentTitleIndex = (currentTitleIndex + 1) % totalTitles;
    
    // Add active class to new title
    titleItems[currentTitleIndex].classList.add('active');
}

// Start rotating titles every 3 seconds
if (titleItems.length > 0) {
    setInterval(rotateTitles, 3000);
}

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Particle Animation
class ParticleAnimation {
    constructor() {
        this.canvas = document.getElementById('particles');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 100;
        
        this.resize();
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    init() {
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize particle animation
new ParticleAnimation();

// GSAP Animations
const initAnimations = () => {
    // Hero Section Animations
    gsap.from('.hero-title .title-line', {
        duration: 1.2,
        y: 100,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.2
    });
    
    gsap.from('.hero-title .title-subtitle', {
        duration: 1.2,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.4
    });
    
    gsap.from('.hero-description', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.6
    });
    
    gsap.from('.hero-stats .stat', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.8,
        stagger: 0.1
    });
    
    gsap.from('.hero-cta .btn', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 1,
        stagger: 0.1
    });
    
    gsap.from('.block', {
        duration: 1,
        scale: 0,
        opacity: 0,
        ease: 'back.out(1.7)',
        delay: 1.2,
        stagger: 0.1
    });
    
    // About Section Animations
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        x: -50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.profile-card', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        x: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.2
    });
    
    // Experience Timeline Animations
    gsap.from('.timeline-item', {
        scrollTrigger: {
            trigger: '.experience',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.2
    });
    
    // Certifications Animations
    gsap.from('.cert-card', {
        scrollTrigger: {
            trigger: '.certifications',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.1
    });
    
    // Projects Animations
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.1
    });
    
    // Skills Animations
    gsap.from('.skill-item', {
        scrollTrigger: {
            trigger: '.skills',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.05
    });
    
    // Contact Animations
    gsap.from('.contact-item', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.1
    });
    
    gsap.from('.social-link', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        x: 30,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.1,
        delay: 0.2
    });
};

// Skill Bars Animation
const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        
        ScrollTrigger.create({
            trigger: bar,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(bar, {
                    duration: 1.5,
                    width: `${level}%`,
                    ease: 'power2.out'
                });
            }
        });
    });
};

// Counter Animation
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const isPercentage = target.includes('%');
        const isPlus = target.includes('+');
        const numericValue = parseInt(target.replace(/[^\d]/g, ''));
        
        ScrollTrigger.create({
            trigger: counter,
            start: 'top 80%',
            onEnter: () => {
                gsap.fromTo(counter, 
                    { textContent: 0 },
                    {
                        duration: 2,
                        textContent: numericValue,
                        ease: 'power2.out',
                        snap: { textContent: 1 },
                        onUpdate: function() {
                            let value = Math.ceil(this.targets()[0].textContent);
                            if (isPercentage) {
                                counter.textContent = value + '%';
                            } else if (isPlus) {
                                counter.textContent = value + '+';
                            } else {
                                counter.textContent = value;
                            }
                        }
                    }
                );
            }
        });
    });
};

// Parallax Effect
const initParallax = () => {
    gsap.to('.hero-background', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        y: 100,
        ease: 'none'
    });
};

// Text Typing Effect
class TypeWriter {
    constructor(element, text, speed = 100) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.currentIndex = 0;
        this.isTyping = false;
    }
    
    start() {
        if (this.isTyping) return;
        
        this.isTyping = true;
        this.element.textContent = '';
        this.currentIndex = 0;
        this.type();
    }
    
    type() {
        if (this.currentIndex < this.text.length) {
            this.element.textContent += this.text.charAt(this.currentIndex);
            this.currentIndex++;
            setTimeout(() => this.type(), this.speed);
        } else {
            this.isTyping = false;
        }
    }
}

// Initialize typing effect for hero description
const initTypingEffect = () => {
    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) {
        const originalText = heroDescription.textContent;
        const typeWriter = new TypeWriter(heroDescription, originalText, 50);
        
        // Start typing after hero animations
        setTimeout(() => {
            typeWriter.start();
        }, 2000);
    }
};

// Intersection Observer for fade-in animations
const initIntersectionObserver = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach(el => {
        observer.observe(el);
    });
};

// Smooth reveal animations for sections
const initSectionReveals = () => {
    sections.forEach(section => {
        gsap.fromTo(section, 
            {
                opacity: 0,
                y: 50
            },
            {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 85%',
                    end: 'bottom 15%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out'
            }
        );
    });
};

// Hover effects for interactive elements
const initHoverEffects = () => {
    // Project cards hover effect
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.3,
                scale: 1.02,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });
    
    // Certification cards hover effect
    document.querySelectorAll('.cert-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.3,
                scale: 1.05,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });
    
    // Skill items hover effect
    document.querySelectorAll('.skill-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                duration: 0.3,
                scale: 1.02,
                ease: 'power2.out'
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });
};

// Loading animation
const initLoadingAnimation = () => {
    gsap.to('.hero-content', {
        duration: 0.5,
        opacity: 1,
        ease: 'power2.out',
        delay: 0.1
    });
};

// Cursor trail effect
class CursorTrail {
    constructor() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'cursor-trail';
        this.cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.7;
            transform: translate(-50%, -50%);
            transition: width 0.3s, height 0.3s;
        `;
        document.body.appendChild(this.cursor);
        
        this.init();
    }
    
    init() {
        document.addEventListener('mousemove', (e) => {
            gsap.to(this.cursor, {
                duration: 0.1,
                x: e.clientX,
                y: e.clientY,
                ease: 'power2.out'
            });
        });
        
        // Expand cursor on hover over interactive elements
        document.querySelectorAll('a, button, .project-card, .cert-card, .skill-item').forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(this.cursor, {
                    duration: 0.3,
                    width: '40px',
                    height: '40px',
                    ease: 'power2.out'
                });
            });
            
            el.addEventListener('mouseleave', () => {
                gsap.to(this.cursor, {
                    duration: 0.3,
                    width: '20px',
                    height: '20px',
                    ease: 'power2.out'
                });
            });
        });
    }
}

// Initialize all animations and effects
document.addEventListener('DOMContentLoaded', () => {
    // Show content immediately and ensure visibility
    gsap.set('.hero-content', { opacity: 1 });
    gsap.set('.fade-in, .slide-in-left, .slide-in-right, .scale-in', { opacity: 1, transform: 'none' });
    
    // Initialize basic features only to avoid hiding content
    initLoadingAnimation();
    // initAnimations(); // Commented out to prevent hiding content
    animateSkillBars(); // Enable skill bar animations
    animateCounters(); // Enable counter animations
    // initParallax(); // Commented out to prevent hiding content
    // initTypingEffect(); // Commented out to prevent hiding content
    // initIntersectionObserver(); // Commented out to prevent hiding content
    // initSectionReveals(); // Commented out to prevent hiding content
    initHoverEffects();
    
    // Initialize cursor trail (optional - can be disabled for performance)
    // new CursorTrail();
    
    // Add animation classes to elements but ensure they're visible
    document.querySelectorAll('.section-header').forEach(el => {
        el.classList.add('fade-in');
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
    
    document.querySelectorAll('.about-text').forEach(el => {
        el.classList.add('slide-in-left');
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
    
    document.querySelectorAll('.profile-card').forEach(el => {
        el.classList.add('slide-in-right');
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
    
    document.querySelectorAll('.timeline-item').forEach(el => {
        el.classList.add('fade-in');
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
    
    document.querySelectorAll('.cert-card').forEach(el => {
        el.classList.add('scale-in');
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
    
    document.querySelectorAll('.project-card').forEach(el => {
        el.classList.add('fade-in');
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
    
    document.querySelectorAll('.skill-item').forEach(el => {
        el.classList.add('fade-in');
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
    
    document.querySelectorAll('.contact-item').forEach(el => {
        el.classList.add('slide-in-left');
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
    
    document.querySelectorAll('.social-link').forEach(el => {
        el.classList.add('slide-in-right');
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
    
    // Do not force global visibility; rotation logic controls visibility per title
});

// Performance optimization: Pause animations when tab is not visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        gsap.globalTimeline.pause();
    } else {
        gsap.globalTimeline.resume();
    }
});

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScrollPolyfill = () => {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const targetPosition = targetElement.offsetTop - 70;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };
    
    smoothScrollPolyfill();
}

// Add loading state to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.classList.contains('btn-primary')) {
            const originalText = this.textContent;
            this.innerHTML = '<span class="loading"></span> Loading...';
            
            setTimeout(() => {
                this.textContent = originalText;
            }, 2000);
        }
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll function for buttons
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Create email content
            const emailContent = `
                Name: ${name}
                Email: ${email}
                Subject: ${subject}
                Message: ${message}
            `;
            
            // For now, we'll use mailto link (you can integrate with a backend service later)
            const mailtoLink = `mailto:geekviditweb3@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;
            
            // Show success message
            showNotification('Message sent successfully! Redirecting to email...', 'success');
            
            // Open email client
            setTimeout(() => {
                window.open(mailtoLink, '_blank');
            }, 1500);
            
            // Reset form
            contactForm.reset();
        });
    }
});

// Notification function
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #3b82f6, #1d4ed8)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// Writing Section Functionality
async function loadWritingData() {
    try {
        const response = await fetch('writing-data.json');
        writingData = await response.json();
        populateWritingSection();
    } catch (error) {
        console.error('Error loading writing data:', error);
        // Fallback: show placeholder content
        showWritingFallback();
    }
}

function populateWritingSection() {
    if (!writingData || !writingData.articles) return;
    
    // Get top 5-6 articles (mix of featured and popular)
    const topArticles = writingData.articles
        .sort((a, b) => {
            // Sort by featured first, then by metrics
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return (b.metrics?.claps || 0) - (a.metrics?.claps || 0);
        })
        .slice(0, 6);
    
    // Populate compact carousel
    populateCompactCarousel(topArticles);
}

function populateCompactCarousel(articles) {
    const compactTrack = document.getElementById('compactArticlesTrack');
    if (!compactTrack) return;
    
    compactTrack.innerHTML = '';
    
    articles.forEach(article => {
        const compactTile = createCompactArticleTile(article);
        compactTrack.appendChild(compactTile);
    });
    
    // Initialize compact carousel navigation
    initializeCompactCarousel();
}

function createCompactArticleTile(article) {
    const tile = document.createElement('div');
    tile.className = 'compact-article-tile';
    
    const publishedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
    });
    
    tile.innerHTML = `
        <div class="compact-tile-content">
            <h4 class="compact-tile-title">${article.title}</h4>
            <a href="https://medium.com/@ViditWeb3?utm_source=portfolio&utm_medium=website&utm_campaign=writing" 
               class="compact-tile-link" 
               target="_blank" 
               rel="noopener noreferrer"
               onclick="trackWritingClick('${article.id}')">
                Read on Medium <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    `;
    
    return tile;
}

function initializeCompactCarousel() {
    const compactTrack = document.getElementById('compactArticlesTrack');
    const prevBtn = document.querySelector('.compact-nav.prev');
    const nextBtn = document.querySelector('.compact-nav.next');
    
    if (!compactTrack || !prevBtn || !nextBtn) return;
    
    const totalTiles = compactTrack.children.length;
    if (totalTiles === 0) return;
    
    const tileWidth = 300 + 32; // 300px tile + 32px gap
    const visibleTiles = 3; // Always show 3 tiles
    const maxIndex = Math.max(0, totalTiles - visibleTiles);
    
    function updateCompactCarousel() {
        const translateX = -currentCarouselIndex * tileWidth;
        compactTrack.style.transform = `translateX(${translateX}px)`;
        
        prevBtn.style.opacity = currentCarouselIndex === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentCarouselIndex >= maxIndex ? '0.5' : '1';
    }
    
    prevBtn.addEventListener('click', () => {
        if (currentCarouselIndex > 0) {
            currentCarouselIndex--;
            updateCompactCarousel();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentCarouselIndex < maxIndex) {
            currentCarouselIndex++;
            updateCompactCarousel();
        }
    });
    
    // Initialize
    updateCompactCarousel();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        const newVisibleTiles = 3; // Always 3 tiles
        const newMaxIndex = Math.max(0, totalTiles - newVisibleTiles);
        if (currentCarouselIndex > newMaxIndex) {
            currentCarouselIndex = newMaxIndex;
        }
        updateCompactCarousel();
    });
}

function trackWritingClick(articleId) {
    // Track analytics event
    if (typeof gtag !== 'undefined') {
        gtag('event', 'writing_click', {
            'article_id': articleId,
            'event_category': 'Writing',
            'event_label': 'Medium Article'
        });
    }
    
    // Track with other analytics if available
    console.log(`Writing click tracked: ${articleId}`);
}

function showWritingFallback() {
    const compactTrack = document.getElementById('compactArticlesTrack');
    
    if (compactTrack) {
        compactTrack.innerHTML = `
            <div class="compact-article-tile" style="text-align: center;">
                <div class="compact-tile-content" style="justify-content: center;">
                    <h4>Loading Writing Content...</h4>
                    <p>Please refresh the page to view my latest articles.</p>
                </div>
            </div>
        `;
    }
}

// Load writing data when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadWritingData();
});

// Console welcome message
console.log(`
%c🚀 Welcome to Vidit Galav's Portfolio! 🚀
%c
%cBlockchain Developer & CTO
%cExpert in Ethereum, Solana, and DeFi protocols
%c
%cLet's build the future of Web3 together! 🌐
`, 
'color: #6366f1; font-size: 20px; font-weight: bold;',
'',
'color: #10b981; font-size: 16px; font-weight: bold;',
'color: #f59e0b; font-size: 14px;',
'color: #8b5cf6; font-size: 14px;',
'color: #6366f1; font-size: 12px;'
);
