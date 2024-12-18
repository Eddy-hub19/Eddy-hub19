// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const btnRef = document.querySelector(".change-color")
const spanColorRef = document.querySelector(".color")

btnRef.addEventListener("click", () => {
    const result = (document.body.style.background = getRandomHexColor())
    spanColorRef.textContent = result
})
