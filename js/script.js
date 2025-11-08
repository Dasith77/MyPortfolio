// =============== Loading Animation ===================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        // Remove loader from DOM after animation
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1000);
});

// =============== Scroll Progress Bar ===================
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// =============== Theme Toggle ===================
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-theme');
    themeIcon.classList.remove('bx-moon');
    themeIcon.classList.add('bx-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    
    if (isLight) {
        themeIcon.classList.remove('bx-moon');
        themeIcon.classList.add('bx-sun');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.remove('bx-sun');
        themeIcon.classList.add('bx-moon');
        localStorage.setItem('theme', 'dark');
    }
});

// =============== Toggle Icon Navbar ===================
let menuIcon = document.querySelector('#menu-icon');  
let navbar = document.querySelector('.navbar');  

menuIcon.onclick = () => {  
    menuIcon.classList.toggle('bx-x');  
    navbar.classList.toggle('active');  
    
    // Prevent body scroll when menu is open on mobile
    if (navbar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};

// Close navbar when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
        document.body.style.overflow = '';
    }
});

// =============== Scroll Sections Active Link ===================
let sections = document.querySelectorAll('section');  
let navLinks = document.querySelectorAll('header nav a');  

window.onscroll = () => {  
    // Update active nav link based on scroll position
  sections.forEach(sec => {  
    let top = window.scrollY;  
    let offset = sec.offsetTop - 150;  
    let height = sec.offsetHeight;  
    let id = sec.getAttribute('id');  

    if (top >= offset && top < offset + height) {  
      navLinks.forEach(links => {  
        links.classList.remove('active');  
                const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
      });  
        }
  });  

    // =============== Sticky Navbar ===================
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // =============== Remove Toggle Icon Navbar when click navbar link (scroll) ===================
    menuIcon.classList.remove('bx-x');  
    navbar.classList.remove('active');
    document.body.style.overflow = '';
};

// =============== Smooth Scroll for Nav Links ===================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu after clicking
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
            document.body.style.overflow = '';
        }
    });
});

// =============== Scroll Reveal ===================
ScrollReveal({   
    reset: false,
    distance: '80px',   
    duration: 2000,   
    delay: 200,
    easing: 'ease-out'
});

ScrollReveal().reveal('.home-content, .heading', { 
    origin: 'top',
    interval: 200
});

ScrollReveal().reveal('.home-img, .project-box, .contact form', { 
    origin: 'bottom',
    interval: 200
});

ScrollReveal().reveal('.home-content h1, .about-img', { 
    origin: 'left',
    interval: 100
});

ScrollReveal().reveal('.stack-category', {
    origin: 'bottom',
    interval: 150
});

ScrollReveal().reveal('.tab-content', {
    origin: 'top',
    interval: 100
});

ScrollReveal().reveal('.experience-box', {
    origin: 'left',
    interval: 200,
    distance: '50px'
});

// =============== Typed.js ===================
const typed = new Typed('.multiple-text', {  
    strings: ['Full Stack Developer', 'Machine Learning Enthusiast', 'IOT Developer'],
    typeSpeed: 50,  
    backSpeed: 100,  
    backDelay: 1000,  
    loop: true,  
    showCursor: true,
    cursorChar: '|'
});

// =============== Tabbed Section Functionality ===================
function initTabs() {
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

    if (tabs.length === 0 || tabContents.length === 0) {
        setTimeout(initTabs, 100);
        return;
    }

tabs.forEach((tab) => {
        // Remove existing click handlers by using a new function
        tab.onclick = null;
        
        // Add click event listener
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Get fresh references to all tabs and contents
            const allTabs = document.querySelectorAll('.tab');
            const allTabContents = document.querySelectorAll('.tab-content');
            
            // Remove active class from all tabs
            allTabs.forEach((t) => {
                t.classList.remove('active');
            });
            
            // Hide all tab contents
            allTabContents.forEach((content) => {
                content.classList.remove('active');
            });

            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding content
            const targetId = this.getAttribute('data-tab');
            const targetContent = document.getElementById(targetId);
            
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Initialize tabs when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(initTabs, 100);
    });
} else {
    // DOM already loaded
    setTimeout(initTabs, 100);
}

// =============== Intersection Observer for Fade-in Animations ===================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

// Observe all sections
sections.forEach(section => {
    observer.observe(section);
});

// =============== Project Box Hover Effects ===================
const projectBoxes = document.querySelectorAll('.project-box');
projectBoxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    box.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// =============== Stack Item Hover Effects ===================
const stackItems = document.querySelectorAll('.stack-item');
stackItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.1) rotate(5deg)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
    });
});

// =============== Smooth Scroll to Top ===================
const footerIconTop = document.querySelector('.footer-iconTop a');
if (footerIconTop) {
    footerIconTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// =============== Show/Hide Back to Top Button ===================
window.addEventListener('scroll', () => {
    const footerIconTop = document.querySelector('.footer-iconTop');
    if (footerIconTop) {
        if (window.scrollY > 500) {
            footerIconTop.style.opacity = '1';
            footerIconTop.style.transform = 'scale(1)';
            footerIconTop.style.visibility = 'visible';
        } else {
            footerIconTop.style.opacity = '0.7';
            footerIconTop.style.transform = 'scale(0.9)';
        }
    }
});

// =============== Parallax Effect for Home Section ===================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const homeSection = document.querySelector('.home');
    if (homeSection && scrolled < window.innerHeight) {
        const parallax = scrolled * 0.3;
        const homeContent = homeSection.querySelector('.home-content');
        const homeImg = homeSection.querySelector('.home-img');
        if (homeContent) homeContent.style.transform = `translateY(${parallax}px)`;
        if (homeImg) homeImg.style.transform = `translateY(${-parallax * 0.5}px)`;
    }
});

// =============== Add Ripple Effect to Buttons ===================
const buttons = document.querySelectorAll('.btn, .tab, .social-media a');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// =============== Keyboard Navigation ===================
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape key
    if (e.key === 'Escape' && navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
        document.body.style.overflow = '';
    }
    
    // Toggle theme with T key
    if (e.key === 't' || e.key === 'T') {
        if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            themeToggle.click();
        }
    }
});

// =============== Lazy Loading for Images ===================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// =============== Add Animation Delay to Stack Items ===================
stackItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    item.style.opacity = '0';
    item.style.animation = 'fadeInUp 0.6s ease forwards';
});

// Trigger animation when items come into view
const stackObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, { threshold: 0.1 });

stackItems.forEach(item => {
    stackObserver.observe(item);
});

// =============== Experience Modal Functions ===================
function openExperienceModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeExperienceModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.experience-modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.experience-modal');
        modals.forEach(modal => {
            if (modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});

// =============== Console Message ===================
console.log('%c👋 Hello! Thanks for checking out my portfolio!', 'color: #0ef; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with ❤️ by Dasith Niwanthaka', 'color: #0ef; font-size: 14px;');
