// Add smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    
    
    // Add hover effect for the HOD image
    const hodImage = document.querySelector('.hod-image');
    if (hodImage) {
        hodImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        hodImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});