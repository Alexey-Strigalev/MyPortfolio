$(document).ready (function () {

    // Мобильное меню
    const toggleMenu = document.querySelector('.toggle-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const headerOverlay = document.querySelector('.header-overlay');
    const noscroll = document.body;


    toggleMenu.addEventListener('click', function(){

        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        headerOverlay.classList.toggle('active');
        noscroll.classList.toggle('noscroll');
        
    })

    mobileMenu.addEventListener('click', function(){

        this.classList.remove('active');
        toggleMenu.classList.remove('active');
        headerOverlay.classList.remove('active');
        noscroll.classList.remove('noscroll');
        
    })

    headerOverlay.addEventListener('click', function(){

        mobileMenu.classList.remove('active');
        toggleMenu.classList.remove('active');
        headerOverlay.classList.remove('active');
        noscroll.classList.remove('noscroll');
        
    })

    // Фильтрация проектов
    let containerEl = document.querySelector('#portfolio-card');
    let mixer = mixitup(containerEl,{
            classNames: {
                block: ""
            }
    })

    // Изменение размеров карточек
    const filterToggles = document.querySelectorAll('.portfolio-menu button');
    const portfolioBigCards = document.querySelectorAll('.portfolio-card');

    for (let i = 0; i < filterToggles.length; i++) {
        filterToggles[i].addEventListener('click', function () {
            if (i == 0) {
                for (let j = 0; j < 2; j++) {
                    portfolioBigCards[j].classList.add('portfolio-card-big')
                }
             } else {
                for (let j = 0; j < 2; j++) {
                    portfolioBigCards[j].classList.remove ('portfolio-card-big')
                }
            }
        })
    }

})