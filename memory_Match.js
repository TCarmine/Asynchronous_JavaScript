let cont = document.getElementById ("gridTable");
let p = document.getElementById("timer");


let interval;
let started = false;
let time = 0;



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

function hide(cell){
    cell.style.backgroundColor = "blue";
    cell.innerHTML = "";
    cell.clicked = false;
}
function reveal(cell){
    cell.style.backgroundColor ="red";
    cell.innerHTML = cell.value;
    cell.clicked = true;
}
function complete(cell){
    cell.completed = true;
    numCompleted++;
    cell.style.backgroundColor = "purple";
}

function setUp(){
    let grid = document.getElementsByName("cell");
    let answers = randomAnswers();
    console.log(answers)
    
    for(let i=0; i<grid.length; i++){
            let cell = grid[i];

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
            //for keyboard input 
            document.addEventListener('keydown', function(event){
                if(event.key > 0 && event.key < 10 ){
                    grid[event.key - 1].click();
                }
            
            });
            // for reload the page on restart button click
            document.getElementById('restart').addEventListener('click', function(){
                location.reload();
            });

            cell.addEventListener('click',function(){
                if(ready == false){
                    return;
                }
                startTimer();
                if(this.clicked == false && this.completed == false){
                    clickedArray.push(this);
                    reveal(this);
                    console.log(clickedArray[0], clickedArray[1]);
                }
                
                if(clickedArray.length == 2){
                    if(clickedArray[0].value == clickedArray[1].value){
                        ready = false;
                        complete(clickedArray[0]); 
                        complete(clickedArray[1]);
                        clickedArray = []; 
                        ready = true;
                        cont.style.border = "2px solid black";
                    
                        if( numCompleted == 8 ){
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
                            ready = true;
                            cont.style.border = "2px solid black";
                            
                            
    
                        },900);
                        
                    }
                    
                }
            });
        

        
    }
    
}