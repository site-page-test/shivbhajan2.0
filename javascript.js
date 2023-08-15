console.log("welcome to shivbhaktigeet 2.0");
//initialize the variables


let audioElement=new Audio();

//Three lines copy paste from Audio visualisation
let context = new AudioContext();
    let src = context.createMediaElementSource(audioElement);
    let analyser = context.createAnalyser();

let masterPlay=document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myprogressbar');
myprogressbar.value=0;
let changeimgop=document.getElementById('changeimage');

let songname = document.getElementById('name');
let artistname = document.getElementById('artist');
let currenttime=document.getElementsByClassName('current-time');
let maxtime=document.getElementsByClassName('max-duration');
let dash=document.getElementsByClassName('justadash');

//anchor tag of download button
let dblink=document.getElementById('dbanchor');
//download button used for aknowledgement for user
let downloadbutton=document.getElementById("downloadbutton");

//eventhandler
//handle play/pause click
/*document.getElementById("main_btn")

.addEventListener("click", function (){
    hideId("main");
});  not a direct call to function hideId("main") ,this is callback .If you make direct call after click then your function will execute without click*/
masterPlay.addEventListener('click',function(){
    myfunction();
})
function myfunction(){
   
    if(audioElement.paused){
        audioElement.play();
        console.log('play listener is working');
        masterPlay.removeAttribute('src');
        masterPlay.src="icons/circle-pause-solid.svg";
    }
    else{
        audioElement.pause();
        console.log('pause listener is working');
        masterPlay.removeAttribute('src');
        masterPlay.src="icons/circle-play-solid.svg"; 
    }
}
audioElement.addEventListener('timeupdate',()=>{
   
    //update seebar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myprogressbar.value=progress;
    
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value * audioElement.duration/100;
})
//This code below worked  :) thanks to w3schools onwaiting events article
//current duration jugad starts here






audioElement.addEventListener('waiting',function(){

    masterPlay.removeAttribute('src');
    masterPlay.src="loaders/darkpurple.svg";
    audioElement.onplaying=function(){
        masterPlay.removeAttribute('src');
        masterPlay.src="icons/circle-pause-solid.svg";}
   
})




/*audio visualiser jugad*/
window.onload = function(){
  
    var file = this.audioElement;
    audioElement.load();
    
    
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.5;
    var barHeight;
    var x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame);

      x = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        
        var r = barHeight + (25 * (i/bufferLength));
        var g = 250 * (i/bufferLength);
        var b = 50;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }

    
    renderFrame();
}                                       

   const test = () => {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContext();
    console.log(audioContext.state); //suspended
    audioContext.resume();
    audioContext.onstatechange = () => console.log(audioContext.state); // running
}

//download acknowledgement for user
downloadbutton.addEventListener('click',function(){
    downloadbutton.src="icons/circle-check-regular.svg"
  
    
   function timer2(){
    
    downloadbutton.src="icons/circle-down-solid.svg";
   }
   setTimeout(timer2,10000);
})

