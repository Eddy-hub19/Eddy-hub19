// !   1. Lesson;

// COMMAND + OPTION + J.

// Рисуем столько котиков, сколько захотим!
// let drawCats = function (howManyTimes) {
//   for (let i = 0; i < howManyTimes; i++) {
//     console.log(i + " =^.^= ");
//   }
// };
// drawCats(10); // Вместо 10 тут может быть другое число

// Draw cats — рисовать котиков
// Function — функция
// How many times — сколько раз
// ___________________________________________;
//   2. Lesson;

// ! ТИПЫ ДАННЫХ И ПЕРЕМЕННЫЕ

// Boolean - True & False

// let nick; // undefined

// Undefined — значение не определено

// let age = 12;

// Number of siblings — число братьев и сестер
// Number of candies — число конфет

// let numberOfSiblings = 1 + 3;
// let numberOfCandies = 8;
// numberOfCandies / numberOfSiblings;
// 2

// Reference error — ошибка данных

// Seconds in a minute — секунд в минуте
// Minutes in a hour — минут в часе

//Сколько секунд в часе
// let secondsInAMinute = 60;
// let minutesInAHour = 60;
// let secondsInAHour = secondsInAMinute * minutesInAHour;
// secondsInAHour; //60*60 = 3600

// Hours in a day — часов в день
// Сколько секунд в сутках
// let hoursInADay = 24;
// let secondsInADay = secondsInAHour * hoursInADay;
// secondsInADay; // 24*3600 = 86 400

// Days in a year — дней в году

// Сколько секунд в году

// let daysInAYear = 365;
// let secondsInAYear = secondsInADay * daysInAYear;
// secondsInAYear; //86400 * 365 = 31536000

//Возраст в секундах

// let age = 20;
// age * secondsInAYear; //630720000

// 20 * secondsInAYear; //630720000

// Инкремент и декремент

// Увеличение на 1 называют инкрементом,
// а уменьшение на 1 — декрементом.

// High fives — дай пять!

// let highFives = 0;
// ++highFives;
// 1;
// ++highFives;
// 2;
// --highFives;
// 1

// Score — счет

// let score = 10;
// score += 7; // 10 + 7 = 17
// score -= 3; // 17 - 3 = 14

// Balloon — воздушный шар

// let balloons = 100;
// balloons *= 2; // 200

// let balloons = 100;
// balloons /= 4; // 25

// ! СТРОКИ

// My awesome string — Моя крутая строка

// let myAwesomeString = "Что-то ОЧЕНЬ крутое!!!";

// My thing — моя штука

// let myThing = 5;
// myThing = "это строка";
// ("это строка");

// Как узнать длину строки

// Length — длина

// "Суперпупердлиннаястрока".length; // 23

// let java = "Java";
// java.length; // 4
// let script = "Script";
// script.length; // 6
// let javascript = java + script;
// javascript.length; //4 + 6 = 10

// Получение отдельного символа строки

// let myName = "Ник";

// myName[0];
// myName[1];
// myName[2];

// Сode word — кодовое слово

// let codeWord1 = "обернись";
// let codeWord2 = "Неужели";
// let codeWord3 = "огурцы";
// let codeWord4 = "липкие";
// let codeWord5 = "?!";

// codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];

// let i = 0;          // создаем переменную i с начальным значением 0
// while (i < 20) {    // пока значение i меньше 10, выполняем код в фигурных скобках
//   console.log(i);   // печатаем на экран текущее значение i
//   i = i + 1;        // увеличиваем i на 1, или иначе можно было написать i = i + 1
// }

// const stock = [
//   { title: "fork", price: 10 },
//   { title: "spoon", price: 15 },
//   { title: "knife", price: 20 },
//   { title: "plate", price: 5 },
// ];

// const printStock = (stock) => {
//   for (let i = 0; i < stock.length; i++) {
//     console.log(stock[i]);
//   }
// };

// printStock(stock)

// const positiveElements = (arr) => {
//   let newArr = [];
//   let positiveArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       newArr.push(arr[i]);
//       console.log(newArr);
//     }else{
//       positiveArr.push(arr[i]);
//       console.log(positiveArr);
//     }
//   }
//   return newArr;
// };

