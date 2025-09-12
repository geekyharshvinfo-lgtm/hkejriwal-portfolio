// Mobile Contact Button (no hamburger menu functionality needed)
const mobileContactBtn = document.querySelector('.mobile-contact-btn');

// Mobile contact button functionality is handled by the href="#contact" attribute
// No additional JavaScript needed for the new mobile navigation layout

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.6)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.6)';
    }
});

// Intersection Observer for fade-in animations
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

// Add fade-in class to elements and observe them
const elementsToAnimate = [
    '.about',
    '.skills',
    '.work',
    '.contact',
    '.project-card',
    '.skill-category'
];

elementsToAnimate.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});


// Parallax effect for hero shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Dynamic gradient animation for buttons
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.style.background = `radial-gradient(circle at ${x}px ${y}px, #764ba2, #667eea)`;
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    });
});

// Skill category animation on scroll
const skillCategories = document.querySelectorAll('.skill-category');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.3 });

skillCategories.forEach(category => {
    category.style.opacity = '0';
    category.style.transform = 'translateY(30px)';
    category.style.transition = 'all 0.6s ease';
    skillObserver.observe(category);
});

// Project cards staggered animation
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150);
        }
    });
}, { threshold: 0.2 });

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.8s ease';
    projectObserver.observe(card);
});

// Contact methods hover effect
document.querySelectorAll('.contact-method').forEach(method => {
    method.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px) scale(1.05)';
        this.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.2)';
    });
    
    method.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0) scale(1)';
        this.style.boxShadow = 'none';
    });
});

// Social links animation
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) rotate(5deg) scale(1.1)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0deg) scale(1)';
    });
});

// Cursor trail effect (optional enhancement)
let mouseX = 0;
let mouseY = 0;
let trail = [];

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function createTrail() {
    const trailElement = document.createElement('div');
    trailElement.className = 'cursor-trail';
    trailElement.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.7;
        transition: all 0.3s ease;
    `;
    
    trailElement.style.left = mouseX + 'px';
    trailElement.style.top = mouseY + 'px';
    
    document.body.appendChild(trailElement);
    
    setTimeout(() => {
        trailElement.style.opacity = '0';
        trailElement.style.transform = 'scale(0)';
        setTimeout(() => {
            if (trailElement.parentNode) {
                trailElement.parentNode.removeChild(trailElement);
            }
        }, 300);
    }, 100);
}

// Throttled cursor trail
let trailTimeout;
document.addEventListener('mousemove', () => {
    if (!trailTimeout) {
        trailTimeout = setTimeout(() => {
            createTrail();
            trailTimeout = null;
        }, 50);
    }
});

// Loading animation and ensure page starts at top
window.addEventListener('load', () => {
    // Scroll to top immediately
    window.scrollTo(0, 0);
    
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Ensure page starts at top on refresh
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

// Additional fallback to ensure home page is shown
document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Scroll-based animations here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Preload critical images (if any)
function preloadImages() {
    const imageUrls = [
        // Add any critical image URLs here
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize preloading
preloadImages();

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // No hamburger menu to close in the new mobile navigation
        // ESC key can be used for other functionality if needed
    }
});

// Focus management for accessibility
document.querySelectorAll('.nav-link, .btn, .project-link, .contact-method, .social-link').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid #667eea';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !message) {
            showFormMessage('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = this.querySelector('.form-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            // Reset form
            this.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Show success message
            showFormMessage('Thank you! Your message has been sent successfully.', 'success');
            
            // In a real implementation, you would send the data to your backend:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ name, email, message })
            // })
            // .then(response => response.json())
            // .then(data => {
            //     if (data.success) {
            //         showFormMessage('Thank you! Your message has been sent successfully.', 'success');
            //         this.reset();
            //     } else {
            //         showFormMessage('Sorry, there was an error sending your message. Please try again.', 'error');
            //     }
            // })
            // .catch(error => {
            //     showFormMessage('Sorry, there was an error sending your message. Please try again.', 'error');
            // })
            // .finally(() => {
            //     submitBtn.innerHTML = originalText;
            //     submitBtn.disabled = false;
            // });
            
        }, 2000); // Simulate network delay
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form message function
function showFormMessage(message, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}`;
    messageElement.textContent = message;
    
    // Style the message
    messageElement.style.cssText = `
        padding: 15px 20px;
        border-radius: 10px;
        margin-top: 20px;
        font-weight: 500;
        text-align: center;
        animation: slideInUp 0.3s ease;
        ${type === 'success' 
            ? 'background: rgba(67, 233, 123, 0.1); color: #43e97b; border: 1px solid rgba(67, 233, 123, 0.3);'
            : 'background: rgba(245, 87, 108, 0.1); color: #f5576c; border: 1px solid rgba(245, 87, 108, 0.3);'
        }
    `;
    
    // Add animation keyframes if not already added
    if (!document.querySelector('#form-message-styles')) {
        const style = document.createElement('style');
        style.id = 'form-message-styles';
        style.textContent = `
            @keyframes slideInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Insert message after the form
    contactForm.parentNode.insertBefore(messageElement, contactForm.nextSibling);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        if (messageElement.parentNode) {
            messageElement.style.animation = 'slideInUp 0.3s ease reverse';
            setTimeout(() => {
                if (messageElement.parentNode) {
                    messageElement.remove();
                }
            }, 300);
        }
    }, 5000);
}

// Form input animations
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentNode.style.transform = 'scale(1.02)';
        this.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
    });
    
    input.addEventListener('blur', function() {
        this.parentNode.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
    
    // Floating label effect (if you want to add labels later)
    input.addEventListener('input', function() {
        if (this.value) {
            this.classList.add('has-value');
        } else {
            this.classList.remove('has-value');
        }
    });
});

// Calendly button animation
document.querySelectorAll('.calendly-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Contact options animation
document.querySelectorAll('.contact-option').forEach(option => {
    option.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.option-header i');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
            icon.style.color = '#8fa4f3';
        }
    });
    
    option.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.option-header i');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
            icon.style.color = '#667eea';
        }
    });
});

console.log('🚀 Portfolio website loaded successfully!');