//here we set the current time and max duration functionality
const currentTimeElement = document.querySelector(".current-time");
const maxDurationElement = document.querySelector(".max-duration");
const dashElement=document.querySelector(".justadash");
audioElement.addEventListener("timeupdate", function() {
  const currentTime = formatTime(audioElement.currentTime);
  const duration = formatTime(audioElement.duration);
  
  currentTimeElement.style.opacity="1";
  maxDurationElement.style.opacity="1";
  dashElement.style.opacity="1";
  currentTimeElement.textContent = currentTime;
  maxDurationElement.textContent = duration;
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  return `${minutes}:${formattedSeconds}`;
}

//While live testing it was observed that keyboard on Android was causing bottom elements to push up and get squeezed. 
//So we add event listener for that case and disappear the bottom when keyboard resize the window.
// add bottom element to DOM when input receives focus





const musicPlayer = document.getElementById("bottom");

window.addEventListener('resize', () => {
  if (document.activeElement.tagName === 'input') {
    musicPlayer.style.removeProperty("position")
  } else {
    musicPlayer.style.position='fixed';
  }
});

// implement previous and forward song selection by adding click event listeners to the backward and forward track icons. In the event listener function, you can update the src 
// attribute of the audio element with the source URL of the previous or next song in your song list array.
// define an array of song URLs
const songList = [  
    'songs/shivkadas.mp3',
    'songs/Devon Ke Dev Mahadev [Slowed + Reverb] - Akki Kalyan _ Lofi Songs _ Slowed And Reverb _ Lofi Vibes.mp3',
    'songs/DAMRU TERE NAAM KA BABA ❗Lofi Remix Song ❗ Slowed Reverb  NEW+LOFI+SONG❗LO-FI VIBES ❗Bhole Bhajan.mp3',
    'songs/Damru_Tere_Naam_Ka_Full_Video_T_(getmp3.pro) (1).mp3',
'songs/Rom_Rom_Me_(getmp3.pro).mp3',
'songs/Shiva_Tandav_Transcreation_l_Ashuto_(getmp3.pro).mp3',
'songs/Jaikal_Mahakal_-_Lyric_(getmp3.pro).mp3',
'songs/Bhole_Hath_Sab_Tere_Full_Official_(getmp3.pro).mp3',
'songs/Bhole_Baba_Pahadon_Ke_Raja_A-Jay_(getmp3.pro).mp3',
'songs/BHALA_Kya_Wo_Karega_Leke_Chadhawa_(getmp3.pro).mp3',
'songs/Bhola_Ji_-_Joshi_R_(getmp3.pro).mp3',

'songs/Ron_Likhari_-_Bhola_Baba_Crush_Wa_(getmp3.pro).mp3',
'songs/Hey_Shivaya_Shankaraya_Hey_Mahesh_(getmp3.pro).mp3',
'songs/Jharneshwar_Bhole_De_(getmp3.pro).mp3',
'songs/Kedarnath_Official_MV_-_Vinay_Kat_(getmp3.pro).mp3',
'songs/Mera_Bhola_Hai_Bhandari_Bhole_Nat_(getmp3.pro).mp3',
'songs/Agam_-_Om_Namah_Shivay_Har_Har_bh_(getmp3.pro).mp3',
'songs/Agam_-_Shambhu_Nath_Mukesh_Pardes_(getmp3.pro).mp3',
'songs/Shiv_Tu_Bhola_Hai_(getmp3.pro).mp3',
'songs/Agam_-_Mere_Bhole_Shiv_Bhajan_M_(getmp3.pro).mp3',
'songs/Bhola_Mera_Damru_Baja_Ke_Chala_Fu_(getmp3.pro).mp3',
'songs/BHOLA_SABKO_DETA_HAI__(getmp3.pro).mp3',
'songs/Bholenath_ji_Hashtag_pandit_Abh_(getmp3.pro).mp3',
'songs/Chanda_Jhaanke_-_Official_Video_H_( getmp3.pro).mp3',
'songs/Devbhoomi_Main_Tumko_Shish_Navata_(getmp3.pro).mp3',
'songs/Jai_Kara_Kedara-_Official_4K_Video_(getmp3.pro).mp3',
'songs/Main_Shiv_Ka_Shiv_Mere_Lyrical_Vid_(getmp3.pro).mp3',
'songs/Mera_Bhola_Hai_Bhandari_Full_Song__(getmp3.pro).mp3',
'songs/Parvati_Boli_Shankar_Se_-_O_Bholena_(getmp3.pro).mp3',
'songs/Sarwasva_Shiv_-_The_Legends_of_Bhol_(getmp3.pro).mp3',
'songs/Shambu_Mere_Sang_Full_Video_Hansr_(getmp3.pro).mp3',
'songs/Shiv_Hain_Na_-Song_Mahashivratri_(getmp3.pro).mp3',
'songs/Shiv_Panchakshar_Stotra__(getmp3.pro).mp3',
'songs/Shiv_Shiv_Shankara_official_video__(getmp3.pro).mp3',
'songs/Bhole_Shankar_Official_Video__(getmp3.pro).mp3'
]
const artistName=[
    "by-Gajendra Pratap Singh and Ravindra Pratap Singh",
    "by-Akki Kalyan",
"by-yk lofi official 22",
    "by-Tanu Rawat, Shree RK, Akki Aryan",
  "by-Gajendra Pratap Singh",  
"by-Aalok Shrivasta", 
"by- Amit Trivedi",
"by-  A-Jay M",
"by-  A-Jay M",
"by- Vinay Ktoch",
"by- Joshi Ravv",
"by- Ron Likhari",
"by- IshaFoundation",
"by- Deepak Parashar",
"by- Vinay Katoch",
"by- Siddharth Mohan",
"by- Agam Aggarwal",
"by- Agam Aggarwal",
"by- A-Jay M & S.Gosswami",
"by- Agam Aggarwal",
"by- A-Jay M",
"by- Mohit L ,Abhlipsa P,Bharat K,Ravi C",
"by- Abhilipsa Panda,Hastag Pandit",
"by- Hansraj Raghuwanshi ,Salim Sulaiman,Shradha",
"by- Jubin Nautiyal , PM Narendra Modi",
"by-Hansraj Raghuwanshi",
"by- Hansraj Raghuwanshi",
"by- Hansraj Raghuwanshi, Suresh Verma,Paramjeet ",
"by- Hansraj Raghuwanshi",
"by- Agam Aggarwal",
"by- Hansraj Raghuwanshi",
"by- Vinay katoch Ft Vineet Katoch",
"by-  Sachet Tandon| Parampara Tandon | Bhushan K",
"by- Hansraj Raghuwanshi",
"by- Hansraj Raghuwanshi"
]
const songName =[
    "Song-Shiv ka das",
    "Song-Devo ke dev",
    "Song-Damru tere naam ka(slowed+reverb)",
    "Song-Damru tere naam ka",
  "Song-Rom Rom mai bas ja bhole",
  "Song-Shiv Tandav Stotram",
  "Song-Jaikal Mahakal",
  "Song-Bhole hath sab tere",
  "Song-Bhole Baba Pahado ke Raja",
  "Song-Bhala",
  "Song-Bhola Ji",
  "Song-Bhole Baba",
  "Song-Hey Shivaya Shankaraya",
  "Song-Jharneshwar Bhole",
  "Song-Kedarnath",
  "Song-Shankar Nath re",
  "Song-Om Namah Shivay",
  "Song-Shambhu Nath",
  "Song-Shiv Tu Bhola Hai",
  "Song-Mere Bhole",
  "Song-Bhola mera damru baja ke chala",
  "Song-Bhola Sabko Deta Hai",
  "Song-Bholenath Ji",
  "Song-Chaanda Jhaanke",
  "Song-Devbhoomi geet",
  "Song-Jai kara",
  "Song-Main shiv ka",
  "Song-Mera Bhola Hai Bhandari",
  "Song-Parvati Boli Shankar Se",
  "Song-Sarwasva Shiv",
  "Song-Shambhu Mere Sang Rhena",
  "Song-Shiv Hai Na",
  "Song-Shiv Panchakshar",
  "Song-Shiv Shiv Shankara",
  "Song-Bhole Shankar"
]
const imageSrc=[ 
    "img/shivkadas.jpg",
    "img/devokedev.jpg",
    "img/damruterenaamkaslowed.jpg",
"img/damru tere naam ka.jpg",
  "img/romrommaibasjabhole.jpg",    
  "img/shivtandavsatotram.jpg",
  "img/jaikal mahakal.jpg",
  "img/bholehathsabtere.jpg",
  "img/bholebabapahadokeraja.jpg",
  "img/bhala.jpg",
  "img/bhola ji.jpg",
  "img/bholebaba-ron likhari.jpg",
  "img/hey shivaya.jpg",
  "img/Jharneswarbhole.jpg",
  "img/kedarnath.jpg",
  "img/shankar nath re.jpg",
  "img/om namah shivaya.jpg",
  "img/shambhu nath-agam aggarwal.jpg",   
  "img/shivtubholahai.jpg",
  "img/mere bhole.jpg",
  "img/bhola mera damru baja ke chala.jpg",
  "img/bhola sabko deta hai.jpg",
  "img/Bholenath ji.jpg",
  "img/chanda jhake.jpg",
  "img/devbhoomi.jpg",
  "img/jai kara.jpg",
  "img/main shiv ka.jpg",
  "img/mera bhola hai bhandari.jpg",
  "img/parvati boli shankar se.jpg",
  "img/Sarwasva Shiv.jpg",
  "img/shambhu mere sang rhena.jpg",
  "img/shiv hai na.jpg",
  "img/shiv panchakshar.jpg",
  "img/shiv shiv shankara.jpg",
  "img/Bhole Shankar.jpg"
    
]
// const audioElement = document.getElementById("audio");
const backwardTrack = document.getElementById("prev");
const forwardTrack = document.getElementById("next");

let currentSongIndex = 0; // initialize to the first song in the array
let currentArtistIndex= 0;   //this will be used to initialize first song name 
let currentSongNameIndex=0;
let currentImageSrcIndex=0;
// function to play the current song
function playSong() {
  
  //set the source of audioElement
  audioElement.src = songList[currentSongIndex];
   //actual download button functionality
   dblink.href=audioElement.src;
   //re-setting download icon
   downloadbutton.src="icons/circle-down-solid.svg";
 
  // set the song of name text and visibility
  artistname.style.opacity='1';
  artistname.innerHTML=artistName[currentArtistIndex];
//set the song name and make it visible
songname.innerHTML=songName[currentSongNameIndex];
songname.style.opacity='1';
//set the image in bottom to brcomr vidible with src
document.getElementById('changeimage').src=imageSrc[currentImageSrcIndex];
changeimgop.style.opacity="1";

audioElement.play();
 //Audio context has to be resumed for safari and chrome manually 
 context.resume();
}

// function to play the previous song
function playPreviousSong() {
  currentSongIndex--;
  currentArtistIndex--;
currentSongNameIndex--;
currentImageSrcIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = songList.length - 1; // wrap around to the last song in the array
  }
  if (currentArtistIndex < 0) {
    currentArtistIndex =artistName.length - 1; // wrap around to the last song in the array
  }
  
  if (currentSongNameIndex < 0) {
    currentSongNameIndex =songName.length - 1; // wrap around to the last song in the array
  }
  if (currentImageSrcIndex < 0) {
    currentImageSrcIndex =imageSrc.length - 1; // wrap around to the last song in the array
  }
  playSong();
}

