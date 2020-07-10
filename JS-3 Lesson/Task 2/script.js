// создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

const car = {
    brend: 'BMW',
    modelName: 'M3',
    year: 2018
}

const house = {
    street: 'T. Shevchenko',
    number: 124,
    region: 'Shevchenko'
}

const flat = {
    stage: 3,
    rooms: 3,
    square: '65m2'
}

const user = {
    name: 'Sergiy',
    sex: 'male',
    yearOfBirth: 1994
}

const bag = {
    producer: 'Wrangler',
    material: 'leather',
    price: '354$'
}

// создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект.

const knife = {
    countryProducer: 'Swizerland',
    parts: ['little knife', 'scissors', 'pliers', 'saw'],
    color: 'red',
    acsessories: {cover: 'leather', box: true}
}

const man = {
    children: ['son', 'daughter'],
    wife: {name: 'Lora', age: 29},
    property: 'house'
}

const woman = {
    husband: {job: 'plumber', uniform: true},
    mother: 'Karina',
    father: 'Stepan',
    jevelry: ['silver ring', 'gold chain']
}

const washingMachine = {
    functions: ['sanitary', 'delicates', 'daily washing'],
    maximumLoad: '6kg',
    dimenssions: {width: '65cm', height: '80cm', deepness: '52cm'}
}

const apple = {
    vitamins: ['A', 'C', 'D', 'E'],
    sort: 'Malus domestica',
    nutritionalValues: {proteins: '0.3gr', carbohydrates: '13gr', fat: '0,2gr'}
}

// При помощи for in вывести все ключи всех объектов из задания 1 и 2

for (let key in car) {
    console.log(key);
}

for (let key in house) {
    console.log(key);
}

for (let key in flat) {
    console.log(key);
}

for (let key in user) {
    console.log(key);
}

for (let key in bag) {
    console.log(key);
}

for (let key in knife) {
    console.log(key);
}

for (let key in man) {
    console.log(key);
}

for (let key in woman) {
    console.log(key);
}

for (let key in washingMachine) {
    console.log(key);
}

for (let key in apple) {
    console.log(key);
}

// При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

console.log(Object.keys(car));

console.log(Object.keys(house));

console.log(Object.keys(flat));

console.log(Object.keys(user));

console.log(Object.keys(bag));

console.log(Object.keys(knife));

console.log(Object.keys(man));

console.log(Object.keys(woman));

console.log(Object.keys(washingMachine));

console.log(Object.keys(apple));

// Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.

let arrOfCars = [
    {model: 'BMW', year: 2014, power: '135kW', color: 'black'},
    {model: 'Mercedes', year: 2004, power: '155kW', color: 'grey'},
    {model: 'Lamborghini', year: 2008, power: '235kW', color: 'yellow'},
    {model: 'Volkswagen', year: 2011, power: '145kW', color: 'blue'},
    {model: 'Fiat', year: 2019, power: '95kW', color: 'white'},
    {model: 'Toyota', year: 2012, power: '165kW', color: 'black'},
    {model: 'Ferrari', year: 2017, power: '293kW', color: 'red'},
    {model: 'Nissan', year: 2002, power: '115kW', color: 'brown'},
    {model: 'Chevrolet', year: 2016, power: '85kW', color: 'green'},
    {model: 'Skoda', year: 2007, power: '141kW', color: 'pink'}
]

// Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.

let arrOfCities = [
    {name: 'Lviv', population: '800000', contry: 'Ukraine', region: 'Lviv'},
    {name: 'Washington', population: '8000000', contry: 'USA', region: 'Columbia'},
    {name: 'Warsaw', population: '6200000', contry: 'Poland', region: 'Warsaw'},
    {name: 'Kyiv', population: '2000000', contry: 'Ukraine', region: 'Kyiv'},
    {name: 'Berlin', population: '4000000', contry: 'Germany', region: 'Berlin'},
    {name: 'London', population: '5800000', contry: 'Great Britain', region: 'London'},
    {name: 'Rome', population: '4600000', contry: 'Italy', region: 'Rome'},
    {name: 'Liublin', population: '400000', contry: 'Poland', region: 'Liublin'},
    {name: 'Beijing', population: '36000000', contry: 'China', region: 'Bejing'},
    {name: 'Tokio', population: '14000000', contry: 'Japan', region: 'Tokio'}
]

// Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

