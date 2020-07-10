// class 

// Взяти файл template_2.html та працювати в ньому
// Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший

let mainHeader = document.getElementById('main_header');
mainHeader.style.color = 'blue';

// робить шириниу елементу ul 400 пікселів

let ulElement = document.getElementsByTagName('ul');
ulElement[0].style.width = '400px';

// робить шириниу всіх елементів з класом linkList шириною 50%

let classLinkList = document.getElementsByClassName('linkList');

for (let i = 0; i < classLinkList.length; i++) {
    classLinkList[i].style.width = '50%';
}

// отримує текст який зберігається в елементі з класом listElement2

let getText = document.getElementsByClassName('listElement2');
getText[0].innerText;
console.log(getText);

// отримує всі елементи li та змінює ім колір фону на сірий

let lishky = document.getElementsByTagName('li');
for (let i = 0; i < lishky.length; i++) {
    lishky[i].style.backgroundColor = 'grey';
}

// отримує всі елементи 'a' та додає їм клас anchor

let ashky = document.getElementsByTagName('a');
for (let i = 0; i < ashky.length; i ++) {
    ashky[i].classList.add('anchor');
}

// отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (let i = 0; i < ashky.length; i++) {
    if (ashky[i].innerText === 'link3') {
        ashky[i].style.fontSize = '40px';
    }
}

// отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (let i = 0; i < ashky.length; i++) {
    ashky[i].classList.add(`element_${ashky[i].innerText}`);
}

// отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let subHeader = document.getElementsByClassName('sub-header');
for (let elem of subHeader) {
elem.style.backgroundColor = `${prompt('Enter color?')}`;
}

// отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

for (let elem of subHeader) {
    if (elem.innerText === 'content 2 segment') {
        elem.style.color = `${prompt('Change color!')}`;
    }
}

// отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let contentOne = document.getElementsByClassName('content_1');
contentOne[0].innerText = `${prompt('Enter text')}`;

// отримати елементи p та змінити їм paddin на довільне значення

let peshky = document.getElementsByTagName('p');

for (let elem of peshky) {
elem.style.padding = '25px';
}

// отримати елементи з класом text2 та змінити їм текст на довільне значення

let tetxTwoP = document.getElementsByClassName('text2');

for (let i = 0; i < tetxTwoP.length; i++) {
    tetxTwoP[i].innerText = 'Hello Okten!';
}