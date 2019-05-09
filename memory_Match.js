let cont = document.getElementById ("gridTable");
let p = document.getElementById("timer");
let grid = document.getElementsByClassName("cell");

let interval;
let started = false;
let time = 0;
let cell;
let clickedArray = [];
let answers = [1,1,2,2,3,3,4,4,5];
let ready = true;
let numCompleted = 0;

setUp();


function startTimer(){
    if(started == false){
        interval = setInterval(function(){
            time++;
            p.innerHTML = "Time Elapsed: " + time;
        },1000)
        started = true;
    }
}


function randomAnswers(){
     answers.sort(function(item){
        return .6 - Math.random();
    })
    return answers;
}

function hide(){
    cell.style.backgroundColor = "blue";
    // cell.innerHTML = "";
    cell.clicked = false;
}
function reveal(cell){
    cell.style.backgroundColor ="red";
    cell.innerHTML = cell.value;
    cell.clicked = true;
}
function complete(cell){
    numCompleted++;
    cell.completed = true;
    cell.style.backgroundColor = "purple";
}

function setUp(){
    let answers = randomAnswers();
  
    
    for(let i=0; i<grid.length; i++){
            cell = grid[i];
            cell.completed = false;
            cell.clicked = false;
            cell.value = answers[i];

            cell.addEventListener("mouseenter",function(){
                if(this.completed == false && this.clicked == false)
                this.style.background = "orange";
            });
            cell.addEventListener("mouseleave",function(){
                if(this.completed == false && this.clicked == false)
                this.style.background = "blue";

            });

            cell.addEventListener('click',function(){
                if(ready == false){
                    return;
                }
                if(this.clicked == false && this.completed == false){
                    clickedArray.push(this);
                    reveal(this);
                }
                startTimer();
                if(clickedArray.length==2){
                    if(clickedArray[0]==clickedArray[1].value){
                        complete(clickedArray[0]); 
                        complete(clickedArray[1]);

                        clickedArray =[];

                        if(numCompleted==8){
                            alert("You won in "+ time + " seconds!" );
                            clearInterval(interval);
                        }

                    }else{
                        ready = false;
                        cont.style.border = "2px solid red";
                        
                          
                        setTimeout(function(){
                            hide(clickedArray[0]);
                            hide(clickedArray[1]);
                            clickedArray = []; 
                            cont.style.border = "2px solid black";
                            ready = true;
                            console.log(i);
    
                        },900);
                        
                    }
                    
                }
            });
        

        
    }
    
}