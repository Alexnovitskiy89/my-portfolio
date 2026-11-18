document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Останавливаем стандартную отправку

      // Показываем сообщение
      alert('Спасибо, я получил ваше сообщение! Скоро отвечу.');

      // Опционально: можно очистить форму
      form.reset();
    });
  }
});
