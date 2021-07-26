function fastScroll() {
    window.scrollTo(100, 800);
}

function smoothScroll() {
    window.scrollTo({
        top: 800,
        left: 100,
        behavior: 'smooth'
    });
}

function topScroll() {
    window.scrollTo(100, 0);
}