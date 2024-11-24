let menu = document.querySelector("nav .menu");

function openMenu() /* Função responsável por abrir o MENU.  
() chama a função openMenu e executa o código dentro dela*/
{
  menu.classList.add("open");

}

function closeMenu() /*() chama a função closeMenu e executa o código dentro dela*/
{
  menu.classList.remove("open");
}

// SCRIPT
const swiper = new Swiper(".slider-wrapper",
  {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
    navigation:
    {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
    breakpoints:
    {
    0: {
      slidesPerView: 1,
    },
    830: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
