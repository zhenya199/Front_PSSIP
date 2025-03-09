const products = [
    { id: 1, name: "Диван", price: 899.99, description: "Удобный трехместный диван с современным дизайном." },
    { id: 2, name: "Обеденный стол", price: 499.99, description: "Элегантный деревянный обеденный стол для семейных ужинов." },
    { id: 3, name: "Офисное кресло", price: 199.99, description: "Эргономичное офисное кресло с регулируемой высотой." },
    { id: 4, name: "Книжная полка", price: 249.99, description: "Просторная книжная полка с несколькими полками для книг и декора." },
    { id: 5, name: "Кровать", price: 599.99, description: "Прочная кровать размера queen с стильным изголовьем." },
    { id: 6, name: "Журнальный столик", price: 299.99, description: "Современный журнальный столик из стекла и металла." },
    { id: 7, name: "Тумбочка", price: 89.99, description: "Компактная тумбочка с одним ящиком и открытой полкой." },
    { id: 8, name: "Кресло-реклайнер", price: 399.99, description: "Удобное кресло-реклайнер с мягкой обивкой." },
    { id: 9, name: "Комод", price: 399.99, description: "Просторный комод с шестью ящиками для хранения." },
    { id: 10, name: "ТВ тумба", price: 149.99, description: "Стильная ТВ тумба с местом для медиа-устройств." }
];


let cart = [];

// Функция для отображения товаров
function displayProducts() {
    const productList = document.getElementById('product-list');
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Цена: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Добавить в корзину</button>
        `;
        
        productList.appendChild(card);
    });
}

// Функция для добавления товара в корзину
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (cart.some(item => item.id === productId)) {
        alert("Товар уже в корзине.");
        return;
    }
    
    cart.push(product);
    alert(`${product.name} добавлен в корзину.`);
}

// Функция для отображения корзины
function viewCart() {
    console.log("dsds");
    const cartDiv = document.getElementById('cart');
    
    cartDiv.innerHTML = '';
    
    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>Корзина пуста.</p>';
        return;
    }
    
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)} 
            <button onclick="removeFromCart(${item.id})">Удалить</button></p>
        `;
        cartDiv.appendChild(itemDiv);
    });
}

// Функция для удаления товара из корзины
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    
    alert("Товар удален из корзины.");
}

//Cookie
// // Функции для работы с формой
// function openForm() {
//     document.getElementById("myForm").style.display = "block";
//     loadFormData(); 
// }

// function closeForm() {
//    document.getElementById("myForm").style.display = "none";
// }

// // Сохранение данных в cookies
// function saveToCookies(email, name, hobbies, gender, country) {
//    document.cookie = `email=${encodeURIComponent(email)};`;
//    document.cookie = `name=${encodeURIComponent(name)};`;
//    document.cookie = `hobbies=${encodeURIComponent(hobbies.join(','))};`;
//    document.cookie = `gender=${encodeURIComponent(gender)};`;
//    document.cookie = `country=${encodeURIComponent(country)};`;
// }

// // Получение данных из cookies
// function getCookie(name) {
//    const value = `; ${document.cookie}`;
//    const parts = value.split(`; ${name}=`);
//    if (parts.length === 2) return decodeURIComponent(parts.pop().split(';').shift());
// }

// // Загрузка данных из cookies в форму
// function loadFormData() {
//    const email = getCookie('email');
//    const name = getCookie('name');
//    const hobbies = getCookie('hobbies') ? getCookie('hobbies').split(',') : [];
//    const gender = getCookie('gender');
//    const country = getCookie('country');

//    if (email) document.getElementById('Email1').value = email;
//    if (name) document.getElementById('name').value = name;

//    hobbies.forEach(hobby => {
//        const checkbox = document.getElementById(`hobby${hobby}`);
//        if (checkbox) checkbox.checked = true;
//    });

