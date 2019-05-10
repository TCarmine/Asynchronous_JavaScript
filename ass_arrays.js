let cont = document.getElementById ("gridTable");
let p = document.getElementById("timer");
let clickedArray = [];
let numCompleted = 0;

let answersWords = { 
    "casa" : "house",
    "cavallo":"hourse",
    "ostetrica":"midwife",
    "a":"ab",
    "b":"bc",
    "c":"cd",
    "d":"de",
    "e":"ef",
    "f":"fh" 
}

let answers = [1,1,2,2,3,3,4,4,5];

for(let i=0; i<grid.length; i++){
    let cell = grid[i];

    cell.value = answersWords[keys];
    return cell[i];
}    
    // if(clickedArray.length == 2){
    //     if(clickedArray[0].value == clickedArray[1].value){
    //         ready = false;
    //         complete(clickedArray[0]); 
    //         complete(clickedArray[1]);
    //         clickedArray = []; 
    //         ready = true;
    //         cont.style.border = "2px solid black";
        
    //         if( numCompleted == 8 ){
    //         alert("You won in "+ time + " seconds!" );
    //         clearInterval(interval);
    //         }

    //     }else{
    //         ready = false;
    //         cont.style.border = "2px solid red";
            
              
    //         setTimeout(function(){
                
    //             hide(clickedArray[0]);
    //             hide(clickedArray[1]);
    //             clickedArray = []; 
    //             ready = true;
    //             cont.style.border = "2px solid black";
                
                

    //         },900);
            
    //     }
        
    // }
   
// }

