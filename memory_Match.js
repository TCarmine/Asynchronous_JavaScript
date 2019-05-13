let cont = document.getElementById ("gridTable");
let gridBox = document.getElementById ("gridBox");

let grid = document.getElementsByName("cell");
let boxes = document.getElementsByName("box");
let p = document.getElementById("timer");

let cell;
console.log(cell);
let box;


let interval;
let started = false;
let time = 0;

let clickedArray = [];
let answers = [1,1,2,2,3,3,4,4,5];

let ready = true;
let numCompleted = 0;
let timerId;

let engWords = ['house','gift','zoo','tidy','flat','to play',' to see','boy','ice cream']


let itaWords = ['casa','regalo','zoo','ordinato','appartamento','giocare','guardare','ragazzo','gelato'] 

let myMap = new Map();


let engMapToNum = new Map(); 

let itaMapToNum = new Map(); 

let pairsMap = new Map(); 

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





function setUp(){
   
    let answers = randomAnswers();
    
    for( val in answers){
        const nk =  answers[val];
        engWords.forEach(function(element) {
          
         engMapToNum.set(nk,engWords[val]);  
        })
        const jk =  answers[val];
        itaWords.forEach(function(element) {
         itaMapToNum.set(jk,itaWords[val]);  
        })
    } 

    for( val in engWords){
 
        const nk =  engWords[val];
            itaWords.forEach(function(element) {
           
           pairsMap.set(nk,itaWords[val]);  
       } )
    }  
    
    for(let i=0; i<grid.length; i++){
            cell = grid[i];
            box  = boxes[i];
 
            cell.completed = false;
            cell.clicked = false;

            box.completed = false;
            box.clicked = false;

            for( val in engWords){
              cell.value = engMapToNum[val];
              console.log(engMapToNum[val]);
            }

            cell.addEventListener("mouseenter",function(){
                if(this.completed == false && this.clicked == false)
                this.style.background = "orange";
            });

            cell.addEventListener("mouseleave",function(){
                if(this.completed == false && this.clicked == false)
                this.style.background = "blue";
            });
            box.addEventListener("mouseenter",function(){
                if(this.completed == false && this.clicked == false)
                this.style.background = "orange";
            });

            box.addEventListener("mouseleave",function(){
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
                if(cell.clicked == false && cell.completed == false){
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
    

    // timerId = function interval() {
    //     // do things
    //     // console.log('This is a better version of setInterval');
    //     clearInterval(interval);   
    //     setTimeout(interval, 10000);
    // }).bind(this), 3000); 
    timerId = setTimeout(function(){
                    
        clearInterval(interval);
        
        function logout() {
            alert("You are now logged out.")
            //location.href = 'logout.html'
        }
    }.bind(this), 11000);
    
// timerId();

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