let arrOfCarsTwo = [
    {model: 'BMW', year: 2014, power: '135kW', color: 'black', driver: {name: 'Kolja', age: 32, sex: 'male', experience: '3 years'}},
    {model: 'Mercedes', year: 2004, power: '155kW', color: 'grey', driver: {name: 'Andriy', age: 22, sex: 'male', experience: '1.5 years'}},
    {model: 'Lamborghini', year: 2008, power: '235kW', color: 'yellow', driver: {name: 'Vadim Stepanych', age: 44, sex: 'male', experience: '7 years'}},
    {model: 'Volkswagen', year: 2011, power: '145kW', color: 'blue', driver: {name: 'Oleg', age: 37, sex: 'male', experience: '6 years'}},
    {model: 'Fiat', year: 2019, power: '95kW', color: 'white', driver: {name: 'Anja', age: 26, sex: 'female', experience: '5 years'}},
    {model: 'Toyota', year: 2012, power: '165kW', color: 'black', driver: {name: 'Volodymyr', age: 30, sex: 'male', experience: '5 years'}},
    {model: 'Ferrari', year: 2017, power: '293kW', color: 'red', driver: {name: 'Scott', age: 46, sex: 'male', experience: '15 years'}},
    {model: 'Nissan', year: 2002, power: '115kW', color: 'brown', driver: {name: 'Nazar', age: 29, sex: 'male', experience: '4 years'}},
    {model: 'Chevrolet', year: 2016, power: '85kW', color: 'green', driver: {name: 'Oleksiy', age: 31, sex: 'male', experience: '6 years'}},
    {model: 'Skoda', year: 2007, power: '141kW', color: 'pink', driver: {name: 'Vitalina', age: 35, sex: 'female', experience: '2 years'}}
]

// проитерировать каждый массив из задания 5,6,7 при помощи while.

let i = 0;
while (i < arrOfCars.length) {
    // console.log(arrOfCars[i]);
    i++;
}

let iTwo = 0;
while (iTwo < arrOfCities.length) {
    // console.log(arrOfCities[iTwo]);
    iTwo++;
}

let iThree = 0;
while (iThree < arrOfCarsTwo.length) {
    // console.log(arrOfCarsTwo[iThree]);
    iThree++;
}

// проитерировать каждый массив из задания 5,6,7 при помощи for

for (let i = 0; i < arrOfCars.length; i++) {
    console.log(arrOfCars[i]);
}

for (let i = 0; i < arrOfCities.length; i++) {
    console.log(arrOfCities[i]);
}

for (let i = 0; i < arrOfCarsTwo.length; i++) {
    console.log(arrOfCarsTwo[i]);
}

// проитерировать каждый массив из задания 5,6,7 при помощи  for of

for (let elem of arrOfCars) {
    // console.log(elem);
}

for (let elem of arrOfCities) {
    // console.log(elem);
}

for (let elem of arrOfCarsTwo) {
    // console.log(elem);
}

// взять объекты из задания 1 и превратить каждый в json.

let carJson = JSON.stringify(car);

let houseJson = JSON.stringify(house);

let flatJson = JSON.stringify(flat);

let userJson = JSON.stringify(user);

let bagJson = JSON.stringify(bag);

let knifeJson = JSON.stringify(knife);

let manJson = JSON.stringify(man);

let womanJson = JSON.stringify(woman);

let washingMachineJson = JSON.stringify(washingMachine);

let appleJson = JSON.stringify(apple);

// взять json из задания 11 и превратить их обратно в объекты.

let carParsed = JSON.parse(carJson);

let houseParsed = JSON.parse(houseJson);

let flatParsed = JSON.parse(flatJson);

let userParsed = JSON.parse(userJson);

let bagParsed = JSON.parse(bagJson);

let knifeParsed = JSON.parse(knifeJson);

let manParsed = JSON.parse(manJson);

let womanParsed = JSON.parse(womanJson);

let washingMachineParsed = JSON.parse(washingMachineJson);

let appleParsed = JSON.parse(appleJson);

// взять массив из задания 5,в цикле перебрать его объекты превратив их в json

for (let i = 0; i < arrOfCars.length; i++) {
    JSON.stringify(arrOfCars[i]);
}

// взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

for (let i = 0; i < arrOfCities.length; i++) {
    JSON.stringify(arrOfCities[i]);
}

// взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
let newArrOfCars = [];
for (let i = 0; i < arrOfCarsTwo.length; i++) {
    let arrJson = JSON.stringify(arrOfCarsTwo[i]);
    newArrOfCars[i] = arrOfCarsTwo[i];
}

// Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

const usersOne = [
    {name: 'Oleg', age: 25, sex: 'male', skills: ['Js', 'Java', 'Python']},
    {name: 'Matia', age: 24, sex: 'female', skills: ['Html', 'Java', 'Js']},
    {name: 'Oleksij', age: 32, sex: 'male', skills: ['MySql', 'Ruby', 'PHP']},
    {name: 'Karina', age: 18, sex: 'female', skills: ['Java', 'MongoDB', 'Js']},
    {name: 'Volodymyr', age: 29, sex: 'male', skills: ['Css', 'Html', 'Java']},
    {name: 'Olha', age: 31, sex: 'female', skills: ['Ruby', 'MySql', 'Css']},
    {name: 'Oleg', age: 25, sex: 'male', skills: ['MongoDB', 'PHP', 'Html']}
];

for (let i = 0; i < usersOne.length; i++) {
    for (let j = 0; j < usersOne[i].skills.length; j++) {
        console.log(usersOne[i].skills[j]);
    }
}

// Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

const usersTwo = [
    {name: 'Oleg', age: 25, sex: 'male', skills: ['Js', 'Java', 'Python']},
    {name: 'Matia', age: 24, sex: 'female', skills: ['Html', 'Java', 'Js']},
    {name: 'Oleksij', age: 32, sex: 'male', skills: ['MySql', 'Ruby', 'PHP']},
    {name: 'Karina', age: 18, sex: 'female', skills: ['Java', 'MongoDB', 'Js']},
    {name: 'Volodymyr', age: 29, sex: 'male', skills: ['Css', 'Html', 'Java']},
    {name: 'Olha', age: 31, sex: 'female', skills: ['Ruby', 'MySql', 'Css']},
    {name: 'Oleg', age: 25, sex: 'male', skills: ['MongoDB', 'PHP', 'Html']}
];

const emptyArray = [];

for (let i = 0; i < usersTwo.length; i++) {
    for (let j = 0; j < usersTwo[i].skills.length; j++) {
        emptyArray.push(usersTwo[i].skills[j]);
    }
}

console.log(emptyArray);

// За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