// const arr = [ 10, -10, 20, -55, 1, 5, 12, -15, 0 ];

// console.log(`${positiveElements(arr)}`); // [10, 20, 1, 5, 12]

// ! SLICE

// Slice — часть

// Long string — длинная строка

// let longString = "Эта длинная строка такая длинная";
// longString.slice(4, 18);
// ("длинная строка");

// To upper case — в верхний регистр

// Перевод строки в заглавный или строчный регистр

// "Эй, как дела?".toUpperCase();
// ("ЭЙ, КАК ДЕЛА?");

// .toUpperCase() возвращает новую строку, все буквы в которой — заглавные.

// Можно произвести и обратную операцию, использовав toLowerCase:

// To lower case — в нижний регистр

// "эЙ, кАК деЛа?".toLowerCase();
// ("эй, как дела?");

// Silly string — буквально «глупая строка»

// Lower string — здесь «строка в нижнем регистре»

// First character — здесь «первая буква»

// First character upper — здесь «первая буква в верхнем регистре»

// Rest of string — оставшаяся часть строки

// let sillyString = "эЙ, кАК деЛа?";
// let lowerString = sillyString.toLowerCase();
// console.log(lowerString);
// ("эй, как дела?");
// let firstCharacter = lowerString[0];
// console.log(firstCharacter);
// ("э");
// let firstCharacterUpper = firstCharacter.toUpperCase();
// console.log(firstCharacterUpper);
// ("Э");
// let restOfString = lowerString.slice(1);
// console.log(restOfString);
// ("й, как дела?");

// console.log(firstCharacter + restOfString);
// ("эй, как дела?");

// let sillyString = "эЙ, кАК деЛа?";
// let result = sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase();
// ("Эй, как дела?");
// console.log(result);

// ! Булевые значения

// true (истина), либо false (ложь)

// let javascriptIsCool = true;
// javascriptIsCool;
// true;

// ! Логические операции - 41 page

// && -  and

// || - or

// Had shower — принял душ
// Has backpack — есть рюкзак

// let hadShower = true;
// let hasBackpack = false;
// hadShower && hasBackpack;
// false

// Has apple — есть яблоко
// Has orange — есть апельсин

// let hasApple = true;
// let hasOrange = false;
// hasApple || hasOrange;
// true

// ! (НЕ)
// Оператор ! означает «не» — так его и называйте. Используйте этот опе- ратор, чтобы превратить false в true или, наоборот, true в false. Это полезно для работы со значениями-противоположностями. Например:

// Is weekend — выходной
// Need to shower today — нужно принять душ сегодня

// let isWeekend = true;
// let needToShowerToday = !isWeekend;
// needToShowerToday;
// console.log(needToShowerToday);
// false

// Should go to school — нужно идти в школу

// let isWeekend = false;
// let hadShower = true;
// let hasApple = false;
// let hasOrange = true;
// let shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
// shouldGoToSchool;
// true

// ! Сравнение чисел с помощью булевых значений

// Если Высота меньше 150 тогда false

// Height — высота
// Height restriction — ограничение по росту

// let height = 155;
// let heightRestriction = 150
// height >= heightRestriction
// true

// Посетителю, рост которого равен 120 см, вход все еще разрешен.

// let height = 120;
// let heightRestriction = 120;
// height <= heightRestriction;
// true

// 46 page

// число которое загадали 5
// сравниваем два числа
// И если число не такое как загадали значит false

// My secret number — мое загаданное число
// Chico guess — догадка Чико 

// let mySecretNumber = 5;
// let chicoGuess = 3;
// mySecretNumber === chicoGuess; // false
// let harpoGuess = 7;
// mySecretNumber === harpoGuess; // false
// let grouchoGuess = 5;
// mySecretNumber === grouchoGuess // true

/* Сравнивая два числа с помощью ===, вы получаете true, 
только когда оба числа совпадают.*/

// String number — здесь «строка-число»
// Actual number — число

