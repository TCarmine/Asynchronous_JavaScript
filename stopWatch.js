let btntimer = document.getElementById('start');
let btnrestart = document.getElementById ('restart');
let btnrecord = document.getElementById('record');

let box = document.getElementById('box');
let divP = document.getElementById('recTime');
let p = document.getElementById('holdTimer');


let time = 0;
let started = false;

p.innerHTML = " "+ time;

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

function startTimer(){
    if(started == false){
            interval = setInterval(function(){
                time++;
                p.innerHTML = ""+time;;
            },100)
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
    // let divP = document.createElement('div');
    // inserting div for dinamic paragrahs
    let ps = document.createElement('p');
    // insertAfter(divP, box);
    // divP.setAttribute("class","recTimes");
    
    divP.append(ps);
    ps.setAttribute("class","recorded");
    ps.innerHTML=""+time;  
    
})

btnrestart.addEventListener('click',function(){
    time = 0;
    p.innerHTML = ""+time;
    
    while (divP.firstChild) {
      divP.removeChild(divP.firstChild);
    } 
})