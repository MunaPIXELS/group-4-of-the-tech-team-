// Make header transparent when marquee passes through
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const marquee = document.querySelector('.marquee-container');
    const hero = document.querySelector('.hero');
    const marqueeRect = marquee.getBoundingClientRect();
    const heroRect = hero.getBoundingClientRect();
    
    // When marquee is scrolling through the header area
    if (marqueeRect.top < 80 && marqueeRect.bottom > 0) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
    
    // Fade text when scrolling up
    const scrollPosition = window.scrollY;
    const fadeStart = 50;
    const fadeEnd = 300;
    
    const mainText = document.querySelector('.main-text');
    const learnMore = document.querySelector('.learn-more');
    
    if (scrollPosition <= fadeStart) {
        mainText.style.opacity = '1';
        learnMore.style.opacity = '1';
    } else if (scrollPosition >= fadeEnd) {
        mainText.style.opacity = '0';
        learnMore.style.opacity = '0';
    } else {
        const opacity = 1 - ((scrollPosition - fadeStart) / (fadeEnd - fadeStart));
        mainText.style.opacity = opacity;
        learnMore.style.opacity = opacity;
    }
});

// Set initial state
document.querySelector('header').classList.add('transparent');
