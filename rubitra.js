document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to elements
    const elementsToAnimate = [
        document.querySelector('.page-title'),
        document.querySelector('.coordinator-image'),
        document.querySelector('.message-content'),
        ...document.querySelectorAll('footer .footer-container > div')
    ];
    
    // Apply animations with staggered delay
    elementsToAnimate.forEach((element, index) => {
        if (element) {
            element.style.opacity = '0';
            element.style.animation = `fadeIn 0.8s ease forwards ${index * 0.2}s`;
        }
    });
    
    // Add hover effect to the coordinator image
    const coordinatorImage = document.querySelector('.image-circle');
    
    if(coordinatorImage) {
        coordinatorImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        
        coordinatorImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    }
    
    // Add hover effect to the qualification badge
    const qualificationBadge = document.querySelector('.qualification');
    
    if(qualificationBadge) {
        qualificationBadge.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        qualificationBadge.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
    
    // Add hover effects to navigation links
    const navLinks = document.querySelectorAll('nav a, footer a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#e67e22';
            this.style.transition = 'color 0.3s ease';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = '';
        });
    });
});