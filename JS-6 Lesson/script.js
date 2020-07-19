// создать массив с 20 числами.

const arrayOfNumbers = [25, 2, 23, 4, 65, 6, 35, 8, 78, 10, 136, 56, 13, 1, 15, 98, 17, 89, 19, 20];

// при помощи метода sort и колбека  отсортировать массив.

arrayOfNumbers.sort((numOne, numTwo) => numOne - numTwo);
console.log(arrayOfNumbers);

// при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

arrayOfNumbers.sort((numOne, numTwo) => numTwo - numOne);
console.log(arrayOfNumbers);

// при помощи filter получить числа кратные 3

const newArrayOfNum = arrayOfNumbers.filter(numOne => numOne % 3 === 0);
console.log(newArrayOfNum);

// при помощи filter получить числа кратные 10

const arrayChanged = arrayOfNumbers.filter(numOne => numOne % 10 === 0);
console.log(arrayChanged);

// перебрать (проитерировать) массив при помощи foreach()

arrayOfNumbers.forEach(value => value);
console.log(arrayOfNumbers);

// перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

const newArrayMap = arrayOfNumbers.map(value => value *= 3);
console.log(newArrayMap);

// создать массив со словами на 15-20 элементов.

const arrayWithWords = ['Hello', 'Okten', 'I', 'want', 'to', 'learn', 'JS ', 'Angular', 'React', 'MySql', 'MongoDB', 'Node.js', 'Html', 'Css', 'Typescript', 'and', 'more'];

// отсортировать его по алфавиту в восходящем порядке.

