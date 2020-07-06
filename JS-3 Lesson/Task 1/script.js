//  створити об'єкт (не меньше 5ти властивостей) який описує

let myDog = {
    breed: 'collie',
    name: 'Bred',
    age: 4,
    color: 'black',
    passport: true
}

let myDad = {
    name: 'Volodymyr',
    age: 64,
    car: false,
    wife: 'Tamara',
    chidren: true
}

let myCar = {
    model: 'VW Passat',
    year: 2001,
    color: 'black',
    engine: 2.5,
    transmission: 'auto'
}

let myFlat = {
    rooms: 2,
    floor: 2,
    balcony: true,
    city: 'Lviv',
    region: 'Shevchenko'
}

let book = {
    name: 'Javascript',
    year: 2018,
    cover: 'hard',
    pages: 524,
    author: 'Samuel L Jackson'
}

// Створити масив та вивести його в консоль

let arrDogs = ['Jack', 'Jill', 'Layma', 'Berta', 'Tyson'];
console.log(arrDogs);

let arrMen = ['Oleksiy', 'Volodymyr', 'Nazar', 'Galyna', 'Elina', 'Tamara'];
console.log(arrMen);

let arrCars = ['VW', 'Mercedes', 'Toyota', 'BMW', 'Audi'];
console.log(arrCars);

// створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом

const house = {
    stages: 5,
    city: 'Lviv',
    region: 'Shevchenko',
    entrance: {
        basement: true,
    },
    flatOwners: ['Petro', 'Alina', 'Volodymyr']
}

const driver = {
    name: 'Volodymyr',
    wife: {
        name: 'Tamara',
        car: false
    },
    age: 64,
    children: ['Kostya', 'Natalya'],
    car: true
}

const toy = {
    name: 'Model car BMW M5',
    year: 2020,
    remoteControl: true,
    engine: {
        model: 'electro',
        power: '3V'
    },
    spareParts: ['spoiler', 'big wheels']
}

const table = {
    brand: 'Italian Tables',
    model: '2547ldc',
    material: {
        main: 'Green Oak',
        legs: 'wood chipboard'
    },
    spareParts: ['nails', 'glue'],
    design: 'Italian Modern'
}

const bag = {
    brend: 'Lacoste',
    material: {
        leather: true,
    },
    model: 'Aventis',
    colors: ['blue', 'yellow'],
    price: '365$'
}

//  Дан массив:

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне - статус Андрія

console.log(users[7].status);

// статус Максима

console.log(users[10].status);

// ім'я передостаннього об'єкту

console.log(users[users.length - 2].name);

// ім'я третього об'єкта

console.log(users[2].name);

// вік Олега

console.log(users[6].age);

// вік Олі

console.log(users[9].age);

// вік + ім'я 5го об'єкта

console.log(`5 object name is ${users[4].name} and he is ${users[4].age} years old`);

// вік + сатус Анни

console.log(`Anna's status is ${users[5].status} and she is ${users[5].age} years old`);

// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName

// отримує текст з параграфа з id "content"

let peshka = document.getElementById('content');

// отримує текст з блоку з id "rules"

let divka = document.getElementById('rules');

// замініть текст параграфа з id 'content' на будь-який інший

peshka.innerText = 'Hello World';

// замініть текст параграфа з id 'rules' на будь-який інший

divka.innerText = 'Hi there';

// змініть кожному елементу колір фону на червоний

peshka.style.backgroundColor = 'red';
divka.style.backgroundColor = 'red';

// змініть кожному елементу колір тексту на синій

peshka.style.color = 'blue';
divka.style.color = 'blue';

// отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(divka.classList);

// отримати всі елементи з класом fc_rules

let fcRules = document.getElementsByClassName('fc_rules');
console.log(fcRules);

// поміняти колір тексту у всіх елементів fc_rules на червоний

for (let i = 0; i < fcRules.length; i++) {
    fcRules[i].style.color = 'red';
}

// class 

