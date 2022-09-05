// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const listEl = document.querySelector("#categories")
console.log("Number of categories:", listEl.children.length)

const itemEl = listEl.querySelectorAll(".item h2")
const getItems = itemEl.forEach((item) => {
    console.log("Category:", item.textContent)
})

const elementItems = listEl.querySelectorAll(".item ul")

const getEl = elementItems.forEach((item) => {
    console.log("element:", item.children.length)
})
