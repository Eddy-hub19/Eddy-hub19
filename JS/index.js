// 1. Попросить ввести число и сохранить в переменную
// 2. Попросить ввести степень и сохранить в переменную
// 2. Возвести введенные данные в степень и вывести

// Напиши скрипт который просит пользователя ввести число и степень,
// возводят число в эту степень и вывдоит резульатт в консоль

// let userNumber = prompt('Введи число')
// userNumber = Number(userNumber)
// console.log(userNumber);

// let power = prompt('Введи число степеня')
// power = Number(power)
// console.log(userNumber);

// const result = userNumber ** power;
// console.log(result);

// const hour = 15;
// const minutes = 25;

// let result;

// if(minutes > 0) {
//   result = `${hour} г. ${minutes} хв`;
// } else{
//   result = `${hour} г.`;
// }

// console.log(result);

// const number = prompt('Введи число');

// if(number > 0) {
//   console.log('Це додатнє число');
// }else if (number === 0) {
//   console.log('Це відʼємне число');
// }else{
//   console.log('eroor');
// }

/////////////////////

// const a = 101
// const b = 202

// case 1

// if (a > 100 && b > 100) {if (a > b) {console.log(a)} else {console.log(b)}}

// case 2

// const max = a > b ? a : b;
// console.log(max);

// case 3
// console.log(Math.max(a, b, 500));

/////////////////////

// let link = 'https://somesite.com/about';
// let link = 'https://my-site.com/about';

// if (link.includes('my-site') && !link.endsWith('/')) {
//   link = `${link}/`;
// }

// console.log(link);

// let link = 'https://my-site.com/about';

// const result = !link.endsWith('/') ? `${link}/` : link;

// console.log(result);

////////////////////////////

// const hour = 24

// if (hour < 17) {
//     console.log("Pending")
// } else if (hour >= 17 && hour <= 24) {
//     console.log("Expires")
// } else {
//     console.log("Overdue")
// }

////////////////////////////

// const daysUntilDeadLine = 0

// if (daysUntilDeadLine === 0) {
//   console.log('Today');
// } else if (daysUntilDeadLine === 1) {
//   console.log('Tomorrow');
// } else if (daysUntilDeadLine === 2) {
//   console.log('after tomorrow');
// }else{
//   console.log('dead');
// }

// switch (daysUntilDeadLine) {
//     case 0: {
//         console.log("Сьогодні")
//         break
//     }
//     case 1: {
//         console.log("Завтра")
//         break
//     }
//     case 2: {
//         console.log("Післязавтра")
//         break
//     }
//     default:
//         console.log("Дата в майбутньому")
// }

// const daysUntilDeadLine = "Післязавтра"

// switch (daysUntilDeadLine) {
//     case "Сьогодні": {
//         console.log("Кількість днів 0")
//         break
//     }
//     case "Завтра": {
//         console.log("Кількість днів 1")
//         break
//     }
//     case "Післязавтра": {
//         console.log("Кількість днів 2")
//         break
//     }
//     default:
//         console.log("Можна ще нічого не робити")
// }

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// let user
// let password = 202020

// do {
//     user = prompt("Введи логін")

//     if (user === "Админ") {
//         password = prompt("Введи пароль")

//         if (password !== "Я админ") {
//             console.log("Я вас не знаю")
//         }else {
//           console.log("Здрвствуйте")
//         }
//     }
// } while (user !== "Админ" && password !== "Я админ")

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line

//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   console.log(totalPrice);
//   const message = `You ordered droids worth ${totalPrice} credits.
//   Delivery (${deliveryFee} credits) is included in total price.`

//   console.log(message);
//   // Change code above this line
//   return message;
// }

// makeOrderMessage(2, 100, 50)
// makeOrderMessage(4, 300, 100)
// makeOrderMessage(10, 70, 200)

// Проверка пароля

// function isValidPassword(password) {
//     const SAVED_PASSWORD = "jqueryismyjam"
//     // Change code below this line
//     const isMatch = password === SAVED_PASSWORD
//     // Change code above this line
//     return isMatch
// }

