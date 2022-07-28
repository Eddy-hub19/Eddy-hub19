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

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  let totalPrice = pricePerDroid * orderedQuantity
  console.log(totalPrice)
  // Change code above this line
  if (totalPrice >= orderedQuantity) {
    message = "Insufficient funds!"
  } else if(totalPrice - customerCredits) {
    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`
  }
  return message;
}

console.log(makeTransaction(3000, 5, 23000));

