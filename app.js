const btn =document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecog  = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecog();


recognition.onstart =()=>{
    console.log('voice is activated');
}

recognition.onresult = (event)=>{
    console.log(event);
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    read(transcript);
}
recognition.onerror = function(event) {
    content.textContent = 'Error occurred in recognition: ' + event.error;
}

btn.addEventListener('click' ,()=>{
    recognition.start();
})


const read =(msg)=>{
    const speech = new SpeechSynthesisUtterance();
    speech.text = msg;
    speech.volume = 1; 
    speech.pitch =0.5;
    speech.rate =1;
    window.speechSynthesis.speak(speech)
}