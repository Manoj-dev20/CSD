document.addEventListener('DOMContentLoaded', function() {
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fade-in, .slide-in-right, .slide-in-left, .slide-in-bottom');
        
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
    animateOnScroll();
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Image carousel functionality
    const dots = document.querySelectorAll('.dot');
    
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            // Get parent navigation container
            const navigation = this.parentElement;
            
            // Remove active class from all dots in this navigation
            const siblingDots = navigation.querySelectorAll('.dot');
            siblingDots.forEach(d => d.classList.remove('active'));
            
            // Add active class to clicked dot
            this.classList.add('active');
            
            // Here you would typically change the image
            // For a real implementation, you would have multiple images
            // and change the src attribute of the image element
        });
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.btn-yellow');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add subtle parallax effect to yellow blobs
    window.addEventListener('mousemove', function(e) {
        const blobs = document.querySelectorAll('.yellow-blob');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        blobs.forEach(blob => {
            const offsetX = (mouseX - 0.5) * 20;
            const offsetY = (mouseY - 0.5) * 20;
            
            blob.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            blob.style.transition = 'transform 0.3s ease-out';
        });
    });
});