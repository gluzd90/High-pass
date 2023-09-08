let burger = document.querySelector('.header__burger-svg');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.header__nav-item')
let menuClosed = document.querySelector('.header__nav-closed')
burger.addEventListener('click',
function(e) {
    e.preventDefault();
    menu.classList.add('header__nav--active');
    document.body.classList.add('stop-scroll');
})
menuLinks.forEach(function(el) {
    el.addEventListener('click', function() {
    menu.classList.remove('header__nav--active');
document.body.classList.remove('stop-scroll')
    })
})
menuClosed.addEventListener('click',
function(e) {
    e.preventDefault();
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
})
