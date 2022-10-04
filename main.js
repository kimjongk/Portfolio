'use strict';

//navbar를 투명하게 만드는데 스크롤y를 맨 위로 올렸을때의 효과
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});
// 마우스를 클릭했을때 원하는 위치로 페이지가 스크롤링 되는 효과
const navrbarMenu = document.querySelector('.navbar__menu');
navrbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }

    scrollIntoView(link);
});

// 컨택미를 클릭했을 때 컨택 항목으 스크롤링
const contactme = document.querySelector('.home__contact');
contactme.addEventListener('click', () => {
   scrollIntoView('#contact');
});

//스크롤링 했을때 홈이 투명도 변화
const home = document.querySelector('.home__container');
const homeheight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    home.style.opacity = 1 - window.scrollY / homeheight;
});

//seting
function scrollIntoView(selector){
    const scroll = document.querySelector(selector);
    scroll.scrollIntoView({behavior: 'smooth'});
}