// let stringNumber = "5";
// let actualNumber = 5;
// stringNumber /*'5'*/ === actualNumber /*5*/ ;
// false
// stringNumber == actualNumber;
// true

// Accompanied — в сопровождении

// task 
//Задача состоит в том, чтобы определить, 
//пускать ли зрителя на фильм «с 12 лет и старше» или нет.

// let age = 10;
// let accompanied = false;
// if (age >= 12 || age <= 12 && accompanied) {
//     console.log('u can watch film');
// } else {
//     console.log('NO u can`t watch film');
// }

// ! undefined и null

// JavaScript использует значение undefined, когда не может найти иного значения. Например, если, создав новую переменную, вы не присвоите ей значение с помощью оператора =, ее значением будет undefined:

// My letiable — моя переменная
// My null letiable — моя пустая переменная

// let myletiable;
// myletiable;
// undefined

// А значение null обычно используется, чтобы явно обозначить — «тут пусто».

// let myNullletiable = null;
// myNullletiable;
// null

// ! Массивы //

// My top three dinosaurs — три моих любимых динозавра

// let myTopThreeDinosaurs = ["Тираннозавр", "Велоцираптор", "Стегозавр"]; 

// let dinosaurs = [
//     "Тираннозавр",
//     "Велоцираптор",
//     "Стегозавр",
//     "Брахиозавр",
//     "Трицератопс",
//     "Птеранодон",
//     "Апатозавр",
//     "Диплодок",
//     "Компсогнат"
// ];

// Доступ к элементу масива

// dinosaurs[2]; // Стегозавр
// dinosaurs[2] = 'Ed';

// Test how to push elements for array

// let dinosaurs = [];
// dinosaurs[0] = '1'
// dinosaurs[1] = '2'

// let dinosaurs = [
//     "Тираннозавр",
//     "Велоцираптор",
//     "Стегозавр",
//     "Брахиозавр",
//     "Трицератопс",
//     "Птеранодон",
//     "Апатозавр",
//     "Диплодок",
//     "Компсогнат"
// ];

// dinosaurs[33] = 'REkA'
// console.log(dinosaurs);

// let dinosaursAndNumbers = [3, "динозавры", ["трицератопс", "стегозавр", 3627.5], 10];
// dinosaursAndNumbers[0]
// console.log(dinosaursAndNumbers[2][2]);

// ! Длина массива - length array //

// let maniacs = ["Якко", "Вакко", "Дот"];
// maniacs[0];
// // "Якко"
// maniacs[1];
// // "Вакко"
// maniacs[2];
// // "Дот"
// console.log(maniacs.length)
// console.log(maniacs[maniacs.length]);

// ! Добавление элементов в массив //

// Push — буквально «протолкнуть, добавить»
// Animals — животные

// PUSH - Метод

// let animals = [];
// animals.push("Кот");
// animals.push("Пес");
// animals.push("Лама");
// animals;
// ["Кот", "Пес", "Лама"]
// console.log(animals);

/* Чтобы добавить элемент в начало массива,
используйте метод .unshift(элемент): */

// animals = ["Cat", "Пес", "Лама"]
// animals[0]; // Cat
// animals.unshift("Мартышка"); // 4

// console.log(animals);

// ! Удаление элементов массива //

// Pop — буквально «выдавить»
// Last animal — последнее животное

// Убрать из массива последний элемент можно, добавив к его имени .pop()

// При вызове animals.pop() в строке последний элемент массива animals, 
// "Лама", был возвращен и сохранен в переменной lastAnimal.

// let animals = ["Белый медведь", "Мартышка", "Кот", "Пес", "Лама"]

// let lastAnimal = animals.pop(); // delete 4 element/ Лама
// animals.unshift(lastAnimal);
// console.log(animals);

// ! SHIFT()  //

// Чтобы удалить из массива первый элемент, вернув его значение, используйте .shift():

// Методы unshift и shift добавляют и 
// удаляют элементы с начала массива — так же как push и pop добавляют и удаляют элементы с конца.

// ! Объединение массивов //

// First Array — первый массив
// Other Array — другой массив
// Furry animals — пушистые животные
// Scaly animals — чешуйчатые животные
// Furry and scaly animals — пушистые и чешуйчатые животные

