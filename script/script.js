const hamNav = document.getElementById('ham-nav');
const navBar = document.getElementById('nav-bar'); 

hamNav.addEventListener('click', () => {
    navBar.classList.toggle('show');
} );