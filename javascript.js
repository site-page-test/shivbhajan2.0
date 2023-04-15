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




//Images event listners to play there specific audio

document.getElementById('new1').addEventListener('click',function(){
    audioElement.src= 'songs/Rom_Rom_Me_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";

document.getElementById('changeimage').src="img/romrommaibasjabhole.jpg";
     
    //actual download button functionality
    dblink.href=audioElement.src;
    ///setting the download icon to normal if user clicks this song after any other song
    downloadbutton.src="icons/circle-down-solid.svg";
    
    changeimgop.style.opacity="1";
    songname.innerHTML="Song-Rom Rom mai bas ja bhole";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by-Gajendra Pratap Singh"

    //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})

document.getElementById('new2').addEventListener('click',function(){
    audioElement.src= 'songs/Shiva_Tandav_Transcreation_l_Ashuto_(getmp3.pro).mp3';
    
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";

document.getElementById('changeimage').src="img/shivtandavsatotram.jpg";
    changeimgop.style.opacity="1";
    
    
   
    songname.innerHTML="Song-Shiv Tandav Stotram";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by-Aalok Shrivasta"
    
  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})



document.getElementById('0').addEventListener('click',function(){
    audioElement.src= 'songs/Jaikal_Mahakal_-_Lyric_(getmp3.pro).mp3';
    
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
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

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
    
})
document.getElementById('1').addEventListener('click',function(){
    audioElement.src= 'songs/Bhole_Hath_Sab_Tere_Full_Official_(getmp3.pro).mp3';
   
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
    
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

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('2').addEventListener('click',function(){
    audioElement.src='songs/Bhole_Baba_Pahadon_Ke_Raja_A-Jay_(getmp3.pro).mp3';
     
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
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
  
//Audio context has to be resumed for safari and chrome manually 
     context.resume();

})
document.getElementById('3').addEventListener('click',function(){
    audioElement.src='songs/BHALA_Kya_Wo_Karega_Leke_Chadhawa_(getmp3.pro).mp3';
     
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
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

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('4').addEventListener('click',function(){
    audioElement.src='songs/Bhola_Ji_-_Joshi_R_(getmp3.pro).mp3';
     
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
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
  
//Audio context has to be resumed for safari and chrome manually 
     context.resume();

})
document.getElementById('5').addEventListener('click',function(){
    audioElement.src='songs/Ron_Likhari_-_Bhola_Baba_Crush_Wa_(getmp3.pro).mp3';
     
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
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
 
 //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('6').addEventListener('click',function(){
    audioElement.src='songs/Hey_Shivaya_Shankaraya_Hey_Mahesh_(getmp3.pro).mp3';
     
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
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

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('7').addEventListener('click',function(){
    audioElement.src='songs/Jharneshwar_Bhole_De_(getmp3.pro).mp3';
     
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
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

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('8').addEventListener('click',function(){
    audioElement.src='songs/Kedarnath_Official_MV_-_Vinay_Kat_(getmp3.pro).mp3';
   
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
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

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('9').addEventListener('click',function(){
    audioElement.src='songs/Mera_Bhola_Hai_Bhandari_Bhole_Nat_(getmp3.pro).mp3';
    
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
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

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('10').addEventListener('click',function(){
    audioElement.src='songs/Agam_-_Om_Namah_Shivay_Har_Har_bh_(getmp3.pro).mp3';
    
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
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

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('11').addEventListener('click',function(){
    audioElement.src='songs/Agam_-_Shambhu_Nath_Mukesh_Pardes_(getmp3.pro).mp3';
    
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
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

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('12').addEventListener('click',function(){
    audioElement.src='songs/Shiv_Tu_Bhola_Hai_(getmp3.pro).mp3';
    
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
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

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('13').addEventListener('click',function(){
    audioElement.src='songs/Agam_-_Mere_Bhole_Shiv_Bhajan_M_(getmp3.pro).mp3';
     
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/mere bhole.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Mere Bhole";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- Agam Aggarwal"

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('14').addEventListener('click',function(){
    audioElement.src='songs/Bhola_Mera_Damru_Baja_Ke_Chala_Fu_(getmp3.pro).mp3';
     
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/bhola mera damru baja ke chala.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Bhola mera damru baja ke chala";
    songname.style.opacity='1';

    artistname.style.opacity='1';
    artistname.innerHTML="by- A-Jay M"

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('15').addEventListener('click',function(){
    audioElement.src='songs/BHOLA_SABKO_DETA_HAI__(getmp3.pro).mp3';
     
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/bhola sabko deta hai.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Bhola Sabko Deta Hai";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- Mohit L ,Abhlipsa P,Bharat K,Ravi C"

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('16').addEventListener('click',function(){
    audioElement.src='songs/Bholenath_ji_Hashtag_pandit_Abh_(getmp3.pro).mp3';
     
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/Bholenath ji.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Bholenath Ji";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- Abhilipsa Panda,Hastag Pandit"

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('17').addEventListener('click',function(){
    audioElement.src='songs/Chanda_Jhaanke_-_Official_Video_H_(getmp3.pro).mp3';
    
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
     audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/chanda jhake.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Chaanda Jhaanke";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- Hansraj Raghuwanshi ,Salim Sulaiman,Shradha"

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('18').addEventListener('click',function(){
    audioElement.src='songs/Devbhoomi_Main_Tumko_Shish_Navata_(getmp3.pro).mp3';
     
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/devbhoomi.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Devbhoomi geet";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- Jubin Nautiyal , PM Narendra Modi"

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('19').addEventListener('click',function(){
    audioElement.src='songs/Jai_Kara_Kedara-_Official_4K_Video_(getmp3.pro).mp3';
     
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/jai kara.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Jai kara";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by-Hansraj Raghuwanshi"

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('20').addEventListener('click',function(){
    audioElement.src='songs/Main_Shiv_Ka_Shiv_Mere_Lyrical_Vid_(getmp3.pro).mp3';
    
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
     audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/main shiv ka.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Main shiv ka";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- Hansraj Raghuwanshi"

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('21').addEventListener('click',function(){
    audioElement.src='songs/Mera_Bhola_Hai_Bhandari_Full_Song__(getmp3.pro).mp3';
     
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/mera bhola hai bhandari.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Mera Bhola Hai Bhandari"
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- Hansraj Raghuwanshi, Suresh Verma,Paramjeet Pammi"

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('22').addEventListener('click',function(){
    audioElement.src='songs/Parvati_Boli_Shankar_Se_-_O_Bholena_(getmp3.pro).mp3';
    
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
     audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/parvati boli shankar se.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Parvati Boli Shankar Se"
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- Hansraj Raghuwanshi"

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('23').addEventListener('click',function(){
    audioElement.src='songs/Sarwasva_Shiv_-_The_Legends_of_Bhol_(getmp3.pro).mp3';
     
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/Sarwasva Shiv.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Sarwasva Shiv";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- Agam Aggarwal"

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('24').addEventListener('click',function(){
    audioElement.src='songs/Shambu_Mere_Sang_Full_Video_Hansr_(getmp3.pro).mp3';
     
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/shambhu mere sang rhena.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Shambhu Mere Sang Rhena";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- Hansraj Raghuwanshi"

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('25').addEventListener('click',function(){
    audioElement.src='songs/Shiv_Hain_Na_-Song_Mahashivratri_(getmp3.pro).mp3';
     
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/shiv hai na.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Shiv Hai Na";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- Vinay katoch Ft Vineet Katoch"

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('26').addEventListener('click',function(){
    audioElement.src='songs/Shiv_Panchakshar_Stotra__(getmp3.pro).mp3';
    
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
     audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/shiv panchakshar.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Shiv Panchakshar";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by-  Sachet Tandon| Parampara Tandon | Bhushan Kumar"

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('27').addEventListener('click',function(){
    audioElement.src='songs/Shiv_Shiv_Shankara_official_video__(getmp3.pro).mp3';
     
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/shiv shiv shankara.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Shiv Shiv Shankara";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- Hansraj Raghuwanshi"

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
})
document.getElementById('28').addEventListener('click',function(){
    audioElement.src='songs/Bhole_Shankar_Official_Video__(getmp3.pro).mp3';
   
    //actual download button functionality
    dblink.href=audioElement.src;
    //re-setting download icon
    downloadbutton.src="icons/circle-down-solid.svg";
    
      audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";
    document.getElementById('changeimage').src="img/Bhole Shankar.jpg";
    changeimgop.style.opacity="1";

    songname.innerHTML="Song-Bhole Shankar";
    songname.style.opacity='1';
    artistname.style.opacity='1';
    artistname.innerHTML="by- Hansraj Raghuwanshi"

  //Audio context has to be resumed for safari and chrome manually 
     context.resume();
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


const musicPlayer = document.getElementsByClassName('bottom');

window.addEventListener('resize', () => {
  if (document.activeElement.tagName === 'input') {
    musicPlayer.style.display='none';
musicPlayer.remove();
  } else {
;
    musicPlayer.style.display='block';
document.body.appendChild(musicPlayer);
  }
});