// let fistArray = ['1', '2', '3', '4', '5']
// let secondArray = ['6', '7', '8', '9', '10']
// let threeArray = ['Ed', 'Sekan']
// let concatTwoArrays = fistArray.concat(secondArray, fistArray, threeArray);
// console.log(concatTwoArrays);

// ! Поиск индекса элемента в массиве //

// let colors = ['red', 'green', 'blue'];
// let findIndexColors = colors.indexOf("red")

// console.log(findIndexColors);

// Метод indexOf похож на квадратные скобки, 
// только здесь все наобо- рот: команда colors[2] вернет "синий", 
// а colors.indexOf("синий") вернет 2.

// colors[2]; //"синий"
// colors.indexOf("синий"); // 2

// Если элемента, индекс которого вы запрашиваете, в массиве нет, 
// JavaScript вернет значение −1.

// ! Превращаем массив в строку

// .join() - метод чтобы соеденить все элементы масива в одну строку

// Insects — насекомые
// Join — соединить
// Boring animals — скучные животные

// let boringAnimals = ["Мартышка", "Кот", "Рыба", "Ящерица"];

// console.log(boringAnimals.join("--")); // Make sting

// Нам поможет метод .join ("Любое слово или Символ который будет разделять строки"), 
// который делает все то же самое,
// но вместо запятых ставит между элементами выбранный

// My Tests
// let arraysMethods = ['pop', 'push', 'shift', 'unshift', 'concat', 'indexOf', 'join', 'length']
// let joinArr = arraysMethods.join(', ')
// console.log(joinArr.replace('pop', 5))

// ! Поиск дороги домой

// На сленге программистов этот способ называется «последним вошел, 
// первым вышел», английская аббревиатура LIFO (last in, first out). 
// Есть и альтернативный подход — «первым вошел, первым вышел», 
// аббревиатура FIFO (first in, first out). 
// Его также называют очередью, 
// поскольку таким же образом устроены оче-реди — первый человек, 
// вставший в очередь, будет первым, кото- рого обслужат.

// Landmarks — заметные объекты

// let landmarks = [];
// landmarks.push("Мой дом");
// landmarks.push("Дорожка к дому");
// landmarks.push("Мигающий фонарь");
// landmarks.push("Протекающий гидрант");
// landmarks.push("Пожарная станция");
// landmarks.push("Приют для кошек");
// landmarks.push("Моя бывшая школа");
// landmarks.push("Дом подруги");
// landmarks.pop(); //"Дом подруги"
// landmarks.pop(); //"Моя бывшая школа"
// landmarks.pop(); //"Приют для кошек"
// landmarks.pop(); //"Пожарная станция"
// landmarks.pop(); //"Протекающий гидрант"
// landmarks.pop(); //"Мигающий фонарь"
// landmarks.pop(); //"Дорожка к дому"
// // landmarks.pop(); //"Мой дом"
// console.log(landmarks, 'Дорога домой найдена');

// ! Случайный выбор
// || Использование Math.random() ||
// Math random — случайное число
// Random words — случайные слова
// Random index — случайный индекс
// Phrases — фразы

// console.log(Math.random() * 10);

// Округление с помощью Math.floor()
// Math floor — целая часть числа

// Math.floor(3.7463463);

// let maths = Math.random() * 10
// let twoCount = Math.floor(maths)

// console.log(maths);
// console.log(twoCount);

// let random = Math.floor(Math.random() * 4);
// console.log(random);

// let randomWords = ["Защита", "Стрела", "Атака", "Мимо"];

// let randomIndex = Math.floor(Math.random() * 4);
// let result = randomWords[randomIndex]
// console.log(result);

// let test = randomWords[Math.floor(Math.random() * 4)];
// console.log(test);

// ! Программа случайного выбора вариантов
// Phrases — фразы
// let phrases = [
//     "Звучит неплохо",
//     "Да, это определенно надо сделать",
//     "Не думаю, что это хорошая идея",
//     "Может, не сегодня?",
//     "Компьютер говорит нет"
// ];
// let answerRandom = phrases[Math.floor(Math.random() * 5)];
// console.log('Мне выпить еще молочного коктейля?', answerRandom);
// console.log('Мне пора делать домашнюю работу?', answerRandom);

