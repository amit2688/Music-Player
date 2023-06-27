let progress = document.getElementById("progress")
let song = document.getElementById("song")
let ctrlIcon = document.getElementById("ctrlIcon")
let myimage = document.getElementsByTagName("img")[0]
let h1 = document.getElementsByTagName("h1")[0]
let p = document.getElementsByTagName("p")[0]
let mysource = document.getElementById("song")
let time=document.getElementById("time")
var obj=[{
    'songname':"Jai Shri Ram Raja Ram",
    'singer':"Ft. Ajay Atul",
    'image':"ShriRam.jpg",
    'songmp3':"JaiShriRam.mp3"
},
{
'songname':"Levitating",
'singer':"Dua Lipa ft.DaBaby",
'image':"Levitating.jpg",
'songmp3':"Levitating.mp3"
},
{
    'songname':"Nattu Nattu",
'singer':"MM Keeravaani",
'image':"NattuNattu.jpg",
'songmp3':"NaatuNaatu.mp3"
},
{
    'songname':"Hari Hari Odhani",
'singer':"Pawan Singh",
'image':"HariHariOdhani.jpg",
'songmp3':"HariHariOdhani.mp3"
}
]

// console.log(obj[0].image)

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause()
        ctrlIcon.classList.remove("fa-pause")
        ctrlIcon.classList.add("fa-play")
    }
    else{
        song.play()
        ctrlIcon.classList.remove("fa-play")
        ctrlIcon.classList.add("fa-pause")
    }
}
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime
    },500)
}
progress.onchange = function(){
    song.play()
    song.currentTime = progress.value
    ctrlIcon.classList.remove("fa-play")
    ctrlIcon.classList.add("fa-pause")
}
var sec=1
if(song.play()){
    setInterval(()=>{
        
        time.innerHTML=sec
        sec++
    },500)
}

var i=1
function nextsong(){

myimage.setAttribute("src",obj[i].image)
h1.innerHTML=obj[i].songname
p.innerHTML=obj[i].singer
mysource.setAttribute("src",obj[i].songmp3)
song.play()
ctrlIcon.classList.add("fa-pause")
        ctrlIcon.classList.remove("fa-play")

i++
if(i>3){
    i=0
} 
}


function previoussong(){
myimage.setAttribute("src",obj[i].image)
h1.innerHTML=obj[i].songname
p.innerHTML=obj[i].singer
}

