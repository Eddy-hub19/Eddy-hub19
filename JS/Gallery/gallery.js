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

const styleGallery = `
  display: flex;
  justify-content: center;
  gap: 30px;
  list-style: none;
`

galleryRef.style.cssText = styleGallery

let markup = listItems.join("")
galleryRef.innerHTML = markup

const btnRef = document.querySelector("button")

btnRef.addEventListener("click", () => {
    markup += markup
    galleryRef.innerHTML = markup
    galleryRef.insertAdjacentHTML("beforeend", markup)
})
