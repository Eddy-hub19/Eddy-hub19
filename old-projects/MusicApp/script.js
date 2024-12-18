const songsToAdd = [{
        name: "Дождь",
        artist: "Mkt.san & Tabasco",
        album: "Monori",
        url: "./music/Дождь.mp3",
        cover_art_url: "./music/Rain.jpg",
    },
    {
        name: "Жизнь Комедия",
        artist: "Mkt.san",
        album: "Monori",
        url: "./music/Жизнь комедия - Mkt.san.mp3",
        cover_art_url: "./music/Комедия.jpg",
    },
    {
        name: "Моя сонная мелодия",
        artist: "Mkt.san",
        album: "Monori",
        url: "./music/Моя-сонная-мелодия.mp3",
        cover_art_url: "./music/my-sleepy-melody.jpg",
    },
    {
        name: "Arigato",
        artist: "Mkt.san & Mr.Benjiro",
        album: "Monori",
        url: "./music/Arigato.mp3",
        cover_art_url: "./music/arigato.jpeg",
    },
];

Amplitude.init({
    songs: [
        {
            name: "Я тобі Бажаю",
            artist: "Mkt.san",
            album: "З Днюхою вітаю",
            url: "./music/Бажаю.mp3",
            cover_art_url: "./music/baghayu.png",
        },
        {
            name: "Обрывки в моей памяти",
            artist: "Mkt.san",
            album: "",
            url: "./music/Обрывки-в-моей-памяти.mp3",
            cover_art_url: "./music/Обрывки.jpg",
        },
        {
            name: "Бестия",
            artist: "Mkt.san",
            album: "",
            url: "./music/Бестия.mp3",
            cover_art_url: "./music/Комедия.jpg",
        },
        {
            name: "Танцуй",
            artist: "Mkt.san",
            album: "",
            url: "./music/Танцуй-беба.mp3",
            cover_art_url: "./music/Танцуй.png",
        },
        {
            name: "Arigato",
            artist: "Mkt.san & Mr.Benjiro",
            album: "Monori",
            url: "./music/Arigato.mp3",
            cover_art_url: "./music/arigato.jpeg",
        },
        {
            name: "Муза",
            artist: "Mkt.san & Mr.Benjiro",
            album: "Monori",
            url: "./music/Муза.mp3",
            cover_art_url: "./music/vetka.jpg",
        },
        {
            name: "Vecher",
            artist: "Mkt.san & Mr.Benjiro",
            album: "Monori",
            url: "./music/Vecher.mp3",
            cover_art_url: "./music/vecher.jpg",
        },
        {
            name: "Моя сонная мелодия",
            artist: "Mkt.san",
            album: "Monori",
            url: "./music/Моя-сонная-мелодия.mp3",
            cover_art_url: "./music/my-sleepy-melody.jpg",
        },
        {
            name: "Жизнь Комедия",
            artist: "Mkt.san",
            album: "Monori",
            url: "./music/Жизнь комедия - Mkt.san.mp3",
            cover_art_url: "./music/Life.jpg",
        },
        {
            name: "Monori",
            artist: "Mkt.san",
            album: "Monori",
            url: "./music/MONORI.mp3",
            cover_art_url: "./music/Monori.jpg",
        },
    ],
});

/* Shows the playlist */
document
    .getElementsByClassName("show-playlist")[0]
    .addEventListener("click", function() {
        document
            .getElementById("white-player-playlist-container")
            .classList.remove("slide-out-top");
        document
            .getElementById("white-player-playlist-container")
            .classList.add("slide-in-top");
        document.getElementById("white-player-playlist-container").style.display =
            "block";
    });

/* Hides the playlist */
document
    .getElementsByClassName("close-playlist")[0]
    .addEventListener("click", function() {
        document
            .getElementById("white-player-playlist-container")
            .classList.remove("slide-in-top");
        document
            .getElementById("white-player-playlist-container")
            .classList.add("slide-out-top");
        document.getElementById("white-player-playlist-container").style.display =
            "none";
    });
const addToPlaylistButtons = document.getElementsByClassName(
    "add-to-playlist-button"
);

for (let i = 0; i < addToPlaylistButtons.length; i++) {
    addToPlaylistButtons[i].addEventListener("click", function() {
        let songToAddIndex = this.getAttribute("song-to-add");
        let newIndex = Amplitude.addSong(songsToAdd[songToAddIndex]);
        appendToSongDisplay(songsToAdd[songToAddIndex], newIndex);
        Amplitude.bindNewElements();

        /* Removes the container that contained the add to playlist button. */
        let songToAddRemove = document.querySelector(
            '.song-to-add[song-to-add="' + songToAddIndex + '"]'
        );
        songToAddRemove.parentNode.removeChild(songToAddRemove);
    });
}

/* Appends the song to the display. */
function appendToSongDisplay(song, index) {
    /* Grabs the playlist element we will be appending to. */
    let playlistElement = document.querySelector(".white-player-playlist");

    /* Creates the playlist song element */
    let playlistSong = document.createElement("div");
    playlistSong.setAttribute(
        "class",
        "white-player-playlist-song amplitude-song-container amplitude-play-pause"
    );
    playlistSong.setAttribute("data-amplitude-song-index", index);

    /* Creates the playlist song image element */
    let playlistSongImg = document.createElement("img");
    playlistSongImg.setAttribute("src", song.cover_art_url);

    /* Creates the playlist song meta element */
    let playlistSongMeta = document.createElement("div");
    playlistSongMeta.setAttribute("class", "playlist-song-meta");

    /* Creates the playlist song name element */
    let playlistSongName = document.createElement("span");
    playlistSongName.setAttribute("class", "playlist-song-name");
    playlistSongName.innerHTML = song.name;

    /* Creates the playlist song artist album element */
    let playlistSongArtistAlbum = document.createElement("span");
    playlistSongArtistAlbum.setAttribute("class", "playlist-song-artist");
    playlistSongArtistAlbum.innerHTML = song.artist + " &bull; " + song.album;

    /* Appends the name and artist album to the playlist song meta. */
    playlistSongMeta.appendChild(playlistSongName);
    playlistSongMeta.appendChild(playlistSongArtistAlbum);

    /* Appends the song image and meta to the song element */
    playlistSong.appendChild(playlistSongImg);
    playlistSong.appendChild(playlistSongMeta);

    /* Appends the song element to the playlist */
    playlistElement.appendChild(playlistSong);
}