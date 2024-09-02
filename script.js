document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Impede o envio padrão do formulário
  
      // Adicione código aqui para enviar o formulário via AJAX, se necessário
  
      // Exibe a mensagem de agradecimento
      thankYouMessage.style.display = 'block';
  
      // Opcional: Limpa o formulário
      form.reset();
  
      // Opcional: Adicione uma lógica para esconder a mensagem após alguns segundos
      setTimeout(function () {
        thankYouMessage.style.display = 'none';
      }, 5000); // Esconde a mensagem após 5 segundos
    });
  });
  
  