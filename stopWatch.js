let btntimer = document.getElementById('start');
let btnholder = document.getElementById ('restart');
let btnrecord = document.getElementById('record');

let p = document.getElementById('holdTimer');
let ps = document.getElementById('showTime');

let time = 0;
let started = false;

p.innerHTML = " "+ time;
function startTimer(){
    if(started == false){
            interval = setInterval(function(){
                time++;
                p.innerHTML = " " + time;
            },50)
        started = true;
    } else {
        clearInterval(interval);
         ps.innerHTML=""+time;  
         started = false;
    }
    
}

btntimer.addEventListener('click', function(){
    startTimer();
})

btnholder.addEventListener('click',function(){
  


})