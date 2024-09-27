const button = document.querySelector('button');
const textarea = document.querySelector('textarea');
const root = document.querySelector('#root');

textarea.value = localStorage.getItem('savedText') || '';

let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();

recognition.lang = 'ru-RU'; 
recognition.continuous = true; 

recognition.onresult = function(event) {
  const last = event.results.length - 1;
  const text = event.results[last][0].transcript;

  // Функция для анимации печати текста
  function typeText(text, index = 0) {
    if (index < text.length) {
      textarea.value += text[index]; // Добавляем символы один за другим
      setTimeout(() => typeText(text, index + 1), 50); // Задержка для эффекта печати
    } else {
      textarea.value += '\n'; // Добавляем новую строку после завершения текста
      localStorage.setItem('savedText', textarea.value); // Сохраняем текст
    }
  }

  typeText(text); // Запускаем анимацию печати текста
}

recognition.onerror = function(event) {
  root.textContent = 'Пожалуйста, разрешите использовать микрофон!';
  console.error('Доступ к микрофону запрещен: ' + event.error);
}

button.addEventListener('click', function() {
  if (button.classList.contains('animation')) {
    recognition.stop(); 
    button.classList.remove('animation'); 
  } else {
    recognition.start(); 
    button.classList.add('animation'); 
  }
});

textarea.addEventListener('input', function() {
  localStorage.setItem('savedText', textarea.value);
});