// ! Генератор случайных дразнилок

// Random body part — случайная часть тела
// Random adjective — случайное прилагатель- ное
// Random insult — случайная дразнилка

// let randomBodyParts = ["глаз", "нос", "череп", "лоб", "Зуб"];
// let randomAdjectives = ["красивая", "унылая", "смешная"];
// let randomWords = ["муха", "выдра", "птичка", "мартышка", "крыса", "гавнa"];

// // Выбор случайной части тела из массива randomBodyParts:
// let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];

// // Выбор случайного прилагательного из массива randomAdjectives:
// let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

// // Выбор случайного слова из массива randomWords:
// let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// // Соединяем случайные строки в предложение:
// let randomInsult = "У тебя " + randomBodyPart + " словно " +
//     randomAdjective + " " + randomWord + "!!!";
// console.log(randomInsult);

// let randomInsult = ["У тебя", randomBodyPart, "словно", randomAdjective, randomWord + "!!!"].join(" ");
// "У тебя череп словно дурацкая дубина!!!"
// console.log(randomInsult);

// ! УПРАЖНЕНИЯ // DONE
// Чтобы укрепить знания, полученные в этой главе, выполните эти упражнения.

// #1. Новые дразнилки
// Сделайте генератор случайных дразнилок со своим набором слов.

// #2. Изощренные дразнилки
// Усовершенствуйте генератор дразнилок, чтобы он создавал драз-нилки такого типа: «У тебя [часть тела] еще более [прилагатель-ное], чем [часть тела животного] у [животное]».
// Подсказка: нужно будет создать еще один массив.

// #3. Оператор + или join?
// Сделайте две версии своего генератора дразнилок: 
// одна пусть использует для составления дразнилки оператор +, 
// а другая соз- дает массив со словами и соединяет их 
// через пробел с помощью join. 
// Какой вариант вам больше нравится и почему?

// #4. Соединение чисел
// Как с помощью метода join превратить массив[3,2,1]в строку "3 больше, чем 2 больше, чем 1"?

// let arr = [3, 2, 1].join(" > ")
// console.log(arr);

// My first Random Game

// let newArrays = ['Конфетка', 'Солнышко', 'Сердце', 'Любовь'];
// let animalsArrays = ['Черепаха', 'Ежик', 'Мишка'];
// let goodWords = ['Добрая', 'Хорошая', 'Любимая', 'Лучшая']

// let newArr = newArrays[Math.floor(Math.random() * newArrays.length)]
// let animalsArray = animalsArrays[Math.floor(Math.random() * animalsArrays.length)]
// let goodWord = goodWords[Math.floor(Math.random() * goodWords.length)]
// let randomGame1 = "Ты " + newArr + ", словно " + animalsArray + " и так же ты самая " + goodWord;
// let randomGame = ["Ты ", newArr + ", словно ", animalsArray, " и так же ты самая ", goodWord].join(" ")

// console.log(randomGame);

// ! Объекты
// Создание объектов

// Литерал объекта — это быстрый способ создания объекта вместе с его содержимым.

// Cat — кошка 
// Legs — ноги
// Color — цвет
// Key — ключ
// Full name — полное имя

// Ключ обязательно должен быть стрингой
// а Значение может быть любого типа

// let cat = {
//     "legs": 3,
//     "name": "Гармония",
//     "color": "Черепаховый"
// };

// можно писать без кавычек
// let cat = {
//     legs: 3,
//     name: "Гармония",
//     color: "Черепаховый"
// };

// ! Доступ к значениям внутри объектов

// Object.keys(anyObject) возвращает массив, содержащий все ключи объекта.

// Object key — ключ объекта
// Dog — пес 
// Bark — лай

// let cat = {
//     "legs": 3,
//     "name": "Гармония",
//     "color": "Черепаховый"
// };

