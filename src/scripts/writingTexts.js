
  document.addEventListener('DOMContentLoaded', function () {
    const homeText = document.querySelector('.homeText');
    homeText.textContent = homeText.textContent.trim(); // Remova espaços extras

    // Adicione espaços à frente do texto para que ele pareça ser digitado
    homeText.innerHTML = homeText.textContent.replace(/\S/g, "<span class='char'>$&</span>");

    // Execute a animação
    homeText.classList.add('animate');
  });