arrayWithWords.sort((a, b)  => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
console.log(arrayWithWords);

// отсортировать его по алфавиту  в нисходящем порядке.

arrayWithWords.sort((a, b)  => a.toLowerCase() < b.toLowerCase() ? 1 : -1);
console.log(arrayWithWords);

// отфильтровать слова длиной менее 4х символов

const arrayWithWordsChanged = arrayWithWords.filter(value => value.length > 4);
console.log(arrayWithWordsChanged);

// перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

const arrMapChanged = arrayWithWords.map(value => value + '!');
console.log(arrMapChanged);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :

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

// відсортувати його за  віком (зростання , а потім окремо спадання)

users.sort((a, b) => a.age - b.age);  // в напрямку зростання
console.log(users);

users.sort((a, b) => b.age - a.age);  // в напрямку спадання
console.log(users);

// відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

users.sort((a, b) => a.name.length - b.name.length); // в напрямку зростання символів
console.log(users);

users.sort((a, b) => b.name.length - a.name.length); // в напрямку спадання символів
console.log(users);

// пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

 const newUsers = users.map((name, index) => {
    return {name, id: index + 1}
    });
console.log(newUsers);

// відсортувати його за індентифікатором

newUsers.sort((a, b) => b.id - a.id);

console.log(newUsers);

// написать функцию калькулятора с 2мя числами и колбеком

function calculate(firstNum, secNum, callFunc) {
    console.log(callFunc(firstNum, secNum));
}

calculate(15, 30, function(one, two){
    return one + two;
});

// наисать функцию калькулятора с 3мя числами и колбеком

function calculateTwo(firstNum, secNum, thirdNum, callFuncTwo) {
    console.log(callFuncTwo(firstNum, secNum, thirdNum));
}

calculateTwo(15, 30, 4, function(one, two, three){
    return (one + two) * three;
});

// Відфільтрувати масив за наступними крітеріями :

let cars = [
    {producer:"subaru",model: "wrx", year: 2010, color:"blue",type: "sedan",engine: "ej204x",owner: {name: 'Andrij', age: 25, experience: 8},power: 400},
    {producer:"subaru",model: "legacy", year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3, owner: {name: 'Andrij', age: 25, experience: 8},power: 250},
    {producer:"subaru",model: "tribeca", year: 2011, color:"white",type: "jeep",engine: "ej20",owner: {name: 'Andrij', age: 25, experience: 8},power: 300},
    {producer:"subaru",model: "leone", year: 1998, color:"yellow",type: "sedan",engine: "ez20x",owner: {name: 'Andrij', age: 25, experience: 8},power: 140},
    {producer:"subaru",model: "impreza", year: 2014, color:"red",type: "sedan",engine: "ej204x",owner: {name: 'Andrij', age: 25, experience: 8},power: 200},
    {producer:"subaru",model: "outback", year: 2014, engine: "ej204",owner: {name: 'Andrij', age: 25, experience: 8},power: 165},
    {producer:"bmw",model: "115", year: 2013, engine: "f15",owner: {name: 'Andrij', age: 25, experience: 8},power: 120},
    {producer:"bmw",model: "315", year: 2010, color:"white",type: "sedan",engine: "f15", owner: {name: 'Andrij', age: 25, experience: 8},power: 120},
    {producer:"bmw",model: "650", year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6, owner: {name: 'Andrij', age: 25, experience: 8},power: 350},{producer:"bmw",model: "320", year: 2012, color:"red",type: "sedan",engine: "f20",owner: {name: 'Andrij', age: 25, experience: 8},power: 180},{producer:"mercedes",model: "e200", year: 1990, color:"silver",type: "sedan",engine: "eng200",owner: {name: 'Andrij', age: 25, experience: 8},power: 180},
    {producer:"mercedes",model: "e63", year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3, owner: {name: 'Andrij', age: 25, experience: 8},power: 400},
    {producer:"mercedes",model: "c250", year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5, owner: {name: 'Andrij', age: 25, experience: 8},power: 230}
];

// двигун більше 3х літрів

const carsWithVolumeThreeAndMore = cars.filter(value => value.volume > 3);
console.log(carsWithVolumeThreeAndMore);

// двигун = 2л

const carswithVolumeTwo = cars.filter(valueOfArr => valueOfArr.volume === 2);
console.log(carswithVolumeTwo);

// виробник мерс

const producerMercedes = cars.filter(valueOfArr => valueOfArr.producer === 'mercedes');
console.log(producerMercedes);

// двигун більше 3х літрів + виробник мерседес

const carsWithVolumeThreeAndMercedes = cars.filter(valueOfArr => valueOfArr.volume >= 3 && valueOfArr.producer === 'mercedes');
console.log(carsWithVolumeThreeAndMercedes);

// двигун більше 3х літрів + виробник субару

const carsWithVolumeThreeAndSubaru = cars.filter(valueOfArr => valueOfArr.volume >= 3 && valueOfArr.producer === 'subaru');
console.log(carsWithVolumeThreeAndSubaru);

// сили більше ніж 300

const carsWithPower300 = cars.filter(valueOfArr => valueOfArr.power > 300);
console.log(carsWithPower300);

// сили більше ніж 300 + виробник субару

const carsWithPower300AndSubaru = cars.filter(valueOfArr => valueOfArr.power > 300 && valueOfArr.producer === 'subaru');
console.log(carsWithPower300AndSubaru);

// мотор серіі ej

const carsWithEjEngine = cars.filter(valueOfArr => valueOfArr.engine.startsWith('ej'));
console.log(carsWithEjEngine);

// сили більше ніж 300 + виробник субару + мотор серіі ej

const carsSubaruWithEngineEj = cars.filter(value => value.power > 300 && value.producer === 'subaru' && value.engine.startsWith('ej'));
console.log(carsSubaruWithEngineEj);

// двигун меньше 3х літрів + виробник мерседес

const carsMercedesWithVolume3 = cars.filter(value => value.volume < 3 && value.producer === 'mercedes');
console.log(carsMercedesWithVolume3);

// двигун більше 2л + сили більше 250

const carsWithEngineTwoAndPower250 = cars.filter(value => value.volume > 2 && value.power > 250);
console.log(carsWithEngineTwoAndPower250);

// сили більше 250  + виробник бмв

const carsBmw = cars.filter(value => value.power > 250 && value.producer === 'bmw');
console.log(carsBmw);

// взять слдующий массив

let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
];

// отсортировать его по id пользователей

usersWithAddress.sort((numOne, numTwo) => numOne.id - numTwo.id);
console.log(usersWithAddress);

// отсортировать его по id пользователей в обратном опрядке

usersWithAddress.sort((numOne, numTwo) => numTwo.id - numOne.id);
console.log(usersWithAddress);

// отсортировать его по возрасту пользователей

