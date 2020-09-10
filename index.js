const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector('img');

const songName = document.getElementById("songName");
const artistName = document.getElementById("artistName");
const prev = document.getElementById("prev");
const next = document.getElementById("next");












const songs = [
    {
        id: 'song1',
        songName: 'song1',
        artistName:'Owner Credits 1'
    },
    {
        id: 'song2',
        songName: 'song2',
        artistName:'Owner Credits 2'
    },
    {
        id: 'song3',
        songName: 'song3',
        artistName:'Owner Credits 3'
    },
    
]

//functions for playing and pausing

let isAudioPlaying = false;

const playTheMusic = ()=>{
    isAudioPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("rotateAnime");
};

//pause function
const pauseTheMusic = ()=>{
    isAudioPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("rotateAnime");
};

//event is firing on clikcing play button
play.addEventListener("click", ()=>{
  
    isAudioPlaying ? pauseTheMusic() : playTheMusic();

});


//changing the songs

const loadTheSong = (songs)=>{
    songName.textContent = songs.songName;
    artistName.textContent = songs.artistName;
    music.src = "music/" + songs.id + ".mp3";
    img.src = "img/" + songs.id + ".jpg";
}

songIndex = 0;
const nextSong = ()=>{
    songIndex = (songIndex + 1) % songs.length;
    loadTheSong(songs[songIndex]);
    playTheMusic();
};

const prevSong = ()=>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadTheSong(songs[songIndex]);
    playTheMusic();
}

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