// console.log(cat["name"]); // Гармония
// console.log(cat.name);    // Гармония
// console.log(Object.keys(cat));
// Object.keys - // Функция чтобы проверить какие есть ключи в обьекте

// let dog = { name: "Оладушек", age: 6, color: "белый", bark: "Гав тяф тяф!" };
// let cat = { name: "Гармония", age: 8, color: "черепаховый" };

// console.log(Object.keys(dog));
// ["name", "age", "color", "bark"]
// console.log(Object.keys(cat));
// ["name", "age", "color"]

// let cat = {};
// cat["legs"] = 3;
// cat["name"] = "Гармония";
// cat["color"] = "Черепаховый";

// console.log(cat);

// ! Добавление ключей через точку

// Is awesome — классный
// Is brown — коричневый

// let cat = {};
// cat.legs = 3;
// cat.name = "Гармония";
// cat.color = "Черепаховый";

// ! Массивы объектов
// Period — период

// let dinosaurs = [
//     { name: "Тираннозавр рекс", period: "Верхнемеловой" },
//     { name: "Стегозавр", period: "Верхнеюрский" },
//     { name: "Платеозавр", period: "Триасовый" }
// ];

// console.log(dinosaurs[2]["name"]);
// console.log(dinosaurs[0].name);

// Точечную нотацию можно использовать только с объектами, 
// для массивов она не подходит.


// ! Массив друзей

// Lucky numbers — счастливые числа
// Friends — друзья
// Array — массив

// let anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
// let dave = { name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40] };
// let kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };
// let friends = [anna, dave, kate];

// console.log(anna.luckyNumbers[1]);
// console.log(friends[1].name);
// console.log(friends[0].luckyNumbers[1]);

// Что полезного можно сделать с объектами

// ! Учет долгов

// Owed money — одолженная сумма денег

// let owedMoney = { name: 'Kolya' };
// owedMoney["Kolya"] = 120;
// owedMoney["Kolya"] += 300;

// console.log(owedMoney.name + ' должен: ' + owedMoney["Kolya"] + 'grn');


// ! Хранение информации о фильмах

// Movies — фильмы
// Release date — дата выхода
// Duration — продолжи- тельность
// Actors — в ролях
// Format — формат

// let movies = {
//     "В поисках Немо": {
//         releaseDate: 2003,
//         duration: 100,
//         actors: ["Альберт Брукс", "Эллен Дедженерес", "Александр Гоулд"],
//         format: "DVD"
//     },
//     "Звездные войны: Эпизод VI — Возвращение джедая": {
//         releaseDate: 1983,
//         duration: 134,
//         actors: ["Марк Хэмилл", "Харрисон Форд", "Кэрри Фишер"],
//         format: "DVD"
//     },
//     "Гарри Поттер и Кубок огня": {
//         releaseDate: 2005,
//         duration: 157,
//         actors: ["Дэниел Рэдклифф", "Эмма Уотсон", "Руперт Гринт"],
//         format: "Blu-ray"
//     }
// };

// let findingNemo = movies["В поисках Немо"];
// console.log(findingNemo.duration); //100
// console.log(findingNemo.format); //"DVD"

// let cars = {
//     releaseDate: 2006,
//     duration: 117,
//     actors: ["Оуэн Уилсон", "Бонни Хант", "Пол Ньюман"],
//     format: "Blu-ray"
// };
// movies["Тачки"] = cars;

// console.log(Object.keys(movies));

// ! УПРАЖНЕНИЯ

// My crazy object — мой нелепый объект
// Some array — какой-то массив
// Purpose — цель
// Random animal — случайное животное

// ! #1 Подсчет очков
// Представьте, что вы играете в какую - нибудь игру
// со своими друзьями и вам нужно вести счет.
// Создайте для этого объект и назовите его scores.
// Пусть ключами будут имена ваших друзей, 
// а значениями — набранные ими очки(0 или больше).
// Счет игроков надо будет увеличивать по мере того, 
// как они зарабатывают новые очки.
// Как вы будете менять счет игрока, 
// хранящийся в объекте scores ?

// let scores = {
//     kolya: '0',
//     sanya: '0',
//     david: '0',
// };
// scores.kolya = +10;
// scores.sanya = -20;
// scores.david = 50;
// console.log(scores);


