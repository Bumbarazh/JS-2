// Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let divText = document.querySelector('#text');
divText.onclick = () => {
   divText.style.display = 'none';
}

// Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let button = document.querySelector('button');
button.onclick = () => {
    button.style.display = 'none';
}

// створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let formOne = document.forms.myform;
formOne.submit.onclick = (ev) => {
    ev.preventDefault();
    let inputOfAge = formOne.myinput.value;
    if (inputOfAge < 18) {
        alert('Підрости ще!');
    } else {
        alert('Проходь далі')
    }
}

// Создайте меню, которое раскрывается/сворачивается при клике

let menu = document.querySelector('.menu');
let ulList = document.querySelector('.menu-list');
const funcclickOn = () => {
    ulList.classList.toggle('menu-list-two');
}

const funcClickOff = () => {
    ulList.classList.toggle('menu-list');
}

menu.addEventListener('click', funcclickOn);
menu.removeEventListener('click', funcClickOff);

// Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.

let commnets = [
    {
        title: 'id labore ex et quam laborum',
        body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
    }, {
        title: 'quo vero reiciendis velit similique earum',
        body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptate'
    }, {
        title: 'est natus enim nihil est',
        body: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delec'
    }, {
        title: 'alias odio sit',
        body: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia volu'
    }, {
        title: 'vero eaque aliquid doloribus et',
        body: 'harum non quasi et ratione\ntempore iure ex voluptates in ratione'
    }
]

let newDiv = document.createElement('div');
document.body.appendChild(newDiv);
for (let comm of commnets) {
    let titleOfCom = document.createElement('div');
    titleOfCom.classList.add('title');
    titleOfCom.innerText = comm.title;
    newDiv.appendChild(titleOfCom);

    let bodyOfCom = document.createElement('p');
    bodyOfCom.classList.add('body-of-com')
    bodyOfCom.innerText = comm.body;
    newDiv.appendChild(bodyOfCom);

    const funcTitleOn = () => {
        bodyOfCom.classList.toggle('open');
    }
    
    const funcTitleOff = () => {
        bodyOfCom.classList.toggle('body-of-com');
    }

    titleOfCom.addEventListener('click', funcTitleOn);
    titleOfCom.removeEventListener('click', funcTitleOff);
}

// створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та 
// виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let myFormTwo = document.forms.myformtwo;
let myFormThree = document.forms.myformthree;
let buttontTwo = document.getElementById('buttontwo');

buttontTwo.onclick = () => {
    console.log(`${myFormThree.name.value}\n${myFormThree.surname.value}\n${myFormTwo.age.value}\n${myFormTwo.address.value}`);
}

// Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

const createTable = function (tr, td, text) {
    let table = document.createElement('table');
    document.body.appendChild(table);

    for (let i = 0; i < tr; i++) {
        let trOfTable = document.createElement('tr');
        table.appendChild(trOfTable);

        for (let i = 0; i < td; i++) {
            let tdOfTable = document.createElement('td');
            tdOfTable.innerText = text
            trOfTable.appendChild(tdOfTable);
        }
    }
   
}

createTable(6, 5, 'Hello');

// Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

const createTableThree = function (tr, td, text) {
    
    let tableTwo = document.createElement('table');

    for (let i = 0; i < tr; i++) {
        let rows = document.createElement('tr');
        
        for (let i = 0; i < td; i++) {
            let tds = document.createElement('td');
            tds.innerHTML = text;
            rows.appendChild(tds);
        }

        tableTwo.appendChild(rows);
    }

    document.body.appendChild(tableTwo);
}

let buttontThree = document.querySelector('#butForTable');

buttontThree.onclick = () => {
    let inputRows = document.forms.createtable.rows.value;
    let inputTds = document.forms.createtable.td.value;
    let inputText = document.forms.createtable.text.value;

    createTableThree(+inputRows, +inputTds, inputText);
}

// Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let images = [
    {
        img: '/images/kruzak-200-belyi-diski-litio-pri.jpg'
    }, {
        img: '/images/ght.jpg'
    }, {
        img: '/images/priroda-kruzak-200.jpg'
    }
];

