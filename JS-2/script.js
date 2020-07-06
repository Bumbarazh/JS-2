// 1 (створити масив і вивести)

let arr = [23, 25, 45, 47, 56];
console.log(arr);

let arrTwo = ['Java', 'JS', 'Phyton', 'Html', 'Css'];
console.log(arrTwo);

let arrThree = ['Javascript', 'Less', 65, 87, true];
console.log(arrThree);

// 2 (додати елементи до пустого масиву)

let emptyArr = [];
emptyArr[0] = 28;
emptyArr[1] = 'java';
emptyArr[2] = false;
console.log(emptyArr);

// 3 (вивести 10 блоків div)

for (let i = 0; i < 10; i++) {
    document.write('<div>JS</div>');
}

// 4 (вивести 10 блоків div з індексом)

for (let i = 0; i < 10; i++) {
    document.write(`<div>Java ${i}</div>`);
}

// 5 (вивести 20 блоків н1)

let i = 0;
while (i < 20) {
    document.write('<h1>Python</h1>');
    i++;
}

// 6 (вивести 20 блоків н1 з індексами)

let j = 0;
while (j < 20) {
    document.write(`<h1>Python ${j}</h1>`);
    j++;
}

// 7 (вивести всі елементи масиву в циклі)

let arrTen = [1, 3, 5, 7, 9, 11, 13, 15, 16, 18];
for (let i = 0; i < arrTen.length; i++) {
    console.log(arrTen[i]);
}

// 8 (вивести всі елементи масиву в циклі)

let arrTenTwo = ['JS', 'Java', 'Python', 'React', 'Css', 'Html', 'Ruby', 'C++', 'C#', 'Angular'];
for (let i = 0; i < 10; i++) {
    console.log(arrTenTwo[i]);
}

// 9 (вивести всі елементи масиву в циклі)

let arrTenThree = ['JS', true, 'Python', 2, 'Css', false, 'Ruby', 89, 14, 'Angular'];
for (let param of arrTenThree) {
    console.log(param);
}

// 10 (вивести тільки булеві елементи)

let arrayFour = [true, 65, 78, false, 'owu', 12, 'JS', true, '98', 74];
for (let bool of arrayFour) {

    if (typeof bool === 'boolean') {
        document.write(bool, '<br>');
    }

}

// 11 (вивести тільки числові елементи)

let arrayFive = [true, 65, 78, false, 'owu', 12, 'JS', true, '98', 74];
for (let num of arrayFive) {

    if (typeof num === 'number') {
        document.write(num, '<br>');
    }

}

// 12 (вивести тільки рядкові елементи)

let arraySix = [true, 65, 78, false, 'owu', 12, 'JS', true, '98', 74];
for (let str of arraySix) {

    if (typeof str === 'string') {
        document.write(str, '<br>');
    }

}

// 13 (наповнити масив і вивести в циклі)

let emptyArrTwo = [];
emptyArrTwo[0] = 28;
emptyArrTwo[1] = 'java';
emptyArrTwo[2] = false;
emptyArrTwo[3] = 65;
emptyArrTwo[4] = 'JS';
emptyArrTwo[5] = 'Python';
emptyArrTwo[6] = 12;
emptyArrTwo[7] = true;
emptyArrTwo[8] = 16;
emptyArrTwo[9] = 'HTML'

for (let elem of emptyArrTwo) {
    console.log(elem);
}

// 14 (з кроком 1 до 10)

for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i, '<br>');
}

// 15 (з кроком 1 до 100)

for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(i, '<br>');
}

// 16 (з кроком 2 до 100)

for (let i = 0; i < 100; i+=2) {
    console.log(i);
    document.write(i, '<br>');
}

// 17 (парні числа до 100)

for (let i = 0; i < 100; i++) {

    if (i % 2 === 0) {
        console.log(i);
        document.write(i, '<br>');
    }

}

// 18 (непарні числа до 100)

for (let i = 0; i < 100; i++) {
    if (i % 2) {
        console.log(i);
        document.write(i, '<br>');
    }
}

// 19 (відтворити роботу годинника 2 хв)

for (let i = 0; i < 2; i++) {

    for (let j = 0; j < 60; j++) {
        console.log(i, j);
    }
}

// 20 (відтворити роботу годинника 2 год 20 хв)

for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 60; j++) {
        if (i === 2 && j === 20) {
            break;
        }

        for (let s = 0; s < 60; s++) {
            console.log(i, j, s);
        }

    }

}

// 21 (за допомогою циклу for зібрати слово)

let arraySeven = [ 'a', 'b', 'c'];
let word = '';

for (let i = 0; i < arraySeven.length; i++) {
    word += arraySeven[i]
}
console.log(word);

// 22 (за допомогою циклу while зібрати слово)

let arrayEight = [ 'a', 'b', 'c'];
let word2 = '';

