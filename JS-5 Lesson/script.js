// Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

function Attributes (nameAttr, descrAttr) {
    this.name = nameAttr;
    this.descr = descrAttr;
}

function Tags (nameOfElem, descrOfElem, Attributes) {
    this.nameOfElem = nameOfElem;
    this.descrOfElem = descrOfElem;
    this.attributes = Attributes;
}

// опис тега div

const atrAlignDiv = new Attributes ('align', 'Задает выравнивание содержимого тега <div>.');
const atrTtileDiv = new Attributes ('title', 'Добавляет всплывающую подсказку к содержимому.');
const divElem = new Tags('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.', [atrAlignDiv, atrTtileDiv]);
console.log(divElem);

// опис тега a

const atrHrefA = new Attributes('href', 'Задает адрес документа, на который следует перейти.');
const atrTargetA = new Attributes('target', 'Имя окна или фрейма, куда браузер будет загружать документ.');
const aElem = new Tags('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.', [atrHrefA, atrTargetA]);

// опис тега H1

const atrAlignHOne = new Attributes('align', 'Определяет выравнивание заголовка.');
const hOneElem = new Tags('h1', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше.', [atrAlignHOne]);

//опис тега span

const atrClassSpan = new Attributes('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
const atrHiddenSpan = new Attributes('hidden', 'Скрывает содержимое элемента от просмотра.');
const spanElem = new Tags('span', 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.', [atrClassSpan, atrHiddenSpan]);

// опис тега input

const atrFormInput = new Attributes('input', 'Связывает поле с формой по её идентификатору.');
const atrAltInput = new Attributes('alt', 'Альтернативный текст для кнопки с изображением.');
const inputElem = new Tags('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно.', [atrFormInput, atrAltInput]);

// опис тега form

const atrIdForm = new Attributes('id', 'Идентификатор (называемый также «ID селектор») определяет уникальное имя элемента, которое используется для изменения его стиля и обращения к нему через скрипты.');
const atrClassForm = new Attributes('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
const formElem = new Tags('form', 'Связывает поле с формой по её идентификатору. Такая связь необходима в случае, когда поле располагается за пределами <form>, например, при создании её программно или по соображениям дизайна.', [atrIdForm, atrClassForm]);

// опис тега option

const atrLabelOption = new Attributes('label', 'Указание метки пункта списка.');
const atrValueOption = new Attributes('value', 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.');
const optionElem = new Tags('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.', [atrLabelOption, atrValueOption]);

// опис тега select

const atrNameSelect = new Attributes('name', 'Имя элемента для отправки на сервер или обращения через скрипты.');
const atrRequiredSelect = new Attributes('required', 'Список обязателен для выбора перед отправкой формы.');
const selectElem = new Tags('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей.', [atrNameSelect, atrRequiredSelect]);

//Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

class AttributesTwo {
    constructor(nameOfAttr, descrOfAttr) {
        this.nameOfAttr = nameOfAttr,
        this.descriptionOfAttr = descrOfAttr
    }
}

class TagsTwo {
    constructor(nameOfTag, descriptionOfTag, AttributesTwo) {
        this.nameOfTag = nameOfTag,
        this.description = descriptionOfTag,
        this.attributes = AttributesTwo
    }
}

// опис тега div

const atrAlignDivTwo = new AttributesTwo ('align', 'Задает выравнивание содержимого тега <div>.');
const atrTitleDivTwo = new AttributesTwo ('title', 'Добавляет всплывающую подсказку к содержимому.');
const divElemTwo = new TagsTwo('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.', [atrAlignDivTwo, atrTitleDivTwo]);
console.log(divElemTwo);

//опис тега a

const atrHrefATwo = new AttributesTwo('href', 'Задает адрес документа, на который следует перейти.');
const atrTargetATwo = new AttributesTwo('target', 'Имя окна или фрейма, куда браузер будет загружать документ.');
const aElemTwo = new TagsTwo('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.', [atrHrefATwo, atrTargetATwo]);
console.log(aElemTwo);

// опис тега H1

const atrAlignHOneTwo = new AttributesTwo('align', 'Определяет выравнивание заголовка.');
const hOneElemTwo = new TagsTwo('h1', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше.', [atrAlignHOneTwo]);
console.log(hOneElemTwo);

//опис тега span

const atrClassSpanTwo = new AttributesTwo('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
const atrHiddenSpanTwo = new AttributesTwo('hidden', 'Скрывает содержимое элемента от просмотра.');
const spanElemTwo = new TagsTwo('span', 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.', [atrClassSpanTwo, atrHiddenSpanTwo]);
console.log(spanElemTwo);

// опис тега input

const atrFormInputTwo = new AttributesTwo('input', 'Связывает поле с формой по её идентификатору.');
const atrAltInputTwo = new AttributesTwo('alt', 'Альтернативный текст для кнопки с изображением.');
const inputElemTwo = new TagsTwo('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно.', [atrFormInputTwo, atrAltInputTwo]);
console.log(inputElemTwo);

// опис тега form

const atrIdFormTwo = new AttributesTwo('id', 'Идентификатор (называемый также «ID селектор») определяет уникальное имя элемента, которое используется для изменения его стиля и обращения к нему через скрипты.');
const atrclassFormTwo = new AttributesTwo('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
const formElemTwo = new TagsTwo('form', 'Связывает поле с формой по её идентификатору. Такая связь необходима в случае, когда поле располагается за пределами <form>, например, при создании её программно или по соображениям дизайна.', [atrIdFormTwo, atrclassFormTwo]);
console.log(formElemTwo);

// опис тега option

const atrLabelOptionTwo = new AttributesTwo('label', 'Указание метки пункта списка.');
const atrValueOptionTwo = new AttributesTwo('value', 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.');
const optionElemTwo = new TagsTwo('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.', [atrLabelOptionTwo, atrValueOptionTwo]);
console.log(optionElemTwo);

// опис тега select

const atrNameSelectTwo = new AttributesTwo('name', 'Имя элемента для отправки на сервер или обращения через скрипты.');
const atrRequiredSelectTwo = new AttributesTwo('required', 'Список обязателен для выбора перед отправкой формы.');
const selectElemTwo = new TagsTwo('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей.', [atrNameSelectTwo, atrRequiredSelectTwo]);
console.log(selectElemTwo);

// Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

const car = {
 model:  'BMW',
 producent: 'Bavaria', 
 year: 2015, 
 maxSpeed: 225, 
 engine: 2.5,
 drive: function () {
    console.log(`Our speed is ${this.maxSpeed} km/h.`);
 },
 info: function() {
    console.log(this);
 },
 increaseMaxSpeed: function(newSpeed) {
     this.maxSpeed += newSpeed;
 },
 changeYear: function (newValue) {
     this.year += newValue;
 },
 addDriver: function (driver, age = 32) {
     this.addDriver = {name: driver, age};
 }
}

// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function Cars (model, produce, year, maxSpeed, engine) {
    this.model = model,
    this.producent = produce,
    this.year = year,
    this.maxSpeed = maxSpeed,
    this.engine = engine

    this.drive = function () {
        console.log(`Our speed is ${this.maxSpeed} km/h.`)
    }

    this.info = function () {
        console.log(this);
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        // console.log(this.maxSpeed);    
    }

    this.changeYear = function (newValue) {
        this.year += newValue;
    }

    this.addDriver = function (driver, age = 32) {
        this.driver = {name: driver, age};
    }
}

const carBmw = new Cars ('BMW', 'Bavaria', 2015, 225, 2.5,);
console.log(carBmw);

console.log(carBmw.drive());

console.log(carBmw.info());

console.log(carBmw.increaseMaxSpeed(15));
console.log(carBmw);

console.log(carBmw.changeYear(2));
console.log(carBmw);

console.log(carBmw.addDriver('Kolja'));
console.log(carBmw);

console.log(car.drive());
console.log(car.addDriver('Ljonja', 54));
console.log(car);

// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class NewCar {
    constructor (model, produce, yearOfBirth, maxSpeed, engine) {
        this.model = model,
        this.producent = produce,
        this.year = yearOfBirth,
        this.maxSpeed = maxSpeed,
        this.engine = engine
    }

    drive() {
        console.log(`Our speed is ${this.maxSpeed} km/H.`)
    }

    info() {
        console.log(this);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year += newValue;
    }

    addDriver(driver) {
        this.addDriver = {name: driver};
    }
}

// створити класс попелюшка з полями ім'я, вік, розмір ноги

class Cinderella {
    constructor (name, age, footSize) {
        this.name = name,
        this.age = age,
        this.footSize = footSize
    }
}

// Створити 10 попелюшок , покласти їх в масив

const cinderellaOne = new Cinderella ('Olja', 44, 29);
const cinderellaTWo = new Cinderella ('Natalja', 37, 35);
const cinderellaThree = new Cinderella ('Elina', 27, 37);
const cinderellaFour = new Cinderella ('Maria', 33, 38);
const cinderellaFive = new Cinderella ('Oksana', 16, 37);
const cinderellaSix = new Cinderella ('Lola', 41, 40);
const cinderellaSeven = new Cinderella ('Valja', 21, 41);
const cinderellaEight = new Cinderella ('Galja', 24, 39);
const cinderellaNine = new Cinderella ('Marta', 52, 35);
const cinderellaTen = new Cinderella ('Ira', 36, 36);

const cinderellasArray = [
    cinderellaOne,
    cinderellaTWo,
    cinderellaThree,
    cinderellaFour,
    cinderellaFive,
    cinderellaSix,
    cinderellaSeven,
    cinderellaEight,
    cinderellaNine,
    cinderellaTen
];

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prinz {
    constructor(name, age, cinderellasShoe) {
        this.name = name,
        this.age = age,
        this.shoe = cinderellasShoe
    }
    findCinderella(arrCind) {
        for (let i = 0; i < arrCind.length; i++) {
            if (arrCind[i].footSize === this.shoe) {
                console.log(arrCind[i]);
            }
        }
    }
}

const prinzCharles = new Prinz('Charles', 24, 39);

// за допоиоги циклу знайти яка попелюшка повинна бути з принцом

prinzCharles.findCinderella(cinderellasArray);

// створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги

function CinderrelaTwo (nameOfCinderella, ageOfCinderella, cinderrellasFootsize) {
    this.name = nameOfCinderella,
    this.age = ageOfCinderella,
    this.footSize = cinderrellasFootsize
}

// Створити 10 попелюшок , покласти їх в масив

const cinderelaOne = new CinderrelaTwo ('Olja', 44, 29);
const cinderelaTWo = new CinderrelaTwo ('Natalja', 37, 35);
const cinderelaThree = new CinderrelaTwo ('Elina', 27, 34);
const cinderelaFour = new CinderrelaTwo ('Maria', 33, 38);
const cinderelaFive = new CinderrelaTwo ('Oksana', 16, 37);
const cinderelaSix = new CinderrelaTwo ('Lola', 41, 40);
const cinderelaSeven = new CinderrelaTwo ('Valja', 21, 41);
const cinderelaEight = new CinderrelaTwo ('Galja', 24, 39);
const cinderelaNine = new CinderrelaTwo ('Marta', 52, 35);
const cinderelaTen = new CinderrelaTwo ('Ira', 36, 36);

const cinderellasArrayTwo = [
    cinderelaOne,
    cinderelaTWo,
    cinderelaThree,
    cinderelaFour,
    cinderelaFive,
    cinderelaSix,
    cinderelaSeven,
    cinderelaEight,
    cinderelaNine,
    cinderelaTen
];

// Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки". функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

function PrinzTwo(nameOfPrinz, ageOfPrinz, cinderellasShoeTwo) {
    this.name = nameOfPrinz,
    this.age = ageOfPrinz,
    this.shoeOfCinder = cinderellasShoeTwo

    this.findCinderellaTwo = function (arrayCinder) {
        for (let i = 0; i < arrayCinder.length; i++) {
            if (arrayCinder[i].footSize === this.shoeOfCinder) {
                console.log(arrayCinder[i]);
            }
        }
    }
}

const prinzTomas = new PrinzTwo('Charles', 24, 37);

prinzTomas.findCinderellaTwo(cinderellasArrayTwo);