
const btnMode = document.querySelector(".btn-mode-toggle");
const form = document.querySelector('form');
const list = document.querySelector('#topic-list');
const topic = document.querySelector('#topic');
const enterTopic = document.querySelector('#enter-topic');
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");

//Toggle light/dark mode

btnMode.addEventListener('click', function() {
   if(btnMode.innerHTML === '<i class="fas fa-sun"></i>') {
      btnMode.innerHTML = '<i class="fas fa-moon"></i>';
      document.body.classList.toggle('light-mode');
   } 
   else {
      btnMode.innerHTML = '<i class="fas fa-sun"></i>';
      document.body.classList.toggle('light-mode');
   }
});

//Enter today´s topic

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const topicInput = form.elements.topic;
    newInput(topicInput.value);
    topic.value = '';
    topic.style.display ='none';
    enterTopic.style.display = 'none';
});

const newInput = (topicInput) => {
    const newLi = document.createElement('li');  
    newLi.innerText = (`${topicInput}`);
    list.appendChild(newLi); 
};

//Start countdown timer

let counterMinutes = 60;
let counterSeconds = "00";
const finish_sound = new Audio("applause.mp3");

function initialTime() {
   minutes.innerHTML = counterMinutes;
   seconds.innerHTML = counterSeconds;
};

start.addEventListener('click', function() {     
   startTimer();
});

function startTimer() {
   counterMinutes = 59;
   counterSeconds = 59;

   minutes.innerHTML = counterMinutes;
   seconds.innerHTML = counterSeconds;

   let minutesInterval = setInterval(minutesTimer, 60000);
   let secondsInterval = setInterval(secondsTimer, 1000);

   function minutesTimer() {
      counterMinutes -= 1;
      minutes.innerHTML = counterMinutes; 
   }
  
   function secondsTimer() {
      counterSeconds -= 1;
      seconds.innerHTML = counterSeconds;

      if(counterSeconds < 10) {
         seconds.innerHTML = `0${counterSeconds}`
      }

      if(counterMinutes < 10) {
         minutes.innerHTML = `0${counterMinutes}`
      };

      if(counterSeconds <= 0) {
         if(counterMinutes <= 0) {
            clearInterval(minutesInterval);
            clearInterval(secondsInterval);  
            finish_sound.play();    
            //Next challenge: You did it! Throw in some confetti!      
         };   
         counterSeconds = 60;
      }
   }
};

//Reset countdown timer

reset.addEventListener('click', function() {     
   location.reload();
});



