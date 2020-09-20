var audiofile = new Audio();
audiofile.src='../media/sample-audio.mp3';

const playAudio = () =>{
    audiofile.play();
}

const pauseAudio = () =>{
    audiofile.pause();
    alert('paused!.');
}