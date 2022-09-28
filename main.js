'use strict';

//navbar를 투명하게 만드는데 스크롤y를 맨 위로 올렸을때의 효과
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else {
        navbar.classList.remove('navbar--dark');
    }
});