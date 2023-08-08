const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".header__menu");
const body = document.querySelector("body");

iconMenu.addEventListener("click", function (e) {
  iconMenu.classList.toggle("_active");
  menuBody.classList.toggle("_active");
  body.classList.toggle("_lock");
});

//openMenu on mob
const itemMenuSub = document.querySelectorAll('.menu__item-sub_list');
const itemMenuSub2 = document.querySelectorAll('.menu__item-sub_list-2');
const itemMenuSub3 = document.querySelectorAll('.menu__item-sub_list-3');
const itemHoverDesc = document.querySelectorAll('.menu__item-hover-desc');
const itemHoverDesc2 = document.querySelectorAll('.menu__item-hover-desc-2');
const itemHoverDesc3 = document.querySelectorAll('.menu__item-hover-desc-3');

if(window.innerWidth <= 1024){
  itemHoverDesc.forEach(item => {
    item.classList.remove('menu__item-hover-desc')
  })
  itemHoverDesc2.forEach(item => {
    item.classList.remove('menu__item-hover-desc-2')
  })
  itemHoverDesc3.forEach(item => {
    item.classList.remove('menu__item-hover-desc-3')
  })

  itemMenuSub.forEach(item => {
    let menuSub = item.querySelector('.menu__item-list');
    let menuSubLink = item.querySelector('.menu__link')
    menuSubLink.addEventListener('click', ()=>{
      menuSub.classList.toggle('_open');
    })
  })

  itemMenuSub2.forEach(item => {
    let menuSub2 = item.querySelector('.menu__item-list-2');
    let menuSub2Link = item.querySelector('.menu__item-link');
    menuSub2Link.addEventListener('click', ()=>{
      menuSub2.classList.toggle('_open')
    })
  })

  itemMenuSub3.forEach(item => {
    let menuSub3 = item.querySelector('.menu__item-list-3');
    let menuSub3Link = item.querySelector('.menu__item-link');
    menuSub3Link.addEventListener('click', ()=>{
      menuSub3.classList.toggle('_open')
    })
  })
}
