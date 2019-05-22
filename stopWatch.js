let btntimer = document.getElementById('start');
let btnrestart = document.getElementById ('restart');
let btnrecord = document.getElementById('record');

let box = document.getElementById('box');
let divP = document.getElementById('recTimes');
let p = document.getElementById('holdTimer');


let time = 0;
let started = false;

p.innerHTML = " "+ time;

// function insertAfter(el, referenceNode) {
//     referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
// }

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
    // // inserting div for dinamic paragrahs
    
    // insertAfter(divP, box);
    // divP.setAttribute("id","recTimes");
    let ps = document.createElement('p');
    divP.appendChild(ps);
    ps.setAttribute("id","recorded")
    ps.innerHTML=""+time;  
    
})

btnrestart.addEventListener('click',function(){
    time = 0;
    p.innerHTML = ""+time;
    document.getElementById('recTimes').removeChild();
})