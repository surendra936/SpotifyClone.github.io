
//intilize the variable
let sangIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let masternamesong = document.getElementById('masternamesong');
let songItem = Array.from(document.getElementsByClassName('songItem'));





let Songs=[
    { SongName :"kaise btaye  ",filePath :"songs/1.mp3", coverPath:"covers/1.jpg"},
    { SongName :"bin tere bin  ",filePath :"songs/2.mp3", coverPath:"covers/2.jpg"},
    { SongName :"Kon hai wo duniya ",filePath :"songs/3.mp3", coverPath:"covers/3.jpg"},
    { SongName :"Dil meri na sune ",filePath :"songs/4.mp3", coverPath:"covers/4.jpg"},
    { SongName :"wo by God  ",filePath :"songs/5.mp3", coverPath:"covers/3.jpg"},

]

songItem.forEach((Element,i)=>{
  Element.getElementsByTagName('img')[0].src=Songs[i].coverPath;
  Element.getElementsByClassName('songname')[0].innerText=Songs[i].SongName; 

})



// handle play / pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.Currenttime<=0)
    {
      audioElement.play(); 
      masterplay.classList.remove('fa-play-circle');
      masterplay.classList.add('fa-pause-circle');
      gif.style.opacity =1;

    }
    else
    {
      audioElement.pause();
      masterplay.classList.remove('fa-play-circle');
     masterplay.classList.add('fa-pause-circle'); 
      gif.style.opacity =0;
    }
})


 //let audioElement =new Audio('1.mp3');
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    Progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myprogressBar.value = Progress;
})
// skipSongs for few minuts forward and backword!
myprogressBar.addEventListener('change',()=>{
audioElement.currentTime = myprogressBar.value * audioElement.duration/100;


})
const makeAllplays =()=>{
  Array.from(document.getElementsByClassName('songItemplay')).forEach((Element)=>{
    Element.classList.remove('fa-pause-circle');
    Element.classList.add('fa-play-circle');
  })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((Element)=>
{ Element.addEventListener('click',(e)=>{
    makeAllplays();
    sangIndex  = parseInt(e.target.id);

    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src= `songs/${sangIndex+1}.mp3`;
    audioElement.currentTime = 0;
    masternamesong.innerText=Songs[sangIndex].SongName;
    audioElement.play();
     gif.style.opacity =1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle'); 
   

  })
})
document.getElementById('next').addEventListener('click',()=>{

  if( sangIndex>5)
  {
   sangIndex = 0  
  }
  else{
    sangIndex += 1; 
  }

    audioElement.src=`songs/${sangIndex+1}.mp3`;
    audioElement.currentTime = 0;
    masternamesong.innerText=Songs[sangIndex].SongName;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle'); 

})
document.getElementById('previous').addEventListener('click',()=>{

  if( sangIndex<0)
  {
   sangIndex = 0  
  }
  else{
    sangIndex -= 1; 
  }

    audioElement.src=`songs/${sangIndex+1}.mp3`;
    audioElement.currentTime = 0;
    masternamesong.innerText=Songs[sangIndex].SongName;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle'); 

})