// ! #2. Вглубь объектов и массивов
// Пускай у вас есть такой объект:

// let myCrazyObject = {
//     "name": "Нелепый объект",
//     "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
//     "random animal": "Банановая акула"
// };

// let result = myCrazyObject["some array"][2].number; // 123
// console.log(result);

// Как одной строкой JavaScript - кода извлечь из этого объекта число 123 ? 
// Проверьте свое решение, запустив его в консоли.

// ! УСЛОВИЯ И ЦИКЛЫ

// Script — скрипт, сценарий
// Message — сообщение

//  УСЛОВИЕ
// Условная конструкция представляет собой команду: «если что-то истинно (true), сделай это, иначе сделай то». 
// Пример: выпол- нив домашнее задание, вы можете съесть мороженое, но, если домашнее задание не готово, мороженое вам не светит.

// А ЦИКЛ
// это инструкция: «до тех пор, пока что-то истинно (true), продолжай делать это». 
// Пример: пока вы испытываете жажду, продолжайте пить воду.


// ! Условные конструкции

//If — если If... else —
// если... иначе

// let name = "Николаqqqqqqq";
// console.log("Привет, " + name);
// if (name.length > 6) {
//     console.log("Ну и длиннющее же у вас имя!");
// } else {
//     console.log("Имя у вас не из длинных.");
// }

// let lemonChicken = false;
// let beefWithBlackBean = true;
// let sweetAndSourPork = false;
// if (lemonChicken) {
//     console.log("Отлично! Я буду курицу с лимоном!");
// } else if (beefWithBlackBean) {
//     console.log("Заказываю говядину.");
// } else if (sweetAndSourPork) {
//     console.log("Ладно, закажу свинину.");
// } else {
//     console.log("Что ж, остается рис с яйцом.");
// }

// ! ПОПРОБУЙТЕ!
// Напишите программу с переменной name. 
// Если в этой переменной находится ваше имя, 
// напечатайте: «Привет мне!» — иначе напечатайте: «Привет, незнакомец!» 
// (Подсказка: используйте === для сравнения переменной name с вашим именем.)

// Теперь дополните программу, чтобы она здоровалась с вашим папой,
// если в name его имя, и с вашей мамой, если в name ее имя. 
// Если же там что-то иное, по-прежнему печатайте «Привет, незнакомец!».

// let name = 'Ed';
// if (name === 'Ed') {
//     console.log('Привет Привет мне!!');
// } else if (name === 'Dariy') {
//     console.log('Привет Привет мне!!')
// } else if (name === 'Olga') {
//     console.log('Привет Привет мне!!')
// } else {
//     console.log('Привет, незнакомец!');
// }

// ! Циклы

// Циклы, с другой стороны, позволяют выполнять фрагмент кода многократно — 
// до тех пор, пока некое условие дает true. 
// Примеры: до тех пор, пока в тарелке есть пища, следует продолжать есть; 
// до тех пор, пока на лице грязь,  следует продолжать умываться.

// Цикл while

// While — до тех пор, пока

// Используя цикл while, мы имеем в виду следующее: 
// «Продолжай делать это, пока условие дает true. 
// Но если оно даст false, остановись».

// 102 page

// Sheep counted — посчитанные овцы

// let sheepCounted = 0;
// while (sheepCounted <= 10) {
//     console.log("Посчитано овец: " + sheepCounted + "!");
//     sheepCounted++;
// }
// console.log("Sleeep");

// ! Бесконечный цикл

// Имея дело с циклами, помните: если условие никогда не даст false, цикл будет повторяться бесконечно

// ! Цикл for

// For — для

// в составе цикла for есть три выражения, 
// разделенные точками с запятой: 
// это настройка, - Настройка до запуска цикла,Создается переменная с значением
// проверка условия - Проверяет Истина ли в условии, в данном случае ' 0 < меньше 10 ? '  true
// приращение - i++ - выполянется после каждой итерации и увеличивает переменную на + 1

