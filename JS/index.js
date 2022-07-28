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
