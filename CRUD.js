/* CRUD */

/* GET */
// const BASE_URL = "https://localhost:3000"

// function fetchBooks() {
//     return fetch(`${BASE_URL}/users`).then((res) => res.json())
// }

// function fetchBookById(userId) {
//     return fetch(`${BASE_URL}/${userId}`).then((res) => res.json())
// }

/* POST */

const BASE_URL = "http://localhost:3000"

const newBook = {
    title: "Test Book",
    author: "I am",
    genres: ["JS"],
    raiting: 10,
}

const options = {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newBook),
}

fetch(`${BASE_URL}/users/9`, options)
    .then(res => res.json())
    .then(console.log("post"))
