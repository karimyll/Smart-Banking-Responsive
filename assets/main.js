const menuBtn = document.getElementById('menu-btn');
const menu = document.querySelector('.mobile-navbar');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    });