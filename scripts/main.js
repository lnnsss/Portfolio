/*-----переменные-----------------------------------------------*/

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.nav');
const body = document.body;

/*-----функции-----------------------------------------------*/

document.addEventListener('DOMContentLoaded', function() {

    // Открытие/закрытие по клику на бургер
    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('lock');
    });

    // Закрытие при клике на пункт меню
    const menuLinks = document.querySelectorAll('.nav__link');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('lock');
        });
    });
});