let itr = 0;
while (itr < arrayEight.length) {
    word2 += arrayEight[itr]
    itr++;
}
console.log(word2);

// 23 (за допомогою циклу for of зібрати слово)

let arrayNine = [ 'a', 'b', 'c'];
let word3 = '';

for (let elem of arrayNine) {
    word3 += elem;
}
console.log(word3);

// 24 (додати елементи 1, 2, 3 в масив за допомогою циклу)

let arrayTen = [ 'a', 'b', 'c'];

for (let i = 1; i < 4; i++) {
    arrayTen.push(i);
}

// 25 (Зробіть з нього новий масив [3, 2, 1])

let arrayEleven = [1, 2, 3];

arrayEleven.reverse();
console.log(arrayEleven);

// 26 (Додайте йому в кінець елементи 4, 5, 6)

let arrayTwelve = [1, 2, 3];
for (let i = 4; i < 7; i++) {
    arrayTwelve.push(i);
}
console.log(arrayTwelve);

// 27 (Додайте йому в початок елементи 4, 5, 6)
 
let arrayThirteen = [1, 2, 3];
for (let i = 6; i > 3; i--) {
    arrayThirteen.unshift(i);
}
console.log(arrayThirteen);

// 28 (Виведіть на екран перший елемент за допомогою shift())

let arrFourteen = ['js', 'css', 'jq'];
let firstElem = arrFourteen.shift();
console.log(firstElem);

// 29 (Виведіть на екран останній елемент за допомогою pop())

let arrFifteen = ['js', 'css', 'jq'];
let lastElem = arrFourteen.pop();
console.log(lastElem);

// 30 (За допомогою методу/функції slice перетворіть масив в [4, 5])

let arrSixteen = [1, 2, 3, 4, 5];
console.log(arrSixteen.slice(3));

// 31 (За допомогою методу/функції slice перетворіть масив в [1,2])

let arrSixteen2 = [1, 2, 3, 4, 5];
console.log(arrSixteen2.slice(0, 2));

// 32 (За допомогою методу/функції splice перетворіть масив в [1, 4, 5])

let arrSeveteen = [1, 2, 3, 4, 5];
arrSeveteen.splice(1, 2);
console.log(arrSeveteen);

// 33 (За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5])

let arrNineteen = [1, 2, 3, 4, 5];
arrNineteen.splice(3, 0, 'a', 'b', 'c');
console.log(arrNineteen);

// 34 (За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'])

let arrTwenty = [1, 2, 3, 4, 5];
arrTwenty.splice(2, 0, 'a', 'b');
arrTwenty.splice(6, 0, 'c');
arrTwenty.splice(8, 0, 'e');
console.log(arrTwenty);

// 35 (Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.)

let arrTwentyOne = [2, 5, 9, 10, 78, 25, 45, 65, 87, 6];
for (let i = 0; i < arrTwentyOne.length; i++) {

    if (arrTwentyOne[i] % 2 === 0) {
        console.log(arrTwentyOne[i]);
    }

}

// 36 (Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

let arrTwentyTwo = [2, 5, 9, 10, 78, 25, 45, 65, 87, 6];
let emptyArrOne = [];

for (let i = 0; i < arrTwentyTwo.length; i++) {
    emptyArrOne.push(arrTwentyTwo[i]);
}
console.log(emptyArrOne);

// 37 (Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let arrTwentyThree = [2, 5, 9, 10, 78, 25, 45, 65, 87, 6];
emptyArrTwo = [];

for (let i = 0; i < arrTwentyThree.length; i++) {
    emptyArrTwo[i] = arrTwentyThree[i];
}

// 38 (зробити масив перебрати його циклом while)

let arrTwentyFour = [2,17,13,6,22,31,45,66,100,-18];

let iOne = 0;
while (arrTwentyFour.length > iOne) {
    console.log(arrTwentyFour[iOne]);
    iOne++;
}

// 39 (перебрати його циклом for)

let arrTwentyFive = [2,17,13,6,22,31,45,66,100,-18];

for (let i = 0; i < arrTwentyFive.length; i++) {
    console.log(arrTwentyFive[i]);
}

// 40 (перебрати циклом while та вивести  числа тільки з непарним індексом)

let arrTwentySix = [2,17,13,6,22,31,45,66,100,-18];

let iTwo = 1;
while (arrTwentySix.length > iTwo) {

        console.log(arrTwentySix[iTwo]);

    iTwo+=2;
}

// 41 (перебрати циклом for та вивести  числа тільки з непарним індексом)

let arrTwentySeven = [2,17,13,6,22,31,45,66,100,-18];

for (let i = 0; i < arrTwentySeven.length; i++) {

    if (i % 2) {
        console.log(arrTwentySeven[i]);
    } else {
        continue;
    }

}

