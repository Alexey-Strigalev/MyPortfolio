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

    // form placeholder
    const formItems = document.querySelectorAll('.form-field');
        
    for(let item of formItems){
        const thisParent = item.closest('.form-item');
        const thisPlaceholder = thisParent.querySelector('.fake-placeholder');
        // Если инпут в фокусе		
        item.addEventListener('focus', function(){
            thisPlaceholder.classList.add('active');
        });

        // Если инпут теряет фокус
        item.addEventListener('blur', function(){

            if(item.value.length > 0){
                thisPlaceholder.classList.add('active');
            }
            else{
                thisPlaceholder.classList.remove('active');
            }
        })
    }

    //FORM VALIDATE
	$('.contacts-form').validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			subject: {
				required: true
			},
			message: {
				required: true
			}
		},
		messages: {
			email: {
				required: 'Введите Ваш Email',
				email: 'Отсутсвует символ @'
			},
			subject: {
				required: 'Введите тему сообщения'
			},
			message: {
				required: 'Введите текст сообщения'
			}
		},
		submitHandler: function (form) {
			ajaxFormSubmit();
		}
    })
    
    // Функция AJAX запрса на сервер

	function ajaxFormSubmit() {

		let string = $(".contacts-form").serialize(); // Соханяем данные введенные в форму в строку.

		//Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string

			// Функция если все прошло успешно
			success: function (html) {
				$(".contacts-form").slideUp(800);
				$('#answer').html(html);
			}
		});
		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепочку срабатывания остальных функций
		return false;
    }

    // ПАРАЛЛАКС ДВИЖЕНИЯ ЗА МЫШКОЙ
    let prxScene = document.querySelector('.contacts-row')
    let prxItem = document.querySelectorAll('.move-quot');
    prxScene.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        for (let item of prxItem) {
            item.style.transform = 'translate(' + x * 150 + 'px, ' + y * 150 + 'px)';
        }
    });

    // Навигация
    $('#page-nav').onePageNav({
        currentClass: 'active',
        changeHads: false,
        scrollSpeed:750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {},
        end: function () {},
        scrollChange: function ($currentListItem) {}
    });



    // Смотреть все работы
    const hideCard = document.querySelectorAll('.portfolio-card');
    const allJobsButton = document.querySelector('.all-jobs-link');

    allJobsButton.addEventListener('click', function(){

        this.classList.toggle('hide-card');
        for(let item of hideCard){
            item.classList.remove('hide-card');
            };    
    });

})