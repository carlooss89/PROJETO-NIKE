    const menu = document.querySelector("nav .menu");
    const openMenuIcon = document.querySelector("nav .menu-icon");
    const closeMenuIcon = document.querySelector("nav .close-icon");

    // Adiciona o event listener para o ícone de abrir o menu
  if (openMenuIcon) { // Verifica se o ícone de menu aberto existe
    openMenuIcon.addEventListener("click", () => { // Adiciona o evento de clique
      menu.classList.add("open"); // Adiciona a classe "open" ao menu
    });
  }

  // Adiciona o event listener para o ícone de fechar o menu
if (closeMenuIcon) {
  closeMenuIcon.addEventListener("click", () => {
    menu.classList.remove("open");
  });
}

// SCRIPT
const swiper = new Swiper(".slider-wrapper", // swipper inicializado com a classe "slider-wrapper"
  {
  loop: true,
  grabCursor: true,
    spaceBetween: 30,
  
    // slides per view
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
// FIM DO SCRIPT
