document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.onclick = e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: "smooth"});
        };
    });

function animateOnScroll() {
    const gotoo = document.querySelectorAll('.skill-card, .project-card');
    gotoo.forEach(el => {
        const elPosition = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if(elPosition < screenPosition) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
}

document.querySelectorAll('.skill-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);