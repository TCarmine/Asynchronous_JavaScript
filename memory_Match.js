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
// console.log(engRand);
// console.log(randomized);

setUp();



function hide(cell){
    cell[ind].style.backgroundColor = "blue";
    cell[ind].innerHTML = "";
    cell[ind].clicked = false;
 }
 function reveal(cell){
        cell[ind].style.backgroundColor ="red";
        cell[ind].innerHTML = cell.value;
        cell[ind].clicked = true;
 }
 function complete(cell){
    cell[ind].completed = true;
    numCompleted++;
    cell[ind].style.backgroundColor = "purple";
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
  
    let randEng = rand(engWords);
    let randIta = rand(itaWords);
    console.log(randEng); 

    console.log(randIta); 

     

     


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
        
    //     // for(let j=0; j<answers.length; j++){
    //         box[t] = boxest[t]; 
        
    //         box.completed = false;
    //         box.clicked = false;
    //         let el = itaMapToNum.get(k);
    //         // console.log(k);
    //         box[t].value = el;
    //         console.log(box[t].value);
        
    //     // }
    // })    

    
    for(let ind =0; ind < randEng.length; ind++){
            
            cell[ind] = grid[ind]; 
            console.log(cell[ind]);
            console.log(randEng.length);
            cell[ind].completed = false;
            cell[ind].clicked = false;
            cell[ind].value = randEng[ind];
            console.log(cell[ind].value);

            box[ind] = boxes[ind]; 
        
            box[ind].completed = false;
            box[ind].clicked = false;
          
            box[ind].value = randIta[ind];
            console.log(box[ind].value); 
             
            cell[ind].addEventListener("mouseenter",function(){
                if(this.completed == false && this.clicked == false)
                this.style.background = "orange";
            });

            cell[ind].addEventListener("mouseleave",function(){
                if(this.completed == false && this.clicked == false)
                this.style.background = "blue";
            });
            box[ind].addEventListener("mouseenter",function(){
                if(this.completed == false && this.clicked == false)
                this.style.background = "orange";
            });

            box[ind].addEventListener("mouseleave",function(){
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
                    clickedArray.push(cell[ind].value);
                    reveal(cell[ind]);
                    console.log(clickedArray[0], clickedArray[1]);
                }
                
                if(clickedArray.length == 2){
                    if(
                        Array.from(pairsMap.keys()).forEach((k, l) => {
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
    


    




