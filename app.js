const container = document.querySelector('.container');
const text = document.getElementById('text');


const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const hold = (totalTime / 5);

breatheAnimation();

function breatheAnimation(){
    text.innerHTML = 'Breathe In!' ;

    container.className = 'container grow';


     setTimeout(() => {
         text.innerText = 'Hold';

         setTimeout(() => {
             text.innerText = 'Breathe Out!' ;

             container.className = 'container shrink' ;
         },hold);

     },breatheTime);
}

setInterval(breatheAnimation,totalTime);