let carousel = document.getElementById('karusel');
let img = document.createElement('img');
let buttonLeft = document.createElement('button');
let buttonRight = document.createElement('button');

img.style.width = '300px';
buttonLeft.innerText = 'Left';
buttonRight.innerText = 'Right';

carousel.appendChild(img);
carousel.appendChild(buttonLeft);
carousel.appendChild(buttonRight);

let count = 0;

img.src = images[count].img;

buttonLeft.onclick = () => {
    if (count - 1 < 0) {
        count = images.length - 1;
    } else {
        count -= 1;
    }

    img.src = images[count].img;
}

buttonRight.onclick = () => {
    if (count + 1 > images.length - 1) {
        count = 0;
    } else {
        count += 1;
    }

    img.src = images[count].img;
}


// Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let cenzureWords = ['блін', 'курче', 'йопти', 'бляха-муха', 'йолки-палки'];

let inputBadWords = document.getElementById('inp');
let but = document.querySelector('#but');

but.onclick = () => {
    if (cenzureWords.includes(inputBadWords.value)) {
        alert('Warning');
    }
}

// Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

let cenzureWordsTwo = ['блін', 'курче', 'йопти', 'бляха-муха', 'йолки-палки'];
let inputOfBadWords = document.querySelector('#inpTwo');
let butTwo = document.querySelector('#butTwo');

butTwo.onclick = (ev) => {
//   ev.preventDefault();
  let splited = inputOfBadWords.value.split(' ');

  for (let val of splited) {
      if (cenzureWordsTwo.includes(val)) {
          alert(`Warning ${val} is a bad word!`);
      }
    }
}

// создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// рішення задачі на сторінці rules.html

// взять массив пользователей

let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
    ];

// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.

// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)

// Данные выводить в документ

let usersWrite = document.querySelector('.usersWithAddress');
for (let user of usersWithAddress) {
    let divWithUsers = document.createElement('div');
    divWithUsers.innerText  = JSON.stringify(user);
    usersWrite.appendChild(divWithUsers);
}

let getInput = document.querySelector('.checkOne');
getInput.onclick = () => {
    usersWrite.innerText = '';
    if (getInput.checked) {
        for (let user of usersWithAddress) {
            if (!user.status) {
            let divWithUsers = document.createElement('div');
            divWithUsers.innerText  = JSON.stringify(user);
            usersWrite.appendChild(divWithUsers);
            }
        }
    } else {
        for (let user of usersWithAddress) {
            let divWithUsers = document.createElement('div');
            divWithUsers.innerText  = JSON.stringify(user);
            usersWrite.appendChild(divWithUsers);
        }
    }
}

// 2й - оставляет старше 29 лет включительно
let getInputTwo = document.querySelector('.checkTwo')
getInputTwo.onclick = () => {
    usersWrite.innerText = '';
    if (getInputTwo.checked) {
        for (let user of usersWithAddress) {
            if (user.age > 29) {
            let divWithUsers = document.createElement('div');
            divWithUsers.innerText  = JSON.stringify(user);
            usersWrite.appendChild(divWithUsers);
            }
        }

    } else {
        for (let user of usersWithAddress) {
            let divWithUsers = document.createElement('div');
            divWithUsers.innerText  = JSON.stringify(user);
            usersWrite.appendChild(divWithUsers);
        }
    }
}

// 3й - оставляет тех у кого город киев

let getInputThree = document.querySelector('.checkThree')
getInputThree.onclick = () => {
    usersWrite.innerText = '';
    if (getInputThree.checked) {
        for (let user of usersWithAddress) {
            if (user.address.city === 'Kyiv') {
            let divWithUsers = document.createElement('div');
            divWithUsers.innerText  = JSON.stringify(user);
            usersWrite.appendChild(divWithUsers);
            }
        }

    } else {
        for (let user of usersWithAddress) {
            let divWithUsers = document.createElement('div');
            divWithUsers.innerText  = JSON.stringify(user);
            usersWrite.appendChild(divWithUsers);
        }
    }
}