// console.log(isValidPassword("jqueryismyjam"));

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (available > ordered) {
//     message = "Заказ обработан, наш менеджер свяжется с вами."

//   } else {
//     message = "Недостаточно товара на складе!"
//   }
//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(10, 8));

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

///////////////////////////////////////////////Applications

// Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// pricePerDroid - цена одного дроида
// orderedQuantity - кол-во заказанных дроидов
// customerCredits - сумма средств на счету клиента
// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку "Insufficient funds!";
// в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: "You ordered <число> droids, you have <число> credits left".

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   let totalPrice = pricePerDroid * orderedQuantity
//   console.log(totalPrice)
//   // Change code above this line
//   if (totalPrice >= orderedQuantity) {
//     message = "Insufficient funds!"
//   } else if(totalPrice - customerCredits) {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`
//   }
//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000));

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//  if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT
//   } else if (totalSpent >= 2000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam"
//     let message
//     // Change code below this line

//     switch (null) {
//         case password:
//             password === null
//             message = "Canceled by user!"
//             break
//         case password:
//             password === ADMIN_PASSWORD
//             message = "Welcome!"
//             break

//         default:
//             message = "Access denied, wrong password!"
//     }

//     // Change code above this line
//     return message
// }

// console.log(checkPassword("jqueryismyjam"))

// Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.

// courseTopicLength - длина строки.
// firstElement - первый символ строки.
// lastElement - последний символ строки.

// Значение переменной courseTopicLength это число 21
// Объявлена переменная firstElement
// Значение переменной firstElement это строка "J"
// Объявлена переменная lastElement
// Значение переменной lastElement это строка "s"

// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length-1];

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"]

// for (let i = 0; i < fruits.length; i++) {
//     console.log(`${i + 1}:${fruits[i]}`)
// }

// const numbers = [2, 17, 94, 1, -20, -50, 23, 37]
// let minNumber = numbers[0]
// for (const number of numbers) {
//     if (number < minNumber) {
//         minNumber = number
//     }
// }

// console.log(minNumber)

// const genres = ["Jass", "Blues", "rock`n`roll", "Country"]

// let longWord = genres[0]

// for (const genre of genres) {
//     if (genre.length > longWord.length) {
//         longWord = genre
//     }
// }

// console.log(longWord)

// const salaries = [200, 450, 600, 150, 300]
// let total = 0

// for (let i = 0; i < salarieis.length; i++) {
//     total += salarieis[i]
// }
// console.log(total);

// for (const salari of salaries) {
//     total += salari;
// }

// const values = "8,11"

// const sidesArr = values.split(",")

// const area = Number(sidesArr[0]) * Number(sidesArr[1])

// console.log(area)

// const names = "Jacob,William,Solomon,Artemis"
// const phones = "89001234567,89001112233,890055566377,890055566300"

// const namesArr = names.split(", ")
// const phonesArr = phones.split(",")
// console.log(phonesArr)

// for (let i = 0; i < namesArr.length; i++) {
//     console.log(phonesArr[i])
//     console.log(`${namesArr[i]} - ${phonesArr[i]} `)
// }

// const string = "Welcome to the future!"
// const strArr = string.split(' ')
// const reversStrArr = strArr.reverse();
// const reverseStr = reversStrArr.join('')

// console.log(strArr)

// const employes = ["Dennis", "Dennis", "Show", "Watkins", "Ray"]

// const filteredEmployees = []

// console.log(employes.indexOf(Dennis));
// 'Dennis' index -> 0 === indexOf - > 0 // true
// 'Dennis' index -> 1 === indexOf - > 0 // false
// 'Show' index -> 2 === indexOf - > 2 // true
// 'Watkins' index -> 3 === indexOf - > 3 // true
// 'Ray' index -> 5 === indexOf - > 5 // true

// for (let i = 0; i < employes.length; i++) {
//     console.log(employes[i], "indexOf")
//     console.log(employes[i], "indexOf", employes.indexOf(employes[i]))

//     if ((i === employes[i], "indexOf", employes.indexOf(employes[i]))) {
//         filteredEmployees.push(employes[i])
//     }
//     console.log("--------------")
// }

// function getExtremeElements(array) {

// const extremeElements = [array[0], array[array.length - 1]];
//   return extremeElements
// }
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]))

// function calculateEngravingPrice(message, pricePerWord) {

//   let messageSplit = message.split(" ")
//   let messageLength = messageSplit.length;
//   let totalPrice = messageLength * pricePerWord
  
//    return totalPrice
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));


// function slugify(title) {
// return title.toLowerCase().split(" ").join('-');
// }
// console.log(slugify("English for developer"));