usersWithAddress.sort((numOne, numTwo) => numOne.age - numTwo.age);
console.log(usersWithAddress);

// отсортировать его по возрасту пользователей в обратном порядке

usersWithAddress.sort((numOne, numTwo) => numTwo.age - numOne.age);
console.log(usersWithAddress);

// отсортировать его по имени пользователей

usersWithAddress.sort((nameOne, nameTwo) => nameOne.name > nameTwo.name ? 1 : -1);
console.log(usersWithAddress);

// отсортировать его по имени пользователей в обратном порядке

usersWithAddress.sort((nameOne, nameTwo) => nameOne.name < nameTwo.name ? 1 : -1);
console.log(usersWithAddress);

// отсортировать его по названию улицы  в алфавитном порядке

usersWithAddress.sort((strOne, strTwo) => strOne.address.street > strTwo.address.street ? 1 : -1);
console.log(usersWithAddress);

// отсортировать его по номеру дома по возрастанию

usersWithAddress.sort((strNumOne, strNumTwo) => strNumOne.address.number - strNumTwo.address.number);
console.log(usersWithAddress);

// отфильтровать (оставить) тех кто младше 30

const usersToThirty = usersWithAddress.filter(value => value.age < 30);
console.log(usersToThirty);

// отфильтровать (оставить) тех у кого отрицательный статус

const usersWithStatusFalse = usersWithAddress.filter(value => value.status === false);
console.log(usersWithStatusFalse);

// отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

const usersToThirtyAndStatFalsy = usersWithAddress.filter(value => value.status === false && value.age < 30);
console.log(usersToThirtyAndStatFalsy);

// отфильтровать (оставить) тех у кого номер дома четный

const usersWithNumberTwo = usersWithAddress.filter(value => value.address.number % 2 === 0);
console.log(usersWithNumberTwo);

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.

let carsNew = [
    {producer:"subaru", year: 2010, owner: {name: 'Andrij', age: 29, experience: 8},power: 400, price: 9500},
    {producer:"subaru", year: 2007, owner: {name: 'Oleksij', age: 25, experience: 4},power: 250, price: 8400},
    {producer:"subaru", year: 2011, owner: {name: 'Oleg', age: 34, experience: 7},power: 300, price: 10200},
    {producer:"subaru", year: 1998, owner: {name: 'Volodja', age: 36, experience: 9},power: 140, price: 4500},
    {producer:"subaru", year: 2014, owner: {name: 'Anton', age: 27, experience: 3},power: 200, price: 14000},
    {producer:"subaru", year: 2014, owner: {name: 'Vasyl', age: 28, experience: 6},power: 165, price: 15200},
    {producer:"bmw", year: 2013, owner: {name: 'Marko', age: 38, experience: 12},power: 120, price: 16400},
    {producer:"bmw", year: 2010, owner: {name: 'Matvij', age: 33, experience: 10},power: 120, price: 10700},
    {producer:"bmw", year: 2009, owner: {name: 'Nazar', age: 26, experience: 2},power: 350, price: 6780},
    {producer:"bmw", year: 2012, owner: {name: 'Roman', age: 31, experience: 5},power: 180, price: 14600},
    
];

// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).

const enginePower = carsNew.map((value, index) => {
    if (index % 2) {
    return value.power *= 1.1;
    }
})

console.log(carsNew);

// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).

const newDrivers = ['Myron', 'Demyd', 'Oleksandr', 'Kolja', 'Rostik', 'Oleg', 'Oleksij', 'Volodja', 'Marko', 'Anton'];

const newDrive = carsNew.map((value, index) => {
    if (index % 2) {
        value.owner.name = newDrivers[index];
    }
})

console.log(carsNew);

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

const driversWithNewExperience = carsNew.map(value => {
    if (value.experience < 5 && value.owner.age < 25) {
        value.experience += 1;
    }
})

console.log(carsNew);

// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

const priceForAllAutos = carsNew.reduce((a, b) => a + b.price, 0);

console.log(priceForAllAutos);

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.

const arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

const keyMinIndex = arr.indexOf(4);
const keyMaxIndex = arr.lastIndexOf(4);

console.log(keyMinIndex);
console.log(keyMaxIndex);