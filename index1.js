// JSON файлы ------------------------------------------------------------------------------------------------


let items_crd = [];

fetch('data-cart.json')
  .then(response => response.json())
  .then(data => {
    items_crd = data;
    console.log(items_crd);
    // Доступ к данным
    console.log(items_crd[0].title); // Карточка 1

    let htmlData = '';

    items_crd.forEach(item => {
      htmlData += `<div class="crd">`;
      htmlData += `<span class="crd-title">${item.title}</span>`;
      htmlData += `<img src="${item.img}" alt="">`;
      htmlData += `<p class="crd-price">Цена ${item.price}</p>`;
      htmlData += `</div>`;
    });

    document.getElementById('crd-main').innerHTML = htmlData;
  })
  .catch(error => console.error('Ошибка:', error));


document.querySelector('.group-e').addEventListener('click', function() {
    window.open('https://www.instagram.com/_w0rf1/?hl=ru', '_blank');
});


const rectangle = document.getElementById('rectangle');
const overlay = document.getElementById('overlay');
const formPopup = document.getElementById('formPopup');

rectangle.addEventListener('click', function() {
    overlay.style.display = 'block';
    formPopup.style.display = 'block';
    formPopup.style.zIndex = '13'; // Поставить форму на передний план
});

overlay.addEventListener('click', function() {
    overlay.style.display = 'none';
    formPopup.style.display = 'none';
});


document.querySelector('.pngegg').addEventListener('click', function() {
    const numberOfTeeth = 20; // Количество зубов
    for (let i = 0; i < numberOfTeeth; i++) {
      const toothImg = document.createElement('img');
      toothImg.src = 'zub.png'; // Путь к вашему изображению зуба
      toothImg.style.position = 'absolute';
      toothImg.style.left = Math.random() * window.innerWidth + 'px';
      toothImg.style.top = Math.random() * window.innerHeight + 'px';
      
      document.body.appendChild(toothImg);
      
      // Удаление изображения зуба после некоторого времени
      setTimeout(() => {
        toothImg.remove();
      }, 3000); // Изображение будет удалено через 3 секунды
    }
  });
 

// начало ----------------------------------------------------------------------------------------


  
function validateForm(event) {
  event.preventDefault(); // Предотвращаем стандартную отправку формы
  let isValid = true;

  // Функция валидации поля
  function validateField(id, regex, errorMessage) {
      const field = document.getElementById(id);
      const error = document.getElementById(id + 'Error');
      if (!field.value.trim() || (regex && !regex.test(field.value))) {
          field.classList.add('error');
          error.textContent = errorMessage;
          isValid = false;
      } else {
          field.classList.remove('error');
          error.textContent = '';
      }
  }

  // Проверка всех полей формы
  validateField('firstName', /^[А-Яа-яЁё\s]+$/, 'Введите имя на русском языке');
  validateField('lastName', /^[А-Яа-яЁё\s]+$/, 'Введите фамилию на русском языке');
  validateField('phone', /^\+375(29|33)\d{7}$/, 'Введите корректный номер телефона');
  validateField('email', /^\S+@\S+\.\S+$/, 'Введите корректный email');
  validateField('gender', null, 'Выберите пол');

  if (isValid) {
      // Сбор данных формы
      const formData = {
          firstName: document.getElementById('firstName').value,
          lastName: document.getElementById('lastName').value,
          phone: document.getElementById('phone').value,
          email: document.getElementById('email').value,
          gender: document.getElementById('gender').value
      };
      // Вывод данных в alert
      
      // Сохранение данных в cookies и localStorage
      document.cookie = `formData=${JSON.stringify(formData)}; path=/;`;
      localStorage.setItem('formData', JSON.stringify(formData));

      function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

      const formData2 = JSON.parse(getCookie('formData'));
            if (formData2) {
                alert(`Данные из cookies:\nИмя: ${formData2.firstName}\nФамилия: ${formData2.lastName}\nТелефон: ${formData2.phone}\nEmail: ${formData2.email}\nПол: ${formData2.gender}`);
            } else {
                alert('Данные в cookies не найдены');
            }
  }
}


