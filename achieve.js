document.addEventListener('DOMContentLoaded', function() {
    // Get all elements to animate
    const animateElements = document.querySelectorAll('.animate-element');
    
    // Set initial delay for staggered animation
    let delay = 0;
    const delayIncrement = 150; // milliseconds between each element animation
    
    // Apply initial delay to each element
    animateElements.forEach((element, index) => {
        element.style.transitionDelay = `${delay}ms`;
        delay += delayIncrement;
    });
    
    // Function to check if element is in viewport and animate
    const animateOnScroll = function() {
        animateElements.forEach(element => {
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
    
    // Button hover effects
    const buttons = document.querySelectorAll('.btn-yellow');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 5px 15px rgba(255, 229, 102, 0.4)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
    
    // Card hover effects
    const cards = document.querySelectorAll('.achievement-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        });
    });
    
    // Simulate click on "View More" button
    const viewMoreBtn = document.querySelector('.btn-yellow');
    
    viewMoreBtn.addEventListener('click', function() {
        this.innerHTML = '<span class="loading-text">Loading...</span>';
        
        setTimeout(() => {
            this.innerHTML = 'View More';
            alert('More achievements will be loaded here!');
        }, 1500);
    });
});