const menuHmb = document.querySelector('.menu-hmb');
const navUl = document.querySelector('nav ul');

menuHmb.addEventListener('click', function(){
    navUl.classList.toggle('slide');
});