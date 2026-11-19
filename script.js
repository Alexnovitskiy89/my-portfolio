document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Сбрасываем ошибку
      emailInput.setAttribute('aria-invalid', 'false');
      emailError.style.display = 'none';

      // Простая проверка e‑mail
      const emailValue = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(emailValue)) {
        emailInput.setAttribute('aria-invalid', 'true');
        emailError.style.display = 'block';
        emailInput.focus();
        return; // Не показываем алерт, пока не исправим ошибку
      }

      alert('Спасибо, я получил ваше сообщение! Скоро отвечу.');
      form.reset();
    });
  }
});
