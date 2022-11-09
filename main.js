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
    navrbarMenu.classList.remove('open');
    scrollIntoView(link);
});

// 네바 메뉴가 화면이 작아졌을때 토글버튼 변형효과
const navbartogglebtn = document.querySelector('.navbar__toggle-btn');
navbartogglebtn.addEventListener('click', () => {
    navrbarMenu.classList.toggle('open')
});

// 컨택미를 클릭했을 때 컨택 항목으 스크롤링
const contactme = document.querySelector('.home__contact');
contactme.addEventListener('click', () => {
    scrollIntoView('#contact');
});

//스크롤링 했을때 홈이 투명도 변화
const home = document.querySelector('.home__container');
const homeheight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeheight;
});

// up arrow btn
const arrowbtn = document.querySelector('.arrowbtn');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeheight / 2) {
        arrowbtn.classList.add('visible');
    } else {
        arrowbtn.classList.remove('visible');
    }
});
arrowbtn.addEventListener('click', () => {
    scrollIntoView('#home');
})

// projects
const categoriesbtn = document.querySelector('.work__categories');
const projectsbtn = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
categoriesbtn.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }
    projectsbtn.classList.add('animation-out');
    setTimeout(() => {
        projects.forEach((project) => {
            if (filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectsbtn.classList.remove('animation-out');
    }, 300);

    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');
});

//project click motion active
const active = document.querySelector('.category__btn.selected');
active.classList.remove('selected');
// const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
// target.classList.add('selected');

//projects connecting imgaes
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementById("imgdiv");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
img.addEventListener('click', () => {
    modal.style.display = "block";
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

//seting
function scrollIntoView(selector) {
    const scroll = document.querySelector(selector);
    scroll.scrollIntoView({
        behavior: 'smooth'
    });
}


  zzzzzz