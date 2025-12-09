// Add any JavaScript functionality here
// For example: smooth scrolling, mobile menu toggle, etc.

document.addEventListener('DOMContentLoaded', function() {
    console.log('Motto page loaded successfully!');
    
    // Example: Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
