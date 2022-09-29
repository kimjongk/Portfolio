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

    console.log(event.target.dataset.link);
    const scroll= document.querySelector(link);
    scroll.scrollIntoView({behavior:'smooth'});
}); 