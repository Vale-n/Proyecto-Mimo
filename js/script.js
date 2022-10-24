//---------------------------------------REPRODUCTOR--------------------------------------
// Song data
const songList = [
    {
        title: "I bet on losing dogs",
        file: "I bet on losing dogs-Mitski.mp3",
        cover: "1.jpg"

    },
    {
        title: "Shape Of My Heart ",
        file: "Shape Of My Heart-Sting.mp3",
        cover: "2.jpg"
    },
    {
        title: "Somewhere Only We Know ",
        file: "Somewhere Only We Know-Keane.mp3",
        cover: "3.jpg"
    },
    {
        title: "All Too Well",
        file: "All Too Well-Taylor Swift.mp3",
        cover: "4.jpg"
    },
    {
        title: "Seven",
        file: "Seven-Taylor Swift.mp3",
        cover: "5.jpg"
    },
]

// Canción actual
let actualSong = null;

// Capturar elementos del DOM para trabajar con JS
const songs = document.getElementById("songs")
const audio = document.getElementById("audio")
const cover = document.getElementById("cover")
const title = document.getElementById("title")
const play = document.getElementById("play")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
if(progressContainer){
    progressContainer.addEventListener("click", setProgress)
}


// Escuchar el elemento AUDIO
if(audio){
    audio.addEventListener("timeupdate", updateProgress)
}


// Escuchar clicks en los controles
if(play){
play.addEventListener("click", () => {
    if (audio.paused) {
        playSong()   
    } else {
        pauseSong()
    }
})
}

if(next){next.addEventListener("click", () => nextSong())}
if(prev){prev.addEventListener("click", () => prevSong())
}


// Cargar canciones y mostrar el listado
function loadSongs() {
    songList.forEach((song, index) => {
        // Crear li
        const li = document.createElement("li")
        // Crear a
        const link = document.createElement("a")
        // Hidratar a
        link.textContent = song.title
        link.href = "#"
        // Escuchar clicks
        if(link){ link.addEventListener("click", () => loadSong(index))}
       
        // Añadir a li
        if(li){
            li.appendChild(link)

        }
        
        // Aañadir li a ul
        if(songs){
            songs.appendChild(li)

        }
        
    })
}

// Cargar canción seleccionada
function loadSong(songIndex) {
    if (songIndex !== actualSong) {
        changeActiveClass(actualSong, songIndex)
        actualSong = songIndex
        audio.src = "../audio/" + songList[songIndex].file
        playSong()
        changeSongtitle(songIndex)
        changeCover(songIndex)
    }
}

// Actualizar barra de progreso de la canción
function updateProgress(event) {
    const {duration, currentTime} = event.srcElement
    const percent = (currentTime / duration) * 100
    progress.style.width = percent + "%" 
}

// Hacer la barra de progreso clicable
function setProgress(event) {
    const totalWidth = this.offsetWidth
    const progressWidth = event.offsetX
    const current = (progressWidth / totalWidth) * audio.duration
    audio.currentTime = current
}

// Actualiar controles
function updateControls() {
    if (audio.paused) {
        play.classList.remove("fa-pause")
        play.classList.add("fa-play")
    } else {
        play.classList.add("fa-pause")
        play.classList.remove("fa-play")
    }
}

// Reproducir canción
function playSong() {
    if (actualSong !== null) {
        audio.play()
        updateControls()
    }
}

// Pausar canción
function pauseSong() {
    audio.pause()
    updateControls()
}

// Cambiar clase activa
function changeActiveClass(lastIndex, newIndex) {
    const links = document.querySelectorAll("a")
    if (lastIndex !== null) {
        links[lastIndex].classList.remove("active")
    }
    links[newIndex].classList.add("active")
}

if(cover){cover.src= "../img/portada.png"}

// Cambiar el cover de la canción
function changeCover(songIndex) {
    cover.src = "../img/" + songList[songIndex].cover
}

// Cambiar el título de la canción
function changeSongtitle(songIndex) {
     title.innerText = songList[songIndex].title
}

// Anterior canción
function prevSong() {
    if (actualSong > 0) {
        loadSong(actualSong - 1)
    } else {
        loadSong(songList.length - 1)
    }
}

// Siguiente canción
function nextSong() {
    if (actualSong < songList.length -1) {
        loadSong(actualSong + 1)
    } else {
        loadSong(0)
    }
}

// Lanzar siguiente canción cuando se acaba la actual
if(audio){audio.addEventListener("ended", () => nextSong())}


// GO!
loadSongs()

//-------------------------------------------ACTIVIDADES----------------------------------------------
let boton= document.getElementById('boton');
let lista= document.getElementById('lista');
let mensaje=document.getElementById('mensaje');
let checks= document.querySelectorAll('.valores');

if(boton){
    boton.addEventListener('click', function(){
        lista.innerHTML='';
        mensaje.innerHTML='';
        let msj=document.createElement('h1');
        msj.innerHTML='Terminaste las siguientes actividades:';
        
        mensaje.append(msj);
        checks.forEach((e)=>{
      
            if(e.checked){
              let elemento=document.createElement('li');
              elemento.className='li';
              elemento.innerHTML=e.value;
              lista.appendChild(elemento);
            }
           
        });
      
      });
}
