console.log("welcome to shivbhaktigeet 2.0");
//initialize the variables


let audioElement=new Audio();
//Three lines copy paste from Audio visualisation
Let context = new AudioContext();
    Let src = context.createMediaElementSource(audioElement);
    Let analyser = context.createAnalyser();

let masterPlay=document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myprogressbar');
myprogressbar.value=0;
let changeimgop=document.getElementById('changeimage');

let songname = document.getElementById('name');
let artistname = document.getElementById('artist');
let currenttime=document.getElementsByClassName('current-time');
let maxtime=document.getElementsByClassName('max-duration');
let dash=document.getElementsByClassName('justadash');
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



//current time jugad ends here


audioElement.addEventListener('waiting',function(){

    masterPlay.removeAttribute('src');
    masterPlay.src="loaders/darkpurple.svg";
    audioElement.onplaying=function(){
        masterPlay.removeAttribute('src');
        masterPlay.src="icons/circle-pause-solid.svg";}
   
})




//Images event listners to play there specific audio

document.getElementById('new1').addEventListener('click',function(){
    audioElement.src= 'songs/Rom_Rom_Me_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";

document.getElementById('changeimage').src="img/romrommaibasjabhole.jpg";
    changeimgop.style.opacity="1";
    
    
   
    songname.innerHTML="Song-Rom Rom mai bas ja bhole";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by-Gajendra Pratap Singh"

    audioContext.resume();
})

document.getElementById('new2').addEventListener('click',function(){
    audioElement.src= 'songs/Shiva_Tandav_Transcreation_l_Ashuto_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";

document.getElementById('changeimage').src="img/shivtandavsatotram.jpg";
    changeimgop.style.opacity="1";
    
    
   
    songname.innerHTML="Song-Shiva Tandav Stotram";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by-Aalok Shrivasta"
    
})



document.getElementById('0').addEventListener('click',function(){
    audioElement.src= 'songs/Jaikal_Mahakal_-_Lyric_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    
    document.getElementById('changeimage').src="img/jaikal mahakal.jpg";
    changeimgop.style.opacity="1";
    
    
   
    songname.innerHTML="Song-Jaikal Mahakal";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- Amit Trivedi"

    
})
document.getElementById('1').addEventListener('click',function(){
    audioElement.src= 'songs/Bhole_Hath_Sab_Tere_Full_Official_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/bholehathsabtere.jpg";
    changeimgop.style.opacity="1";
    
    songname.innerHTML="Song-Bhole hath sab tere";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by-  A-Jay M"
})
document.getElementById('2').addEventListener('click',function(){
    audioElement.src='songs/Bhole_Baba_Pahadon_Ke_Raja_A-Jay_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/bholebabapahadokeraja.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Bhole Baba Pahado ke Raja";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by-  A-Jay M"
})
document.getElementById('3').addEventListener('click',function(){
    audioElement.src='songs/BHALA_Kya_Wo_Karega_Leke_Chadhawa_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/bhala.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Bhala";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- Vinay Ktoch"
})
document.getElementById('4').addEventListener('click',function(){
    audioElement.src='songs/Bhola_Ji_-_Joshi_R_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/bhola ji.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Bhola Ji";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- Joshi Ravv"
})
document.getElementById('5').addEventListener('click',function(){
    audioElement.src='songs/Ron_Likhari_-_Bhola_Baba_Crush_Wa_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/bholebaba-ron likhari.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Bhole Baba";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- Ron Likhari"
})
document.getElementById('6').addEventListener('click',function(){
    audioElement.src='songs/Hey_Shivaya_Shankaraya_Hey_Mahesh_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/hey shivaya.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Hey Shivaya Shankaraya";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- IshaFoundation"
})
document.getElementById('7').addEventListener('click',function(){
    audioElement.src='songs/Jharneshwar_Bhole_De_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/Jharneswarbhole.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Jharneshwar Bhole";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- Deepak Parashar"
})
document.getElementById('8').addEventListener('click',function(){
    audioElement.src='songs/Kedarnath_Official_MV_-_Vinay_Kat_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/kedarnath.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Kedarnath";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- Vinay Katoch"
})
document.getElementById('9').addEventListener('click',function(){
    audioElement.src='songs/Mera_Bhola_Hai_Bhandari_Bhole_Nat_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/merabholahaibhandari.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Mera Bhola hai Bhandari";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- Siddharth Mohan"
})
document.getElementById('10').addEventListener('click',function(){
    audioElement.src='songs/Agam_-_Om_Namah_Shivay_Har_Har_bh_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/om namah shivaya.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Om Namah Shivay";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- Agam Aggarwal"
})
document.getElementById('11').addEventListener('click',function(){
    audioElement.src='songs/Agam_-_Shambhu_Nath_Mukesh_Pardes_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/shambhu nath-agam aggarwal.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Shambhu Nath";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- Agam Aggarwal"
})
document.getElementById('12').addEventListener('click',function(){
    audioElement.src='songs/Shiv_Tu_Bhola_Hai_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/shivtubholahai.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Shiv Tu Bhola Hai";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- A-Jay M & S.Gosswami"
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

