// створити функцію яка виводить масив

const funcArr = function (a, b, c, d) {
    let newArr = [a, b, c, d];
    return newArr;
}

console.log(funcArr(25, 65, 'element', [65, 'kol']));

// створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію

const funcRandom = function () {
    let emptyArr = [];
    for (let i = 0; i < 10; i++) {
    let randomValue = Math.floor(Math.random()*100);
    emptyArr.push(randomValue);
    }
    return emptyArr;
}    

console.log(funcRandom());

// створити функцію яка приймає три числа та виводить та повертає найменьше.

const funcMin = function (firstNum, secondNum, thirdNum) {
    let min = Math.min(firstNum, secondNum, thirdNum);
    return min;
}

console.log(funcMin(35, 65, 98));

// створити функцію яка приймає три числа та виводить та повертає найбільше.

const funcMax = function (firsNum, seconNum, thirNum) {
    let max = Math.max(firsNum, seconNum, thirNum);
    return max;
}

console.log(funcMax(35, 65, 98));

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

const funcMinMax = function () {
    let min = 0;
    let max = 0;
    for (let i = 0; i < arguments.length; i++) {

        if(min > arguments[i]) {
            min = arguments[i];
        }
        if (max < arguments[i]) {
            max = arguments[i];
        }

    }
    
    console.log(max);
    return min;
}

console.log(funcMinMax(25, 65, 45, 87, 45, 1, 36, -85, 46));

// створити функцію яка повертає найбільше число з масиву

const newArrayForFunc = [12, 32, 14, 98, 47, 56, 74, 1, 2, 78, 156, 789, -45];

const funcMaxNumberOfArr = function () {
    let maxnumber = Math.max(...newArrayForFunc);
    return maxnumber;
}

console.log(funcMaxNumberOfArr());

// створити функцію яка повертає найменьше число з масиву

const funcMinNumberOfArr = function () {
    let minnumber = Math.min(...newArrayForFunc);
    return minnumber;
}

console.log(funcMinNumberOfArr());

// створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

const funcSumOfArr = function () {
    let sum = 0;
    for (let i = 0; i < newArrayForFunc.length; i++) {
        sum += newArrayForFunc[i];
    }
    return sum;
}

console.log(funcSumOfArr());

// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

const funcMiddleNumOfArr = function () {
    let sum = 0;
    for (let i = 0; i < newArrayForFunc.length; i++) {
        sum += newArrayForFunc[i];
    }
    sum /= newArrayForFunc.length;
    return sum;
}

console.log(funcMiddleNumOfArr());

// Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

const funcOfArrWithObj = function () {
    let count = arguments[0].length;
    return count;
}

console.log(funcOfArrWithObj([25, 4, 5, [56, 86], {name: 'Ivan', age: 25}, 'Kolja', 65]));

// Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

function funcOfArrObj () {
    let count = 0;
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 1; j < arguments[i].length; j++) {
            count += j;
        }
    }
    return count;
}

console.log(funcOfArrObj([{
    name: 'Oleg',
    age: 25
}, {
    knife: 'Victorynox',
    color: 'red'
}, {
    womanName: 'Galyna',
    children: true
}, {
    father: 'Volodymyr',
    mother: 'Tamara'
}, {
    TV: 'Sharp',
    screenSize: '42'
}
]));

// створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

const simpleArr = [1,2,3,4];
const simpleArrTwo = [2,3,4,5];
const sumOfIndOfarrays = [];

function sumOfIndOfArr () {

    for (let i = 0; i < simpleArr.length; i++) {
            sumOfIndOfarrays[i] = simpleArr[i] + simpleArrTwo[i];
    }

    return sumOfIndOfarrays;
}

console.log(sumOfIndOfArr());

// приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

function arrRecieve (arr, i) {
    let buf = arr[i];
    arr[i] = arr[i + 1];
    arr[i+1] = buf;
    return arr;
}

