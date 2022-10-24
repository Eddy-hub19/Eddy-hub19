const user = [
    {
        name: "Ed",
        age: 21,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        width: 60,
        height: 60,
    },
    {
        name: "Kolya",
        age: 20,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796",
        width: 60,
        height: 60,
    },

    {
        name: "Sasha",
        age: 20,
        title: "culpa odio esse rerum omnis laboriosam voluptate",
        url: "https://via.placeholder.com/600/d32776",
        width: 60,
        height: 60,
    },
    {
        name: "Taras",
        age: 19,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796",
        width: 60,
        height: 60,
    },
]

const openModal = document.querySelector(".open-modal")
const closeModal = document.querySelector(".close-modal")
const backdrop = document.querySelector(".js-backdrop")
const listRef = document.querySelector(".list")

openModal.addEventListener("click", onOpenModal)
closeModal.addEventListener("click", onCloseModal)
backdrop.addEventListener("click", onBackdrop)

const markup = user.map(({ name, age, title, url, width, height }) => {
    return ` <li class="item"><h2>${name}</h2><span>${age}</span><p>${title}</p><img class="item-img" width="${width}" height="${height}" src=${url} /></li>`
})

function onOpenModal() {
    window.document.addEventListener("keydown", onsEscKeyPress)
    backdrop.classList.add("active")
}

function onCloseModal() {
    window.document.removeEventListener("keydown", onsEscKeyPress)
    backdrop.classList.remove("active")
}

function onBackdrop(event) {
    if (event.currentTarget === event.target) {
        backdrop.classList.remove("active")
    }
}
function onsEscKeyPress(event) {
    console.log(event)
    if (event.code === "Escape") {
        onCloseModal()
    }
}

listRef.insertAdjacentHTML("afterbegin", markup.join(""))
