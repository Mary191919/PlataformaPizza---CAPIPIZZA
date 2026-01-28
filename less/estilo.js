// script.js
document.querySelectorAll('.botones').forEach(button => {
    button.addEventListener('click', function(event) {
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});