// for (let sheepCounted = -10; sheepCounted < 10; sheepCounted++) {
//     console.log("Посчитано овец: " + sheepCounted + '!');
// }
// console.log("dedede");

// Times to say hello — сколько раз сказать «привет»

// let timesToSatHello = 3;

// for (let i = 0; i < timesToSatHello; i++) {
//     console.log("Hello")
// }

// Цикл for, массивы и строки

// Очень часто цикл for используют для перебора всех элементов массива 
// или всех символов строки.

// let animals = ["лев", "фламинго", "медведь", "удав"];

// for (let i = 0; i < animals.length; i++) {
//     console.log("В этом зоопарке есть " + animals[i] + " .");
// }

// let name = "Nick";
// for (let i = 0; i < name.length; i++) {
//     console.log("В моем имени есть буква " + name[i])
// }

// for (let x = 2; x < 10000; x = x * 2) {
//     console.log(x)
// }

// ! ПОПРОБУЙТЕ!
// Напишите цикл for, который печатает степени тройки, 
// не превышающие 10 000(программа должна выводить 3, 9, 27 и т.д.)
// Перепишите это задание, вместо for использовав цикл while. 
// (Подсказка: установите начальное значение перед входом в цикл.)

// for (let i = 3; i < 10000; i = i * 3) {
//     console.log(i);
// }

// let j = 3;
// while (j < 10000) {
//     console.log(j);
//     j = j * 3
// }

// let arr = ['bmv', 'mers', 'reno'];
// let arr2 = ['nissan'];

// for (let i = 0; i < arr.length; i++) {

//     arr2.push(arr[i]);
// }
// console.log(arr)
// console.log(arr2.concat(arr))

// ? #1. Прекрасные животные

// let animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];

// for (let i = 0; i < animals.length; i++) {
//     animals[i] = animals[i] + " - прекрасное животное";
// }
// console.log(animals)

// ? #2. Генератор случайных строк

// let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// let index = Math.floor(Math.random() * alphabet.length) // Находит Индекс Строки
// console.log(index);

// let randomWord = alphabet[Math.floor(Math.random() * alphabet.length)] // генерирует рандомную букву

// += - Оператор плюс с присваиванием

// let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// let randomString = '';
// while (randomString.length < 10) {
//     randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
// }
// console.log(randomString);

// ? #3. h4ck3r sp34k
// h4ck3r sp34k — hacker speak — хакерский язык
// Input — входное значение
// Output — выходное значение
// JavasScript is awesome — JavaScript очень классный

// let input = "javascript is awesome";
// let output = "";

// for (let i = 0; i < input.length; i++) {

//     if (input[i] === "e") {
//         output += '3'
//     } else if (input[i] === 'a') {
//         output += '4'
//     } else if (input[i] === "i") {
//         output += "1"
//     } else if (input[i] === "o") {
//         output += "0"
//     } else {
//         output += input[i]
//     }
// }
// console.log(input);
// console.log(output)


// ! ПИШЕМ ИГРУ «ВИСЕЛИЦА»

// Используем confirm, чтобы получить ответ «да» или «нет»
// Alert — предупреждение

// let name = prompt("Как вас зовут?");
// console.log("Привет, " + name);

// let likesCats = confirm("Тебе нравятся кошки?");
// if (likesCats) {
//     alert("Ты классная кошка!")
// } else {
//     alert("Что ж, не проблема. Все равно ты молодец!")
// }

// ! Проектирование игры

// ? 1. Случайным образом выбирать слово.
// ? 2. Запрашивать у игрока вариант ответа(букву).
// ? 3. Завершать игру пожеланию игрока.
// ? 4. Проверять, является ли введенный ответ буквой.
// ? 5. Вести учет угаданных букв.
// ? 6. Показывать игроку, сколько букв ону гадал и сколько еще предстоит угадать.
// ? 7. Завершать игру, если слово отгадано.

// Используем псевдокод для проектирования игры


// 1. Попросить ввести число и сохранить в переменную
// 2.

// Напиши скрипт который просит пользователя ввести число и степень,
// возводят число в эту степень и вывдоит резульатт в консоль

let userNumber = prompt('Введи число')
console.log(userNumber);