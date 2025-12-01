// Smooth scroll
document.querySelectorAll('.navbar a').forEach(link => {
link.addEventListener('click', e => {
e.preventDefault();
document.querySelector(link.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});
});
});


// Hover glitch on heading
const title = document.querySelector('.glitch');


title.addEventListener('mouseover', () => {
title.style.animation = 'glitch 0.3s infinite';
});


title.addEventListener('mouseout', () => {
title.style.animation = '';
});