// function to play the next song
function playNextSong() {
  currentSongIndex++;
  currentArtistIndex++;
currentSongNameIndex++;
currentImageSrcIndex++;
  if (currentSongIndex >= songList.length) {
    currentSongIndex = 0; // wrap around to the first song in the array
  }
  if (currentArtistIndex >= artistName.length) {
    currentArtistIndex = 0; // wrap around to the first song in the array
  }
  
  if (currentSongNameIndex >= songName.length) {
    currentSongNameIndex = 0; // wrap around to the first song in the array
  }
  if (currentImageSrcIndex>= imageSrc.length) {
    currentImageSrcIndex = 0; // wrap around to the first song in the array
  }
  playSong();
}

// add event listeners to the backward and forward track icons
backwardTrack.addEventListener("click", playPreviousSong);
forwardTrack.addEventListener("click", playNextSong);

//REPEAT ICON FUNCTIONALITY

//first we will create a function that toggles between two modes: repeat one and repeat all. The function can take in the current mode as an argument and return the new mode after toggling.


//Then you can add a click event listener to the repeat icon element that calls this function and updates the icon image based on the new repeat mode:
let repeatMode = 0; // 0 for no repeat, 1 for repeat one, 2 for repeat all
let repeatButton=document.getElementById('repeat-icon');
function repeatSongs() {
  if (repeatMode === 0) {
    audioElement.loop = true;
    repeatMode = 1;
    repeatButton.src = "icons/icons8-repeat-one-50.png";
  } else if(repeatMode==1){
    audioElement.loop = false;
    repeatMode = 2;
    repeatButton.src = "icons/icons8-repeat-ALL-2.png";
  }
  else{
    audioElement.loop = false;
    repeatMode = 0;
    repeatButton.src = "icons/repeat-solid.svg";
  } 
}

