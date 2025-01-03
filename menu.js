document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.querySelector(".nav_link");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("show"); // Alterna a visibilidade dos links
    menuIcon.classList.toggle("active"); // Adiciona ou remove a classe "active" para animação e troca do ícone

    // Alterna o ícone entre o menu e o "X"
    if (menuIcon.classList.contains("active")) {
      menuIcon.innerHTML = '&#10005;'; // Exibe o "X"
    } else {
      menuIcon.innerHTML = '&#9776;'; // Exibe o ícone do menu
    }
  });
});