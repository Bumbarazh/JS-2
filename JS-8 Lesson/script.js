// Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

let textArea = document.getElementById('textArea');

textArea.addEventListener('input', valueOfInputText);

function valueOfInputText (e) {
    textArea.placeholder = e.target.value;
    localStorage.setItem('valueOfInputText', `${textArea.placeholder}`)
}

window.addEventListener('load', loadTextareaPlaceholder);

function loadTextareaPlaceholder () {

    if (!localStorage.getItem('valueOfInputText') && localStorage.getItem('valueOfInputText') === null) {
        textArea.placeholder = 'Enter text';
    } else {
        textArea.placeholder = localStorage.getItem('valueOfInputText');
    }
}

// Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// текстареа

let form = document.forms.formForTaskTwo;

form.txtarea.addEventListener('input', funcForTxtarea);

function funcForTxtarea (e) {
    form.txtarea.placeholder = e.target.value;
    localStorage.setItem('txtAreaValue', `${form.txtarea.placeholder}`);
}

window.addEventListener('load', loadTxtAreaValue);

function loadTxtAreaValue () {

    if (!localStorage.getItem('txtAreaValue') && localStorage.getItem('txtAreaValue') === null) {
        form.txtarea.placeholder = 'Enter text';
    } else {
        form.txtarea.placeholder = localStorage.getItem('txtAreaValue');
    }
}

//  чекбокс

let cBox = document.getElementsByClassName('cBox');

for (let i = 0; i < cBox.length; i++) {
cBox[i].addEventListener('click', funcForCheckBox);
}

function funcForCheckBox () {
    let checkBox =[];
    
    for (let chk of cBox) {
        if (chk.checked) {
            checkBox.push('checked');
            localStorage.setItem('checkBoxValue', JSON.stringify(checkBox));
        } else {
            checkBox.push('');
            localStorage.setItem('checkBoxValue', JSON.stringify(checkBox));
        }
    }
}

window.addEventListener('load', loadCheckBox);

function loadCheckBox () {
    if (!localStorage.getItem('checkBoxValue') && localStorage.getItem('checkBoxValue') === null) {
        for (let i = 0; i < cBox.length; i++) {
            cBox[i].checked = '';
        }
    } else {
        let arrOfCheckBoxesValues = JSON.parse(localStorage.getItem('checkBoxValue'));
        for (let i = 0; i < arrOfCheckBoxesValues.length; i++) {
        cBox[i].checked = arrOfCheckBoxesValues[i];
        }
    }
}

// радио кнопочки

let radButton = document.getElementsByClassName('radio');

for (let i = 0; i < radButton.length; i++) {
    radButton[i].addEventListener('click', funcForRadBtns);
}

function funcForRadBtns () {
    let arrOfRadBtns =[];
    
    for (let radio of radButton) {
        if (radio.checked) {
            arrOfRadBtns.push('checked');
            localStorage.setItem('radioBtnsValue', JSON.stringify(arrOfRadBtns));
        } else {
            arrOfRadBtns.push('');
            localStorage.setItem('radioBtnsValue', JSON.stringify(arrOfRadBtns));
        }
    }
}

window.addEventListener('load', loadRadButtons);

function loadRadButtons () {
    if (!localStorage.getItem('radioBtnsValue') && localStorage.getItem('radioBtnsValue') === null) {
        for (let i = 0; i < radButton.length; i++) {
            radButton[i].checked = '';
        }
    } else {
        let arrOfradButtonsValues = JSON.parse(localStorage.getItem('radioBtnsValue'));
        for (let i = 0; i < arrOfradButtonsValues.length; i++) {
        radButton[i].checked = arrOfradButtonsValues[i];
        }   
    }
}

// Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

let textAreaTwo = document.getElementById('textAreaTwo');
let buttonForTextArea = document.getElementById('btn');
let buttonPrev = document.getElementById('prev');
let buttonNext = document.getElementById('next');

buttonForTextArea.addEventListener('click', textAreaInput);

function textAreaInput (e) {
    localStorage.setItem(localStorage.length, textAreaTwo.value);
    if (localStorage.length >= 2) {
        buttonNext.style.display = 'inline-block';
        buttonPrev.style.display = 'inline-block';
    }
}

window.addEventListener('load', loadTextareaValue);

function loadTextareaValue () {

    if (!localStorage.getItem(0) && localStorage.getItem(0) === null) {
        buttonNext.style.display = 'none';
        buttonPrev.style.display = 'none';
        textAreaTwo.placeholder = 'Enter text';
    } else {
        textAreaTwo.value = localStorage.getItem(localStorage.length - 1);
    }
    
}

let count = localStorage.length - 1;

buttonPrev.addEventListener('click', () => {
    if (count > 0) {
        textAreaTwo.value = localStorage.getItem(--count); 
    } else {
        count = 0;
        textAreaTwo.value = localStorage.getItem(count);
    }
});

buttonNext.addEventListener('click', () => {
    if (count < localStorage.length - 1) {
        textAreaTwo.value = localStorage.getItem(++count);
    } else {
        count = localStorage.length - 1;
        textAreaTwo.value = localStorage.getItem(count);
    }
});

// Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.

// Каждому контакту добавить кнопку для удаления контакта.
// Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

let formWithContacts = document.forms.contacts;
let fio = formWithContacts.name;
let telNumber = formWithContacts.number;
let email = formWithContacts.email;
let company = formWithContacts.company;
let depart = formWithContacts.department;
let dayOfBirth = formWithContacts.birthday;

let buttonForContacts = document.getElementById('button');


buttonForContacts.addEventListener('click', ev => {
    let arrayWithContact = [];
    arrayWithContact.push(fio.value, telNumber.value, email.value, company.value, depart.value, dayOfBirth.value);
    localStorage.setItem(localStorage.length, JSON.stringify(arrayWithContact));

})

window.addEventListener('load', createContact);
function createContact () {
    for (let i = 0; i < localStorage.length; i++) {
        let divWithContacts = document.createElement('div');
        let ol = document.createElement('ol');

        for (let item of JSON.parse(localStorage.getItem(i))) {
            let li = document.createElement('li');
            li.innerText = item;
            ol.appendChild(li);
        }

        document.createElement('hr')

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        ol.appendChild(deleteButton);

        let editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        ol.appendChild(editButton);

        deleteButton.addEventListener('click', () => {
            localStorage.removeItem(i);
        });

        editButton.addEventListener('click', () => {
            let newForm = document.createElement('form');
            for (let item of JSON.parse(localStorage.getItem(i))) {
                let newInput = document.createElement('input');
                newInput.classList = 'inputsTwo';
                newInput.innerHTML = 'required';
                newInput.value = item;
                newForm.appendChild(newInput);
            }
            let newButton = document.createElement('button');
            newButton.innerText = 'Save';
            newForm.appendChild(newButton);

            newButton.addEventListener('click', () => {
                let editInputs = document.getElementsByClassName('inputsTwo');
                let arrWithEditCotacts = [];
                console.log(editInputs);
                
                for (let item of editInputs) {
                    arrWithEditCotacts.push(item.value);
                    localStorage.setItem(`${i}`, JSON.stringify(arrWithEditCotacts));
                    
                }
            });
            divWithContacts.appendChild(newForm);
    
        })

        document.body.appendChild(divWithContacts);
        divWithContacts.appendChild(ol);
    }
}