repeatButton.addEventListener('click', repeatSongs);


//Repeat-ALL functionality
/*    In this code, we first set the src of the audioElement to the URL of the current song. 
Then we set up an event listener for the ended event of the audioElement. Inside the event listener, 
we check if the repeat mode is set to 2 (repeat all songs), and if so, we increment the currentSongIndex
 and set the src of the audioElement to the URL of the next song in the playlist (wrapping around to the 
  beginning of the playlist if we've reached the end). Finally,
 we call play() on the audioElement to start playing the next song.*/

/*To implement the repeat all songs function, you can use the ended event of the audioElement object. 
The ended event is fired when playback of an audio/video has stopped because the end of the media has 
been reached. When this event is fired, you can check if the repeat mode is set to 2 (i.e., repeat all songs)
 and if so, play the next song in the playlist.    */

// Assuming you have an array of song URLs called "songUrls" and a variable "currentSongIndex" to keep track of the current song index
audioElement.src = songList[currentSongIndex];

// Set up the "ended" event listener for the audio element
audioElement.addEventListener('ended', function() {
  if (repeatMode === 2) {
    currentSongIndex = (currentSongIndex + 1) % songList.length;
      currentArtistIndex=(currentArtistIndex+1)% artistName.length;
      currentImageSrcIndex=(currentImageSrcIndex+1)% imageSrc.length;
      currentSongNameIndex=(currentSongNameIndex+1)% songName.length;
      
    audioElement.src = songList[currentSongIndex];
      //actual download button functionality
   dblink.href=audioElement.src;
   //re-setting download icon
   downloadbutton.src="icons/circle-down-solid.svg";
 
  // set the song of name text and visibility
  artistname.style.opacity='1';
  artistname.innerHTML=artistName[currentArtistIndex];
//set the song name and make it visible
songname.innerHTML=songName[currentSongNameIndex];
songname.style.opacity='1';
//set the image in bottom to brcomr vidible with src
document.getElementById('changeimage').src=imageSrc[currentImageSrcIndex];
changeimgop.style.opacity="1";

audioElement.play();
//Audio context has to be resumed for safari and chrome manually 
context.resume();
  }
});
//imageElements is an array of images in the container
const imageElements = document.querySelectorAll(".container img");
// loop through the image elements and add click listeners
for (let i = 0; i < imageElements.length; i++) {
  let imageElement = imageElements[i];
  imageElement.addEventListener('click', function() {
   
   
    // set the audio source based on the index of the clicked image
    audioElement.src = songList[i];
    audioElement.currentTime=0; 
    
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
  
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";

    // set the image source and artist/song names
    document.getElementById('changeimage').src = imageSrc[i];
    changeimgop.style.opacity="1";
    artistname.innerHTML = artistName[i];
    songname.innerHTML = songName[i];
    songname.style.opacity='1';
    artistname.style.opacity='1';
    

    // play the audio
    audioElement.play();

    //Audio context has to be resumed for safari and chrome manually 
    context.resume();
  });
}





