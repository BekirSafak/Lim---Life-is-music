// * demo.html için JS Kodları.
const title = document.querySelector('.title');
const prev = document.querySelector('.prev');
const playPause = document.querySelector('.playPause');
const next = document.querySelector('.next');
const audio = document.querySelector('audio');

//? müzik listesi
const musicList = [
    {
        path: "music/msc1.mp3",
        musicName: "Geoxor - You & I"
    },
    {
        path: "/music/msc2.mp3",
        musicName: "Ship Wrek - Pain ft.Vaile"
    },
    {
        path: "/music/msc3.mp3",
        musicName: "Nico Staf -Smooth and Cool"
    },
    {
        path: "/music/msc4.mp3",
        musicName: "The Same Persons - Versace"
    }
];

let musicPlaying = false;

//? play fonksiyonu
function playMusic() {
    musicPlaying = true;
    audio.play();
    playPause.classList.add('active');
    playPause.innerHTML = `<ion-icon name="pause-outline"></ion-icon>`
}

//? pause fonksiyonu
function pauseMusic() {
    musicPlaying = false;
    audio.pause();
    playPause.classList.remove('active');
    playPause.innerHTML = `<ion-icon name="play-outline"></ion-icon>`
}

//? play - pause click eventi
playPause.addEventListener('click', () => {
    musicPlaying ? pauseMusic() : playMusic()
});

//? müzik listesi
function loadMusic(musicList) {
    title.textContent = musicList.musicName;
    audio.src = musicList.path;
}

//? müzik listesi sayacı
let i = 0;

//? onload olduğunda seçicek müzik.  
loadMusic(musicList[i]);

prev.addEventListener('click', function prevMusic() {
    i--;
    if (i < 0) {
        i = musicList.length - 1;
    }
    loadMusic(musicList[i]);
    playMusic();
});

next.addEventListener('click', function nextMusic() {
    i++;
    if (i > musicList.length - 1) {
        i = 0;
    }
    loadMusic(musicList[i]);
    playMusic();
});

