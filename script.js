let songs = [
    {
        title: "Cozy Beats",
        artist: "LoFi Studio",
        src: "songs/song1.mp3",
        cover: "images/cover1.png"
    },
    {
        title: "Mr.Bean",
        artist: "The Funny Groove",
        src: "songs/song2.mp3",
        cover: "images/cover2.png"
    },
    {
        title: "Distant Echoes",
        artist: "Echo Drifters",
        src: "songs/song3.mp3",
        cover: "images/cover3.png"
    }
];

let index = 0;

let audio = document.getElementById("audio");
let cover = document.getElementById("cover");
let title = document.getElementById("title");
let artist = document.getElementById("artist");

function loadSong(i) {
    audio.src = songs[i].src;
    cover.src = songs[i].cover;
    title.textContent = songs[i].title;
    artist.textContent = songs[i].artist;
}

loadSong(index);

// Play / Pause
document.getElementById("play").onclick = () => {
    if(audio.paused) audio.play();
    else audio.pause();
};

// Next
document.getElementById("next").onclick = () => {
    index = (index + 1) % songs.length;
    loadSong(index);
    audio.play();
};

// Previous
document.getElementById("prev").onclick = () => {
    index = (index - 1 + songs.length) % songs.length;
    loadSong(index);
    audio.play();
};

// Volume control
document.getElementById("volume").oninput = (e) => {
    audio.volume = e.target.value;
};
