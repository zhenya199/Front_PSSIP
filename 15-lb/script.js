const car = {
    make: 'Porsche',
    model: '911',
    year: 2020,
    color: 'white'
};

function Q(){
    alert(car.make);
    alert(car['model']);
};

function W(){
    delete car.color;
    alert(car.color);// Вывод: undefined
};

function E(){
    alert('make' in car);// Вывод: true
    alert(car.hasOwnProperty('model'));// Вывод: true
};

function R(){
    for (let key in car) {
    if (car.hasOwnProperty(key)) {
        alert(`${key}: ${car[key]}`);
    }
}
// Вывод:
// make: Porsche
// model: 911
// year: 2020
}


