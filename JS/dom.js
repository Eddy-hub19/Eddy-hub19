// const titleRef = document.querySelector(".hero-title")

// console.log(titleRef)

// const listItems = document.querySelectorAll(".list-item")

// listItems.forEach((item) => {
//     console.log(item)
//     // item.firstElementChild.textContent

//     const linkRef = item.querySelector("a")
//     console.log(linkRef.textContent)

//     const itemsList = item.querySelectorAll("a")
//     console.log(itemsList.length);
// })

// const listItems = document.querySelectorAll(".list-item")

// console.log(listItems.length)

// listItems.forEach((item) => {
//     console.log(item)
// })

// const titleRef = document.querySelector(".hero-title")
// titleRef.textContent = "My title"
// console.log(titleRef);

// const btnEl = document.querySelector(".btn")

// btnEl.addEventListener("click", () => {
//     const imgEl = document.querySelector(".img")
//     imgEl.src = "https://picsum.photos/200/300"
//     console.log("click")
// })

// const listRef = document.querySelector(".js-gallery")
// const itemEl = document.createElement("li")

// console.log(listRef)
// itemEl.classList.add("gallery-item")
// const linkEl = document.createElement("a")
// linkEl.href = "#"

// const imgEl = document.createElement("img")
// imgEl.src = "https://picsum.photos/id/237/200/300"
// linkEl.append(imgEl)
// itemEl.append(linkEl)
// listRef.append(itemEl)
// console.log(itemEl);

const gallery = [
    {
        width: 400,
        height: 500,
        url: "https://picsum.photos/200",
    },
    {
        width: 400,
        height: 500,
        url: "https://picsum.photos/300",
    },
    {
        width: 400,
        height: 500,
        url: "https://picsum.photos/400",
    },
    {
        width: 400,
        height: 500,
        url: "https://picsum.photos/500",
    },
]

const galleryRef = document.querySelector("#js-gallery")

console.log(galleryRef)

const listItems = gallery.map(({ width, height, url, alt }) => {
    return `<li><a href="#"><img src="${url}" alt="${alt} width="${width}" height="${height}"></a></li>`
})

let markup = listItems.join("")
galleryRef.innerHTML = markup

const btnRef = document.querySelector("button")

btnRef.addEventListener("click", () => {
    markup += markup
    galleryRef.innerHTML = markup
    galleryRef.insertAdjacentHTML("beforeend", markup)
})