console.log(arrRecieve([12, 25, 65, 45, 32, 78, 2, 74, 31, 6], 5));

// створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.

const funcZeroElem = function () {
    const arrWithZero = [1,0,6,0,3];
    let removed;

    for (let i = 0; i < arrWithZero.length; i++) {
        if (arrWithZero[i] === 0) {
        removed = arrWithZero.splice(i, 1);
        arrWithZero.push(removed[0]);
        }
    }

    return arrWithZero;
}

console.log(funcZeroElem());

// Створити функцію яка : Додає в боді блок з текстом "Hello owu"

function addBlockToBody () {
    let createHOne = document.createElement('H1');
    createHOne.innerText = 'Hello OWU!';
    createHOne.style.textAlign = 'center';
    createHOne.style.color = 'blue';
    document.body.appendChild(createHOne);
}

addBlockToBody();

// Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

const addToBodyElements = function (divElem, textOfElem) {
    let createDiv = document.createElement(divElem);
    createDiv.innerText = textOfElem;
    document.body.appendChild(createDiv);
}

addToBodyElements('div', 'I learn Javascript in OktenWeb!');

// приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів. Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

const addArrCarInId = function () {
    let addDiv = document.createElement('div');
    addDiv.id = arguments[1];
    document.body.appendChild(addDiv);

    for (let i = 0; i < arguments[0].length; i++) {
        let divcars = document.createElement('div');
        divcars.innerText = arguments[0][i].car + ' ' + arguments[0][i].color;
        document.getElementById('divka').appendChild(divcars);
    }
    
}

addArrCarInId([
    {car: 'BMW', color: 'black'}, 
    {car:'Honda', color: 'red'}, 
    {car:'Volvo', color: 'blue'},
    {car:'Ferari', color: 'white'},
    {car:'Ford', color: 'silver'}
], 'divka');

// приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів. Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Для кожної властивості створити всередені блока автомоблія свій блок

const addArrOfCars = function () {
    let addDivOfCars = document.createElement('div');
    addDivOfCars.id = arguments[1];
    document.body.appendChild(addDivOfCars);

    for (let i = 0; i < arguments[0].length; i++) {
        let divOfCars = document.createElement('div');
        let carValueBlock = document.createElement('h2');
        let colorValueBlock = document.createElement('p');
        carValueBlock.innerText = arguments[0][i].car;
        colorValueBlock.innerText = arguments[0][i].color;

        document.getElementById('cars-elem').appendChild(divOfCars).appendChild(carValueBlock);
        document.getElementById('cars-elem').appendChild(divOfCars).appendChild(colorValueBlock);

    }
    
}

addArrOfCars([
    {car: 'BMW', color: 'black'}, 
    {car:'Honda', color: 'red'}, 
    {car:'Volvo', color: 'blue'},
    {car:'Ferari', color: 'white'},
    {car:'Ford', color: 'silver'}
], 'cars-elem');

// функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id", та повертає масив цих з'єднаних об'єктів.

let usersWithId = [
{id: 1, name: 'vasya', age: 31, status: false},
{id: 2, name: 'petya', age: 30, status: true},
{id: 3, name: 'kolya', age: 29, status: true},
{id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
{user_id: 3, country: 'USA', city: 'Portland'},
{user_id: 1, country: 'Ukraine', city: 'Ternopil'},
{user_id: 2, country: 'Poland', city: 'Krakow'},
{user_id: 4, country: 'USA', city: 'Miami'}
];

const funcOfUsersArrays = function (usersWithId, citiesWithId) {
    
    for (let i = 0; i < usersWithId.length; i++) {
        for (let j = 0; j < citiesWithId.length; j++) {
            
            if (usersWithId[i].id === citiesWithId[j].user_id) {
                usersWithId[i].address = citiesWithId[j]
            }
    
        }
    }
    return usersWithId;
}

console.log(funcOfUsersArrays(usersWithId, citiesWithId));

// Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці. При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];