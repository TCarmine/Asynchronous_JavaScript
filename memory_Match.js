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
let answers = [1,2,3,4,5,6,7,8,9];

let ready = true;
let numCompleted = 0;
let timerId;

let engWords = ['house','gift','zoo','tidy','flat','to play','to see','boy','ice cream']


let itaWords = ['casa','regalo','zoo','ordinato','appartamento','giocare','guardare','ragazzo','gelato'] 



let engMapToNum = new Map(); 

let itaMapToNum = new Map(); 

let pairsMap = new Map(); 




let rand = (array)=>{
        array.sort(function(){
                return Math.random() - 0.5;
        })
          return  array;
}  

  let randomized  = rand(answers);

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
console.log(engRand);
console.log(randomized);

setUp();



function hide(cell){
    cell[i].style.backgroundColor = "blue";
    cell[i].innerHTML = "";
    cell[i].clicked = false;
 }
 function reveal(cell){
        cell[i].style.backgroundColor ="red";
        cell[i].innerHTML = cell.value;
        cell[i].clicked = true;
 }
 function complete(cell){
    cell[i].completed = true;
    numCompleted++;
    cell[i].style.backgroundColor = "purple";
 }


function setUp(){
   
   for( val in answers){
        const nk =  answers[val];
        engWords.forEach(function(element) {
          
         engMapToNum.set(nk,engWords[val]);  
        })
    } 
   
   
    for( el in answers){
          
        const jk =  answers[el];
        itaWords.forEach(function(element) {
            itaMapToNum.set(jk,itaWords[el]);  
        })
    }
   
    for( val in engWords){
        
        const nk =  engWords[val];
            itaWords.forEach(function(element) {
           
           pairsMap.set(nk,itaWords[val]);  
       } )
    }  
    
    // for (let [b, z] of engMapToNum){
    //     console.log(b, " -> ", z)
    // }

    // for (let [b, z] of engWords){
    //     console.log(b, " -> ", z)
    // }
  
    
<<<<<<< HEAD
    
        
    for( val in answers){   
            engMapToNum.forEach(function(element){
                for(let j=0; j<answers.length; j++){
                        cell[j] = grid[j]; 
                    
                        cell.completed = false;
                        cell.clicked = false;  
                    let el = engMapToNum[val];
                console.log(el);
                cell[j].value = el;
                console.log(cell[j].value);
                console.log(cell.length);
                }
            }) 
    }                

    console.log(' ********** ' )
    
    for(val in itaMapToNum ) {
=======
     for (let i = 1;i < engWords.length; i++){
        cell[i] = grid[i]; 
        cell.completed = false;
        cell.clicked = false;
        engWords[i] =  answers[i]
        cell[i].value = engWords[val];
        console.log(answers);
        console.log(engWords[i]);
        console.log(cell[i].value);
     }

     


    // Array.from(engWords.keys()).forEach((k, i) => {
    //         cell[k] = grid[k]; 
    //         cell.completed = false;
    //         cell.clicked = false;
    //         let el = engMapToNum.get(k);
    //         // console.log(k);
    //         cell[k].value = el;
    //         console.log(cell[k].value);
  
    // })    
    
    // for (let [b, z] of engMapToNum){
    //     console.log(b, " -> ", z)
    //   }
      
      
    console.log(' ********** ' )
    
    // Array.from(itaMapToNum.keys()).forEach((t, z) => {
>>>>>>> abc
        
    //     // for(let j=0; j<answers.length; j++){
    //         box[t] = boxest[t]; 
        
<<<<<<< HEAD
            box.completed = false;
            box.clicked = false;
            let el = itaMapToNum[val];
       
            box[j].value = el;
            console.log(box[j].value);
            console.log(box.length);
        
        
        }
    }  
=======
    //         box.completed = false;
    //         box.clicked = false;
    //         let el = itaMapToNum.get(k);
    //         // console.log(k);
    //         box[t].value = el;
    //         console.log(box[t].value);
        
    //     // }
    // })    
>>>>>>> abc

    
    for(let i=0; i<answers.length; i++){
            
 
            cell[i].addEventListener("mouseenter",function(){
                if(this.completed == false && this.clicked == false)
                this.style.background = "orange";
            });

            cell[i].addEventListener("mouseleave",function(){
                if(this.completed == false && this.clicked == false)
                this.style.background = "blue";
            });
            box[i].addEventListener("mouseenter",function(){
                if(this.completed == false && this.clicked == false)
                this.style.background = "orange";
            });

            box[i].addEventListener("mouseleave",function(){
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
                    clickedArray.push(cell[i].value);
                    reveal(cell[i]);
                    console.log(clickedArray[0], clickedArray[1]);
                }
                
                if(clickedArray.length == 2){
                    if(
                        Array.from(pairsMap.keys()).forEach((k, i) => {
                            let value = pairsMap.get(k);
                    
                                for(let j = 0;j < m.length ; j++){
                                    if(m[j] == value){
                                       
                                      if(k == m[j+1] || k == m[j-1] ){
                                       
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

    timerId = setTimeout(function(){
                    
        clearInterval(interval);
        
        function logout() {
            alert("You are now logged out.")
            //location.href = 'logout.html'
        }
    }.bind(this), 11000);
}             
    


    




