
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__menu');
let menuLinks = menu.querySelectorAll('.header__item-link');

burger.addEventListener('click',

  function () {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__menu--active');
    menu.getElementsByClassName.transition = `visibility 0.3s ease-in-out, transform 0.3s ease-in-out`;

    document.body.classList.toggle('stop-scroll');
  })

menu.addEventListener(`transitionend`, function () {
  if (!menu.classList.contains('header__menu--active')) {
    menu.removeAttribute(`style`);
  }
});

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__menu--active');

    document.body.classList.remove('stop-scroll');
  });
})
