document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    const pages = document.querySelectorAll(".page");
  
    // Função para mudar a página
    function showPage(pageName) {
      // Esconde todas as páginas
      pages.forEach(page => {
        page.classList.remove("active");
      });
  
      // Exibe a página correspondente
      const pageToShow = document.getElementById(pageName);
      if (pageToShow) {
        pageToShow.classList.add("active");
      }
    }
  
    // Adiciona o evento de clique para cada link
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();  // Impede o comportamento padrão do link
        const pageName = link.getAttribute("data-page");
        showPage(pageName);
      });
    });
  
    // Exibe a página inicial por padrão
    showPage("home");
  });
  