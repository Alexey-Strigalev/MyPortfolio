const toggleMenu = document.querySelector('.toggle-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const headerOverlay = document.querySelector('.header');


toggleMenu.addEventListener('click', function(){

    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    headerOverlay.classList.toggle('active');
    
})