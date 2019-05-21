let cont = document.getElementById ("gridTable");
let gridBox = document.getElementById ("gridBox");

let grid = document.getElementsByName("cell");
let boxes = document.getElementsByName("box");
let p = document.getElementById("timer");

let cell=[];

let box=[];

let flag=false;
let interval;
let started = false;
let time = 0;

let clickedArray = [];

let ready = true;
let numCompleted = 0;
let timerId;

let engWords = ['house','gift','zoo','tidy','flat','to play','to see','boy','ice cream']


let itaWords = ['casa','regalo','zoo','ordinato','appartamento','giocare','guardare','ragazzo','gelato'] 



let engMapToNum = new Map(); 

let itaMapToNum = new Map(); 

let pairsMap = new Map(); 

let itaCopy = itaWords;
let engCopy = engWords;


let rand = (array)=>{
        array.sort(function(){
                return Math.random() - 0.5;
        })
          return  array;
}  

// let randomized  = rand(answers);



setUp();

let engRand = rand(engWords);
function startTimer(){
    if(started == false){
        interval = setInterval(function(){
            time++;
            p.innerHTML = "Time Elapsed: " + time;
        },1000)
        started = true;
    }
}


let hide = (cell)=>{
    cell.style.backgroundColor = "blue";
    cell.innerHTML = "";
    cell.clicked = false;
 }

 let reveal = (cell)=>{
        cell.style.backgroundColor ="red";
        cell.innerHTML = cell.value;
        cell.clicked = true;
 }
 let complete = (cell) =>{
    cell.completed = true;
    numCompleted++;
    cell.style.backgroundColor = "purple";
 }


function setUp(){
   
    for( val in engWords){
        
        const nk =  engWords[val];
            itaWords.forEach(function(element) {
           
           pairsMap.set(nk,itaWords[val]);  
       } )
    }  
           
    console.log(' ********** ' )
    

    let randEng = rand(engCopy);
    for(let ind =0; ind < engWords.length; ind++){
            
            cell[ind] = grid[ind]; 
          
            cell[ind].completed = false;
            cell[ind].clicked = false;
          
            cell[ind].value = randEng[ind];
                        
             
            cell[ind].addEventListener("mouseenter",function(){
                if(this.completed == false && this.clicked == false)
                this.style.background = "orange";
            });

            cell[ind].addEventListener("mouseleave",function(){
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

            cell[ind].addEventListener('click',function(){
                if(ready == false){
                    return;
                }
                startTimer();
                if(cell[ind].clicked == false && cell[ind].completed == false){
                    if(box[ind].clicked == false && box[ind].completed == false){
                        clickedArray.push(cell[ind].value);
                        reveal(cell[ind]);
                        console.log(clickedArray[0], clickedArray[1]);
                    }    
                }
                
                if(clickedArray.length == 2){
                    if(
                        Array.from(pairsMap.keys()).forEach((k, l) => {
                            let value = pairsMap.get(k);
                    
                                for(let j = 0;j < clickedArray.length ; j++){
                                    if(clickedArray[j] == value){
                                       
                                      if(k == clickedArray[j+1] || k == clickedArray[j-1] ){
                                       
                                        flag = true;
                                        
                                      }   
                                    }
                                            
                                }
                        
                          }) 
                    ){
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
                            
                            hide(cell[ind]);
                            clickedArray = []; 
                            ready = true;
                            cont.style.border = "2px solid black";
                        },900);
                        
                    }
                    
                }
            });
            
    }
    let randIta = rand(itaCopy);
    for(let index =0; index < itaWords.length; index++){
            
        box[index] = boxes[index]; 
        box[index].completed = false;
        box[index].clicked = false;

        
        box[index].value = randIta[index];
        box[index].addEventListener("mouseenter",function(){
            if(this.completed == false && this.clicked == false)
            this.style.background = "orange";
        });

        box[index].addEventListener("mouseleave",function(){
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

        box[index].addEventListener('click',function(){
            if(ready == false){
                return;
            }
            startTimer();
            if(box[index].clicked == false && box[index].completed == false){
                    clickedArray.push(box[index].value);
                    reveal(box[index]);
                    console.log(clickedArray[index]);
                   
            }
            
            if(clickedArray.length == 2){
                if(
                    Array.from(pairsMap.keys()).forEach((k, l) => {
                        let value = pairsMap.get(k);
                
                            for(let j = 0;j < clickedArray.length ; j++){
                                if(clickedArray[j+ind] == value){
                                   
                                  if(k == clickedArray[ind+j+1] || k == clickedArray[ind+j-1] ){
                                   
                                    flag = true;
                                    
                                  }   
                                }
                                        
                            }
                    
                      }) 
                ){
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
                        
                        hide(box[index]);
                        clickedArray = []; 
                        ready = true;
                        cont.style.border = "2px solid black";
                    },900);
                    
                }
                
            }
        });
        
}

    timerId = setTimeout(function(){
                    
        clearInterval(interval);
        
        function logout() {
            alert("You are now logged out.")
            //location.href = 'logout.html'
        }
    }.bind(this), 50000);
}             
    


    




