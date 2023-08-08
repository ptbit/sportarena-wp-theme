const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".header__menu");
const body = document.querySelector("body");


iconMenu.addEventListener("click", function (e) {
  iconMenu.classList.toggle("_active");
  menuBody.classList.toggle("_active");
  body.classList.toggle("_lock");
});

//openMenu on mob
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function (menuItem) {
  const submenu = menuItem.querySelector('.sub-menu');
  const submenu2 = menuItem.querySelector('.sub-menu-2');
  const submenu3 = menuItem.querySelector('.sub-menu-3');
  const link = menuItem.querySelector('a');

  menuItem.addEventListener('mouseenter', function () {
    if (window.innerWidth > 1024) {
      if(submenu) submenu.style.display = 'block';

    }
  });

  menuItem.addEventListener('mouseleave', function () {
    if (window.innerWidth > 1024) {
      if(submenu) submenu.style.display = 'none';
    }
  });

  link.addEventListener('click', function (event) {

    if (window.innerWidth <= 1024) {
      menuItem.classList.toggle('mobile-active');
      let nextElement = link.nextElementSibling
      if(nextElement !== null){
        event.preventDefault();
      }

      if(nextElement !== null && nextElement.classList.contains('sub-menu-2')){
        submenu2.classList.toggle('_open')

      }
      if(nextElement !== null && nextElement.classList.contains('sub-menu-3') ){
        submenu3.classList.toggle('_open')

      }

    }
  });
});
