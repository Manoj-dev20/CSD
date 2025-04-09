document.addEventListener('DOMContentLoaded', function() {
    // Testimonial Slider
    const dots = document.querySelectorAll('.dot');
    const testimonials = document.querySelector('.testimonials');
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Remove active class from all dots
            dots.forEach(d => d.classList.remove('active'));
            
            // Add active class to clicked dot
            dot.classList.add('active');
            
            // Implement slider functionality here
            // This is a placeholder for actual slider implementation
            console.log(`Slide to testimonial ${index + 1}`);
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href.startsWith('#')){
                e.preventDefault();
            
          
            
            const targetSection = document.querySelector(href);
            if(targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    const emailInput = contactForm.querySelector('input[type="email"]');
    const submitButton = contactForm.querySelector('button');
    
    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        if(!email) {
            alert('Please enter your email address');
            return;
        }
        
        if(!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission
        submitButton.textContent = 'Sending...';
        
        setTimeout(() => {
            alert('Thank you! Your query has been submitted.');
            emailInput.value = '';
            submitButton.textContent = 'Send Query';
        }, 1500);
    });
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Add subtle animations for better user experience
    const animatedElements = document.querySelectorAll('.feature-card, .faculty-card, .topper-card, .learning-feature');
    
    // Simple animation on scroll
    window.addEventListener('scroll', function() {
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Initialize elements with opacity 0 and translateY for animation
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger initial check for elements in viewport
    window.dispatchEvent(new Event('scroll'));
});