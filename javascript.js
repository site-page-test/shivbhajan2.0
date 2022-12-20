console.log("welcome to shivbhaktigeet 2.0");
//initialize the variables

let audioElement=new Audio('songs/Bhole_Hath_Sab_Tere_Full_Official_(getmp3.pro).mp3');
let masterPlay=document.getElementById('masterPlay');

let myprogressbar=document.getElementById('myprogressbar');


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
   
    if(audioElement.paused || audioElement.currentTime<=0){
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
audioElement.addEventListener('waiting',function(){

    masterPlay.removeAttribute('src');
    masterPlay.src="loaders/darkpurple.svg";
    audioElement.onplaying=function(){
        masterPlay.removeAttribute('src');
        masterPlay.src="icons/circle-pause-solid.svg"; }
})

document.getElementById('0').addEventListener('click',function(){
    audioElement.src='songs/_Jaikal_Mahakal_-_Lyric_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";

})
document.getElementById('1').addEventListener('click',function(){
    audioElement.src='songs/Bhole_Hath_Sab_Tere_Full_Official_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";

})
document.getElementById('2').addEventListener('click',function(){
    audioElement.src='songs/Bhole_Baba_Pahadon_Ke_Raja_A-Jay_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";

})
document.getElementById('3').addEventListener('click',function(){
    audioElement.src='songs/BHALA_Kya_Wo_Karega_Leke_Chadhawa_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";

})
document.getElementById('4').addEventListener('click',function(){
    audioElement.src='songs/Bhola_Ji_-_Joshi_R_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";

})
document.getElementById('5').addEventListener('click',function(){
    audioElement.src='songs/Ron_Likhari_-_Bhola_Baba_Crush_Wa_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";

})
document.getElementById('6').addEventListener('click',function(){
    audioElement.src='songs/Hey_Shivaya_Shankaraya_Hey_Mahesh_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";

})
document.getElementById('7').addEventListener('click',function(){
    audioElement.src='songs/Jharneshwar_Bhole_De_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";

})
document.getElementById('8').addEventListener('click',function(){
    audioElement.src='songs/Kedarnath_Official_MV_-_Vinay_Kat_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";

})
document.getElementById('9').addEventListener('click',function(){
    audioElement.src='songs/Mera_Bhola_Hai_Bhandari_Bhole_Nat_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";

})
document.getElementById('10').addEventListener('click',function(){
    audioElement.src='songs/Agam_-_Om_Namah_Shivay_Har_Har_bh_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";

})
document.getElementById('11').addEventListener('click',function(){
    audioElement.src='songs/Agam_-_Shambhu_Nath_Mukesh_Pardes_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";

})
document.getElementById('12').addEventListener('click',function(){
    audioElement.src='songs/Shiv_Tu_Bhola_Hai_(getmp3.pro).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.removeAttribute('src');
    masterPlay.src="icons/circle-pause-solid.svg";

})
