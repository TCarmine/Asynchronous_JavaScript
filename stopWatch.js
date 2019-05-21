let btntimer = document.getElementById('start');
let btnrestart = document.getElementById ('restart');
let btnrecord = document.getElementById('record');

let box = document.getElementById('box');
let p = document.getElementById('holdTimer');


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
            started = false;
    }
    
}

btntimer.addEventListener('click', function(){
    startTimer();
})

btnrecord.addEventListener('click',function(){
    let ps = document.createElement('p');
    ps.innerHTML=""+time;  
    document.body.appendChild(ps); 
  


})