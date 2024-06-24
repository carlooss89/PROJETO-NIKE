let ul = document.querySelector("nav .ul");

function openMenu() /*() chama a função openMenu e executa o código dentro dela*/ {
  ul.classList.add("open");
}

function closeMenu() /*() chama a função closeMenu e executa o código dentro dela*/ {
  ul.classList.remove("open");
}
