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

/* --- Базовые стили для чекбокса (скрываем сам инпут) --- */
.nav-toggle-checkbox {
  display: none;
}

/* --- Стили для мобильного меню (по умолчанию скрыто) --- */
@media (max-width: 768px) {
  /* Контейнер навигации: фиксируем поверх контента */
  .main-nav {
    position: fixed;
    top: 60px; /* Высота шапки + отступ */
    left: 0;
    width: 100%;
    height: calc(100vh - 60px); /* Занимает всё оставшееся место */
    background-color: #ffffff;
    overflow-y: auto;
    transform: translateX(100%); /* Сдвигаем вправо за экран */
    transition: transform 0.3s ease-in-out;
    z-index: 999;
    padding-top: 2rem;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }

  /* Когда чекбокс активен (:checked) -> сдвигаем меню на экран */
  .nav-toggle-checkbox:checked ~ .main-nav {
    transform: translateX(0);
  }

  /* Список ссылок на мобильном: вертикальный, крупные кнопки */
  .main-nav .nav-list {
    flex-direction: column;
    width: 100%;
    text-align: center;
    gap: 0;
  }

  .main-nav .nav-list li {
    margin: 1rem 0;
  }

  .main-nav .nav-list a {
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
  }

  .main-nav .nav-list a:hover {
    background-color: #f0f0f0;
  }

  /* Анимация бургера -> крестик */
  .mobile-toggle span {
    display: block;
    width: 24px;
    height: 3px;
    background-color: #333;
    margin: 6px 0;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  /* Верхняя линия: поворот в крестик */
  .nav-toggle-checkbox:checked ~ .mobile-toggle span:nth-child(1) {
    transform: rotate(45deg) translate(2px, 6px);
  }

  /* Средняя линия: прозрачность */
  .nav-toggle-checkbox:checked ~ .mobile-toggle span:nth-child(2) {
    opacity: 0;
  }

  /* Нижняя линия: поворот в крестик */
  .nav-toggle-checkbox:checked ~ .mobile-toggle span:nth-child(3) {
    transform: rotate(-45deg) translate(2px, -6px);
  }
  
  /* Затемнение фона, когда меню открыто (опционально, но красиво) */
  .nav-toggle-checkbox:checked ~ .site-header::after {
    content: '';
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 998;
  }
}
