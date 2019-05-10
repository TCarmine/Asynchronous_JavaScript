let cont = document.getElementById ("gridTable");
let p = document.getElementById("timer");
let clickedArray = [];
let numCompleted = 0;

 let answers = [1,2,3,4,5,6,7,8,9];

 let engWords = ['att','btt','ctt','dtt','tte','ftt','ttg','tth','tti']


 let answers2 = [1,2,3,4,5,6,7,8,9];
let myMap = new Map();
// myMap = ([],[],[],[],[],[],[],[],[]);
// myMap.set('0', 'foo');
// myMap.set(1, 'bar');
// myMap.set({}, 'baz');

// let mapIter = myMap.entries();

// myMap.set(answers);

myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');

var newMap = new Map(); 

// keys.forEach((key, i) => result[key] = values[i]);



for( val in answers){
    const nk =  answers[val];
    Array.from(newMap.keys()).forEach((k, i) => {
            const v = newMap.set(i) = engWords[i]
            newMap.set(nk,v);
    });
}



// for( val in engWords){
//     const v =  engWords[val];
//     newMap.set(nk,v);
// }


// Array.from(myMap.keys()).forEach((k, i) => {
//   const v = myMap.get(k);
//   const nk = answers[i];
//   newMap.set(nk, v);
// });

// print map
for (let [nk, v] of newMap){
  console.log(nk, " -> ", v)
}


// console.log(myMap)
// console.log(mapIter.next().value); // ["0", "foo"]
// console.log(mapIter.next().value); // [1, "bar"]
// console.log(mapIter.next().value); // [Object, "baz"]

// let k = myMap.keys();

// console.log(k.next().value); 
// console.log(k.next().value); 
// console.log(k.next().value); 

// let zu  = k.next().value = ["basta"];

// console.log(mapIter.next().value); 
// console.log(zu);

// for (let n of answers) {
//     answers.push(key);
//   }

// let iterator1 = new Map();
// // let iterator2 = new Map();

// iterator1.set('0', 'foo');



// let mapIter = iterator1.entries();

// mapIter.next().value = "tre";

// console.log(mapIter);

// iterator2.set = ([[1 , "house"],
//     [2,"hourse"],
//     [3,"midwife"]] 
// )


function randomAnswers(){
    answers.next().sort(function(item){
       return .6 - Math.random();
   })
   return answers;
}

// answers.randomAnswers();




// let y = console.log(iterator1.next().value="tre");

// for (let [key, value] of iterator1) {
//     console.log(entry)
//   }

// var map1 = new Map();


// let a = console.log(map1.keys());




// // let grid;
// let print;
// let x = () => {
//     grid = document.getElementsByName("cell");
 
//         for(let i=0; i<grid.length; i++){
//             let cell = grid[i];

        
//         }
//         return  print;
// } 








// const obj = { 30: 'dadrandomAnswers', '4': 'kid', 19: 'teen', '100': 'grams'};



// obj.randomAnswers();

// console.log(obj)



let answersWordsITENG = { 
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

// let answersWordsITENG = { 
//      "house : " "casa",
//     "cavallo":"hourse",
//     "ostetrica":"midwife",    
//     "a":"ab",
//     "b":"bc",
//     "c":"cd",
//     "d":"de",
//     "e":"ef",
//     "f":"fh" 
// }



  
// function setUp(){
//     let grid = document.getElementsByName("cell");
//     let answers = randomAnswers();
//     console.log(answers)
    
//     for(let i=0; i<grid.length; i++){
//             let cell = grid[i];

//             cell.completed = false;cellcell
//             cell.clicked = false;
//             cell.value = answers[i];cell


//             cell.addEventListener("mouseenter",function(){
//                 if(this.completed == false && this.clicked == false)
//                 this.style.background = "orange";
//             });

//             cell.addEventListener("mouseleave",function(){
//                 if(this.completed == false && this.clicked == false)
//                 this.style.background = "blue";

//             });
//             //for keyboard input 
//             document.addEventListener('keydown', function(event){
//                 if(event.key > 0 && event.key < 10 ){
//                     grid[event.key - 1].click();
//                 }
            
//             });
//             // for reload the page on restart button click
//             document.getElementById('restart').addEventListener('click', function(){
//                 location.reload();
//             });

//             cell.addEventListener('click',function(){
//                 if(ready == false){
//                     return;
//                 }
                     
//                 if(clickedArray.length == 2){
//                     if(clickedArray[0].value == clickedArray[1].value){
//                         ready = false;
//                         complete(clickedArray[0]); 
//                         complete(clickedArray[1]);
//                         clickedArray = []; 
//                         ready = true;
//                         cont.style.border = "2px solid black";
                    
//                         if( numCompleted == 8 ){
//                         alert("You won in "+ time + " seconds!" );
//                         clearInterval(interval);
//                         }

//                     }else{
//                         ready = false;
//                         cont.style.border = "2px solid red";
                        
                          
//                         setTimeout(function(){
                            
//                             hide(clickedArray[0]);
//                             hide(clickedArray[1]);
//                             clickedArray = []; 
//                             ready = true;
//                             cont.style.border = "2px solid black";
                            
                            
    
//                         },900);
                        
//                     }
                    
//                 }
//             });
        

        
//     }
    
// }