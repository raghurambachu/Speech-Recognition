let root_DOM = document.querySelector(".root"); 
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");
root_DOM.appendChild(p)


recognition.addEventListener("result",function(event){
    let transcript = Array.from(event.results)
                     .map(result => result[0])
                     .map(result => result.transcript)
                     .join("");
     p.textContent = transcript;
     if(event.results[0].isFinal){
          p = document.createElement("p");
          root_DOM.append(p);
     }
     
})


recognition.addEventListener("end",recognition.start);

recognition.start();

