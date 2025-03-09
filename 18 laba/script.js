function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var agree = document.getElementById("agree").checked;

    var namePattern = /^[A-Za-zА-Яа-я]+$/;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!name.match(namePattern)) {
        alert("Имя должно содержать только буквы.");
        return false;
    }

    if (!email.match(emailPattern)) {
        alert("Введите действительный Email.");
        return false;
    }

    if (password.length < 6) {
        alert("Пароль должен содержать минимум 6 символов.");
        return false;
    }

    if (!agree) {
        alert("Вы должны согласиться с условиями.");
        return false;
    }

    return true;
}

function submitForm() {
    if (validateForm()) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var dob = document.getElementById("dob").value;
        var gender = document.getElementById("gender").value;
        var bio = document.getElementById("bio").value;
        var agree = document.getElementById("agree").checked;
        var preferences = document.querySelector('input[name="preferences"]:checked').value;

        var outputText = "Имя: " + name + "\n" +
                         "Email: " + email + "\n" +
                         "Пароль: " + password + "\n" +
                         "Дата рождения: " + dob + "\n" +
                         "Пол: " + gender + "\n" +
                         "Биография: " + bio + "\n" +
                         "Согласие: " + (agree ? "Согласен" : "Не согласен") + "\n" +
                         "Предпочтения: " + preferences;

        alert(outputText); // Вывод в диалоговое окно
        document.getElementById("output").innerText = outputText; // Вывод на html-страницу
    }
}

// Пример работы с регулярными выражениями и методами объектов
var text = "Пример текста для поиска, замены и проверки.";

// Создание регулярного выражения
var regex1 = /поиск/i; // флаг "i" для нечувствительности к регистру
console.log(regex1.test(text)); // true

// Флаг "g" - глобальный поиск
var regex2 = /а/g;
console.log(text.match(regex2)); // [ 'а', 'а', 'а' ]

// Флаг "m" - мультистрочный поиск
var multiLineText = "Первая строка\nВторая строка";
var regex3 = /^втор/i;
console.log(regex3.test(multiLineText)); // false (без флага "m")
var regex4 = /^втор/im;
console.log(regex4.test(multiLineText)); // true (с флагом "m")

// Метод test()
var regex5 = /текст/i;
console.log(regex5.test(text)); // true

// Метод exec()
var result = regex5.exec(text);
console.log(result); // [ 'текст', index: 7, input: 'Пример текста для поиска, замены и проверки.', groups: undefined ]

// Метод split()
var words = text.split(/\s+/);
console.log(words); // [ 'Пример', 'текста', 'для', 'поиска,', 'замены', 'и', 'проверки.' ]

// Метод match()
var matches = text.match(/т/gi);
console.log(matches); // [ 'т', 'т', 'т', 'т' ]

// Метод search()
var index = text.search(/замены/);
console.log(index); // 22

// Метод replace()
var newText = text.replace(/поиска/g, "нахождения");
console.log(newText); // Пример текста для нахождения, замены и проверки.
