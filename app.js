const open = document.querySelector('.nav__menu');
const close = document.querySelector('.nav__menu--close');
const navbar = document.querySelector('.nav__ul');

open.addEventListener('click', () => {
    navbar.classList.add('nav__ul--active');
    open.classList.add('nav__menu--disabled');
    close.classList.add('nav__menu--active');
});

close.addEventListener('click', () => {
    navbar.classList.remove('nav__ul--active');
    open.classList.remove('nav__menu--disabled');
    close.classList.remove('nav__menu--active');
});