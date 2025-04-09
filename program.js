document.addEventListener('DOMContentLoaded', function() {
    // Staggered animation for event cards
    const eventCards = document.querySelectorAll('.event-card');
    
    eventCards.forEach((card, index) => {
        // Add delay to each card based on its index
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                // Unobserve after animation has started
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });
    
    // Observe all event cards
    eventCards.forEach(card => {
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });
    
    // Hover effect for event cards
    eventCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
            
            // Change circle color on hover
            const circle = this.querySelector('.circle');
            circle.style.backgroundColor = '#b14ec7';
            circle.style.transition = 'background-color 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            
            // Revert circle color
            const circle = this.querySelector('.circle');
            circle.style.backgroundColor = '#ccc';
        });
    });
    
    // Add pulse animation to circles
    const circles = document.querySelectorAll('.circle');
    
    circles.forEach(circle => {
        circle.style.animation = 'pulse 2s infinite';
    });
    
    // Add keyframe animation for pulse
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes pulse {
            0% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(177, 78, 199, 0.4);
            }
            
            70% {
                transform: scale(1.1);
                box-shadow: 0 0 0 10px rgba(177, 78, 199, 0);
            }
            
            100% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(177, 78, 199, 0);
            }
        }
    `;
    document.head.appendChild(style);
    
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

    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // If element is in viewport
            if (elementPosition < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    };
    
    // Run animation check on load
    setTimeout(animateOnScroll, 100);
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Add hover effects to timeline circles
    const eventItems = document.querySelectorAll('.event-item');
    
    eventItems.forEach(item => {
        const circle = item.querySelector('.circle');
        
        item.addEventListener('mouseenter', function() {
            circle.style.backgroundColor = '#b14ec7';
            circle.style.transform = 'scale(1.2)';
            circle.style.transition = 'background-color 0.3s ease, transform 0.3s ease';
            
            // Add subtle animation to the event content
            const content = this.querySelector('.event-content');
            content.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            content.style.transform = 'translateY(-3px)';
            content.style.transition = 'box-shadow 0.3s ease, transform 0.3s ease';
            
            // Add subtle zoom to image
            const image = this.querySelector('.event-image img');
            image.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            circle.style.backgroundColor = '#ccc';
            circle.style.transform = 'scale(1)';
            
            // Revert content animation
            const content = this.querySelector('.event-content');
            content.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.05)';
            content.style.transform = 'translateY(0)';
            
            // Revert image zoom
            const image = this.querySelector('.event-image img');
            image.style.transform = 'scale(1)';
        });
    });
    
    // Add pulse animation to circles
    const circles2 = document.querySelectorAll('.circle');
    
    circles2.forEach((circle, index) => {
        // Add staggered animation delay
        const delay = index * 0.5;
        circle.style.animation = `pulse 2s infinite ${delay}s`;
    });
    
    // Add keyframe animation for pulse
    const style2 = document.createElement('style');
    style2.innerHTML = `
        @keyframes pulse {
            0% {
                box-shadow: 0 0 0 0 rgba(177, 78, 199, 0.4);
            }
            
            70% {
                box-shadow: 0 0 0 10px rgba(177, 78, 199, 0);
            }
            
            100% {
                box-shadow: 0 0 0 0 rgba(177, 78, 199, 0);
            }
        }
    `;
    document.head.appendChild(style2);
    
    // Staggered animation for event items
    const eventItems2 = document.querySelectorAll('.event-item');
    eventItems2.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.2}s`;
    });
    
});