//    if (gender) {
//        const genderRadio = document.querySelector(`input[name=gender][value="${gender}"]`);
//        if (genderRadio) genderRadio.checked = true;
//    }

//    if (country) document.getElementById('country').value = country;
// }

// function deleteAllCookies() {
//     var cookies = document.cookie.split(";");

//     for (var i = 0; i < cookies.length; i++) {
//         var cookie = cookies[i];
//         var eqPos = cookie.indexOf("=");
//         var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
//         document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
//     }
// }

// document.addEventListener('DOMContentLoaded', function() {
//    displayProducts();

//    document.getElementById('myForm').addEventListener('submit', function(event) {
//        event.preventDefault(); 

//        const email = document.getElementById('Email1').value;
//        const hobbies = [...document.querySelectorAll('input[type=checkbox]:checked')].map(hobby => hobby.value);
//        const name = document.getElementById('name').value;
//        const gender = document.querySelector('input[name=gender]:checked') ? document.querySelector('input[name=gender]:checked').value : null;
//        const country = document.getElementById('country').value;

//        const regex = /[A-Z]/g; 

//        if (!/\S+@\S+\.\S+/.test(email) || email.match(regex)) {
//            alert('Введен некорректный email');
//            return;
//        }

//        if (hobbies.length == 0) {
//            alert('Нужно выбрать хоть 1 хобби');
//            return;
//        }

//        saveToCookies(email, name, hobbies, gender, country);

//        alert(`Email: ${email}\nИмя: ${name}\nХобби: ${hobbies.join(', ')}\nПол: ${gender}\nСтрана: ${country}`);
       
//        closeForm();
//    });
// });



// Local Storage
function openForm() {
    document.getElementById("myForm").style.display = "block";
    loadFormData(); 
 }
 
 function closeForm() {
    document.getElementById("myForm").style.display = "none";
 }
 

 function saveToLocalStorage(email, name, hobbies, gender, country) {
    localStorage.setItem('email', email);
    localStorage.setItem('name', name);
    localStorage.setItem('hobbies', JSON.stringify(hobbies));
    localStorage.setItem('gender', gender);
    localStorage.setItem('country', country);
 }
 

 function loadFormData() {
    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');
    const hobbies = JSON.parse(localStorage.getItem('hobbies')) || [];
    const gender = localStorage.getItem('gender');
    const country = localStorage.getItem('country');
 
    if (email) document.getElementById('Email1').value = email;
    if (name) document.getElementById('name').value = name;
 
    hobbies.forEach(hobby => {
        const checkbox = document.getElementById(`hobby${hobby}`);
        if (checkbox) checkbox.checked = true;
    });
 
    if (gender) {
        const genderRadio = document.querySelector(`input[name=gender][value="${gender}"]`);
        if (genderRadio) genderRadio.checked = true;
    }
 
    if (country) document.getElementById('country').value = country;
 }
 

 function clearLocalStorage() {
    localStorage.clear();
 }
 

 document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
 
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
 
        const email = document.getElementById('Email1').value;
        const hobbies = [...document.querySelectorAll('input[type=checkbox]:checked')].map(hobby => hobby.value);
        const name = document.getElementById('name').value;
        const gender = document.querySelector('input[name=gender]:checked') ? document.querySelector('input[name=gender]:checked').value : null;
        const country = document.getElementById('country').value;
 
        const regex = /[A-Z]/g; 
 
        if (!/\S+@\S+\.\S+/.test(email) || email.match(regex)) {
            alert('Введен некорректный email');
            return;
        }
 
        if (hobbies.length == 0) {
            alert('Нужно выбрать хоть одно хобби');
            return;
        }
 
        // Сохраняем данные в Local Storage
        saveToLocalStorage(email, name, hobbies, gender, country);
 
        alert(`Email: ${email}\nИмя: ${name}\nХобби: ${hobbies.join(', ')}\nПол: ${gender}\nСтрана: ${country}`);
        
        // Закрываем форму после отправки
        closeForm();
    });
 });