let users = [
    {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
    {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
    {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
    {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
    {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
];

for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].skills.length; j++) {
        console.log(users[i].skills[j]);
    }
}

// З масиву usersThree за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив

let usersThree = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, 
{
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, 
{
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, 
{
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, 
{
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, 
{
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, 
{
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
},
{
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
},
{
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, 
{
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, 
{
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

let emptyArrayTwo = [];

for (let i = 0; i < usersThree.length; i++) {
        emptyArrayTwo.push(usersThree[i].address);
}

console.log(emptyArrayTwo);

// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

for (let i = 0; i < usersThree.length; i++) {
    let usersName = document.createElement('div');
    usersName.style.color = 'red';
    usersName.style.fontWeight = 'bold';

    usersName.innerHTML = `Hello my name is ${usersThree[i].name}. I am ${usersThree[i].age} years old. My status is ${usersThree[i].status}. And I live in ${usersThree[i].address.city}`;
    document.body.appendChild(usersName);
}

// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

for (let i =  0; i < usersThree.length; i++) {
    let createDiv = document.createElement('div');  
    
    for (let key in usersThree[i]) {
        
        let createDivTwo = document.createElement('div');
        createDivTwo.innerHTML = JSON.stringify(usersThree[i][key]);
        createDiv.appendChild(createDivTwo);

    }

    document.body.appendChild(createDiv);
}

// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// 

for (let i =  0; i < usersThree.length; i++) {
    let createDiv = document.createElement('div');  
    
    for (let key in usersThree[i]) {
        
        let createDivTwo = document.createElement('div');
        createDivTwo.innerHTML = JSON.stringify(usersThree[i][key]);
        createDiv.appendChild(createDivTwo);

    }
    for (let key in usersThree[i].address) {
        let createDivThree = document.createElement('div');
        createDivThree.innerHTML = usersThree[i].address[key];
        createDiv.appendChild(createDivThree); 
    }



    document.body.appendChild(createDiv);
}

// Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id". Записати цей об'єкт в новий масив

let usersWithId = [
{id: 1, name: 'vasya', age: 31, status: false},
{id: 2, name: 'petya', age: 30, status: true},
{id: 3, name: 'kolya', age: 29, status: true},
{id: 4, name: 'olya', age: 28, status: false},
];

let citiesWithId = [
{user_id: 1, country: 'Ukraine', city: 'Ternopil'},
{user_id: 2, country: 'Poland', city: 'Krakow'},
{user_id: 3, country: 'USA', city: 'Portland'},
{user_id: 4, country: 'USA', city: 'Miami'},
];

let anotherArr = [];

for (let i = 0; i < usersWithId.length; i++) {

    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            usersWithId[i].address = citiesWithId[j]
        }
    }
    anotherArr[i] = usersWithId[i];
}
console.log(anotherArr);

// створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

let spanChangeByTag = document.getElementsByTagName('span');
let spanChangeById = document.getElementById('divchyk');
let spanChangeByClass = document.getElementsByClassName('classik');

// змінити цей текст використовуючи селектори id, class,  tag

spanChangeByClass[0].innerText = 'Hi World!';
spanChangeById.innerText = 'Hi World 2';
spanChangeByTag[0].innerText = 'Hi World 3';

// змінити висоту та ширину блоку використовуючи селектори id, class,  tag

spanChangeByTag[0].style.height = '200px';
spanChangeByTag[0].style.width = '200px';

spanChangeById.style.height = '300px';
spanChangeById.style.width = '300px';

spanChangeByClass[0].style.height = '400px';
spanChangeByClass[0].style.width = '400px';

// за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

let tableCreate = document.createElement('table');
let rowCreate = document.createElement('tr');
let columnCreate = document.createElement('td');
let columnCreateOne = document.createElement('td');
let columnCreateTwo = document.createElement('td');

columnCreate.innerText = 'Hello';
columnCreateOne.innerText = 'World';
columnCreateTwo.innerText = 'I am here';

document.body.appendChild(tableCreate);
document.getElementsByTagName('table')[0].appendChild(rowCreate);
document.getElementsByTagName('tr')[0].appendChild(columnCreate);
document.getElementsByTagName('tr')[0].appendChild(columnCreateOne);
document.getElementsByTagName('tr')[0].appendChild(columnCreateTwo);
document.createElement('br');

// за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

let tableTwoCreate = document.createElement('table');
document.body.appendChild(tableTwoCreate);
document.createElement('br');

for (let i = 0; i < 10; i++) {
    let rowTwoCreate = document.createElement('tr');
    document.getElementsByTagName('table')[0].appendChild(rowTwoCreate);

    for (let j = 1; j <= 3; j++) {
        let columnTwoCreate = document.createElement('td');
        columnTwoCreate.innerText = `hello ${j}`;
        document.getElementsByTagName('tr')[i].appendChild(columnTwoCreate);
    }

}

// за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

let nValue = +prompt('Enter your number', 5);
let mValue = +prompt('Enter next nmber', 6);

let tableThreeCreate = document.createElement('table');
document.body.appendChild(tableThreeCreate);

for (let i = 0; i < nValue; i++) {
    let rowThreeCreate = document.createElement('tr');
    document.getElementsByTagName('table')[0].appendChild(rowThreeCreate);

    for (let j = 1; j <= mValue; j++) {
        let columnThreeCreate = document.createElement('td');
        columnThreeCreate.innerText = `hello ${j}`;
        document.getElementsByTagName('tr')[i].appendChild(columnThreeCreate);
    }

}

// є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// // Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.


let headersHTwo = document.getElementsByTagName('h2');
let ulElem = document.createElement('ul');
let getClassContent = document.getElementById('content').appendChild(ulElem);

for (let i = 0; i < headersHTwo.length; i++) {
    let createLiElem = document.createElement('li');
    createLiElem.innerText = document.getElementsByTagName('h2')[i].innerText;
    document.getElementsByTagName('ul')[0].appendChild(createLiElem);
}

// Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

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

for (let i = 0; i < rules.length; i++) {
    
    let titles = document.createElement('h2');
    let bodyOfRules = document.createElement('p');
    let emptydiv = document.createElement('div');

    titles.innerText = rules[i].title;
    bodyOfRules.innerText = rules[i].body;
    
    document.getElementById('wrap').appendChild(emptydiv).appendChild(titles);
    document.getElementById('wrap').appendChild(emptydiv).appendChild(bodyOfRules);
}