// 42 (перебрати циклом while та вивести  числа тільки парні  значення)

let arrTwentyEight = [2,17,13,6,22,31,45,66,100,-18];

let iThree = 0;
while (arrTwentyEight.length > iThree) {

    if (arrTwentyEight[iThree] % 2 === 0) {
        console.log(arrTwentyEight[iThree]);
    }

    iThree++;
}

// 43 (перебрати циклом for та вивести  числа тільки парні  значення)

let arrTwentyNine = [2,17,13,6,22,31,45,66,100,-18];

for (let i = 0; i < arrTwentyNine.length; i++) {

    if  (arrTwentyNine[i] % 2 === 0) {
        console.log(arrTwentyNine[i]);
    }

}

// 44 (замінити кожне число кратне 3 на слово "okten")

let arrThirty = [2,17,13,6,22,31,45,66,100,-18];

for (let i = 0; i < arrThirty.length; i++) {

    if (arrThirty[i] % 3 === 0) {
        arrThirty.splice(i, 1, 'owu');
    }

}
console.log(arrThirty);

// 45 (вивести масив в зворотньому порядку.)

let arrThirtyOne = [2,17,13,6,22,31,45,66,100,-18];
arrThirtyOne.reverse();
console.log(arrThirtyOne);

// 46 (створити пустий масив та заповнити його 50 парними числами за допомоги циклу)

let emptyArrThree = [];

for (let i = 2; i <= 100; i += 2) {
    emptyArrThree.push(i);
}
console.log(emptyArrThree);

// 47 (заповнити його 50 непарними числами за допомоги циклу.)

let emptyArrFour = [];

for (let i = 1; i <= 99; i += 2) {
    emptyArrFour.push(i);
}
console.log(emptyArrFour); 

// 48 (используя Math.random заполнить массив из ???(сколько хотите) элементов.)

let emptyArrFive = [];

for (let i = 0; i < 10; i++) {
    let rand = Math.round(Math.random() * 10);
    emptyArrFive.push(rand);
}
console.log(emptyArrFive);

// 49 (диапазон рандома 8 до 732)

let emptyArrSix = [];

for (let i = 0; i < 10; i++) {
    let min = 8;
    let max = 732;
    let rand = Math.floor(Math.random() * (max - min)) + min;
    emptyArrSix.push(rand)
}
console.log(emptyArrSix);

// 50 (вывести на консоль  каждый третий елемент)

let arrThirtyTwo = [2,17,13,6,22,31,45,66,100,-18];

for (let i = 2; i < arrThirtyTwo.length; i+=3) {
    console.log(arrThirtyTwo[i]);
}

// 51 (вывести на консоль  каждый третий елемент но при условии что его значение является парным.)

let arrThirtyThree = [2,17,13,6,22,31,45,66,100,-18];

for (let i = 2; i < arrThirtyThree.length; i+=3) {

    if (arrThirtyThree[i] % 2 === 0) {
    console.log(arrThirtyThree[i]);
    }

}

// 52 (вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.)

let arrThirtyFour = [2,17,13,6,22,31,45,66,100,-18];
let emptyArrSeven = [];

for (let i = 2; i < arrThirtyFour.length; i +=3) {
    
    if (arrThirtyFour[i] % 2 === 0) {
        emptyArrSeven.unshift(arrThirtyFour[i]);
    }

}
console.log(emptyArrSeven);

// 53 (Вывести каждый елемент массива у которого соседний с права элемент - парный)

let arrThirtyFive = [2,17,13,6,22,31,45,66,100,-18];

for (let i = 0; i < arrThirtyFive.length; i++) {
    if (arrThirtyFive[i + 1] % 2 === 0) {
        console.log(arrThirtyFive[i]);
    }
}

// 54 (Які характеризують вартість окремої покупки. обрахувати середній чек.)

let arrThirtySix = [100,250,50,168,120,345,188];
let sum = 0;
let check;

for (let i = 0; i < arrThirtySix.length; i++) {
    sum += arrThirtySix[i];
}
check = sum / arrThirtySix.length;
console.log(check);

// 55 (створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив)

let emptyArrEight = [];
let arrEmpty = [];

for (let i = 0; i < 10; i++) {
    emptyArrEight[i] = Math.round(Math.random() * 50) * 5;
    arrEmpty[i] = emptyArrEight[i];

}
console.log(arrEmpty);

// 56 (створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.)

let arrThirtySeven = [100, 250, 'JS', 50, 168, , true, 120, 'java', 345, false, 188, 'python'];
let emptyArrNine = [];

for (let i = 0; i < arrThirtySeven.length; i++) {

    if (typeof arrThirtySeven[i] === 'number') {
        emptyArrNine.push(arrThirtySeven[i]);
    } else {
        continue;
    }

}
console.log(emptyArrNine);